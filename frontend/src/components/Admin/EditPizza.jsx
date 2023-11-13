import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaById } from "../../actions/pizzaAction";
import { useParams } from "react-router-dom";

const EditPizza = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizzaById(params.pizzaId));
  }, [dispatch]);
  return (
    <div style={{ marginTop: "10vh" }}> Chalo Pizza Edit Karte hai!!!</div>
  );
};

export default EditPizza;
