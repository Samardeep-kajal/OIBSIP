const express = require("express");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const Order = require("../models/orderModel");

const placeOrder = async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    // PaymentIntents API to create payments on stripe
    const payment = await stripe.paymentIntents.create(
      {
        amount: subtotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        payment_method_types: ["card"],
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    const payment_id = payment.id;

    // PaymentIntents API to confirm payments on stripe
    const confirm = await stripe.paymentIntents.confirm(payment_id, {
      payment_method: "pm_card_visa",
    });

    const confirm_url = confirm.next_action.use_stripe_sdk.stripe_js;

    if (confirm) {
      res
        .status(200)
        .send({ message: "Payment Success", redirectUrl: confirm_url });
      const newOrder = new Order({
        name: currentUser.username,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: payment_id,
      });
      newOrder.save();
    } else {
      res.status(500).send({
        message: "Payment Failed",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const getUserOrder = async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Order.find({ userid });
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
};

const allUserOrder = async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ createdAt: -1 });
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
};

module.exports = { placeOrder, getUserOrder, allUserOrder };
