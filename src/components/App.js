import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [currentPizza, setCurrentPizza] = useState({
    topping: "",
    size: "small",
    vegetarian: true,
    
  });

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(resp => resp.json())
    .then(data => setPizzas(data))
  }, [])

  function editPizza(pizza) {
    setCurrentPizza(pizza);
  }

  function changePizza(e) {
    if (e.target.type === "radio") {
      setCurrentPizza({...currentPizza, [e.target.name]: !currentPizza.vegetarian})
    }
    else {
      setCurrentPizza({...currentPizza, [e.target.name]: e.target.value})
    }
  }

  function pizzaSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/pizzas/${currentPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentPizza)
    })
    .then(resp=>resp.json())
    .then(returnedPizza => {
      const newPizzas = pizzas.map(pizza => {
        if (pizza.id === returnedPizza.id) {
          return returnedPizza;
        }
        else return pizza;
      })
      setPizzas(newPizzas);
    })
  }

  return (
    <>
      <Header />
      <PizzaForm currentPizza={currentPizza} changePizza={changePizza} pizzaSubmit={pizzaSubmit}/>
      <PizzaList pizzas={pizzas} editPizza={editPizza}/>
    </>
  );
}

export default App;
