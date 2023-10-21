const express = require("express");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

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

module.exports = { placeOrder };
