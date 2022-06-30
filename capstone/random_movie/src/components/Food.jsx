import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import "../styles/food.css";


export const Food = (props) => {
  const [foodItem, setFoodItem] = useState({});
  const [ingredient, setIngredient] = useState([]);
  const [food, setFood] = useState()
  const { route, setRoute } = props;

  useEffect(() => {
    setRoute("Food");
  }, [route]);

  const getFood =  (e) => {
    e.preventDefault();
    setIngredient('')
    setFood('true')
    axios.get("http://localhost:4004/food").then((res) => {
      if (foodItem) {
        setFoodItem();
        setFoodItem(res.data.meals[0]);
      }
      for (const ingredient in res.data.meals[0]) {
        if (ingredient.includes("strIngredient"))
          setIngredient((prevalue) => {
            return [...prevalue, res.data.meals[0][ingredient]];
          });
      }
    });
  };

  console.log(ingredient);
  return (
    <div className="food">
      <br />
      <div className="button">
        <h3>Find a recipe</h3>
        <Button variant="contained" color="primary" onClick={getFood}>
          Get food
        </Button>
      </div>
      {food && <div className="foodCard">
      {/* <div className="foodType">
        <form typeof="submit">
          <label htmlFor="food">Select by category</label>
          <select name="food" id="">
            <option value=""></option>
            <option value="Breakfast">Breakfast</option>
            <option value="Side">Side</option>
            <option value="Pasta">Pasta</option>
            <option value="Dessert">Dessert</option>
            <option value="Starter">Starter</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Seafood">Seafood</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Beef">Beef</option>
            <option value="Chicken">Chicken</option>
            <option value="Lamb">Lamb</option>
            <option value="Pork">Pork</option>
          </select> <br />
          <Button variant="contained" color="primary" typeof="submit">
            Get Category
          </Button>
        </form>
      </div> */}
      {foodItem && (
        <div className="foodcard">
          <div className="f">
          {foodItem && <img src={foodItem.strMealThumb} alt="" />}
          </div>
          <div className="f">
          {foodItem && <h1>{foodItem.strMeal}</h1>}
          </div>
          <div className="f">
          {ingredient &&   <div className="ingredient">
            <h4>Ingredients:</h4>
          <select name="" id="">
            {ingredient && (ingredient.map(el => {
        return <option>{el}</option>
      }))}
      </select>
          </div>}
          </div>
        </div>
      )}
      <h2>{foodItem.strMeal}-
      <a href={foodItem.strSource} rel="none" target="_blank">
        Recipe Link
      </a>
      </h2>
      <h2>{foodItem.strMeal}
      <a href={foodItem.strYoutube} rel="none" target="_blank">
         Video Link
      </a>
      </h2>
      </div>}
    </div>
  );
};
