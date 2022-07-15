import React from "react";

function PizzaForm({currentPizza, pizzaSubmit, changePizza}) {

  console.log(currentPizza, "from pizzaform")
  
  

  return (
    <form onSubmit={pizzaSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={changePizza} 
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={currentPizza.topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={changePizza} value={currentPizza.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={changePizza} 
              checked= {currentPizza.vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={changePizza}
              checked= {!currentPizza.vegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
