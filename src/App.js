import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "set-name":
        return {
          ...state,
          name: action.payload.name,
        };
      case "set-price":
        return {
          ...state,
          price: action.payload.price,
        };
      default:
        throw new Error("Unknown action!");
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    id: "",
    name: "",
    type: "",
    price: 1337,
  });

  dispatch({ type: "set-name", payload: { name: "Alex" } });
  dispatch({ type: "set-price", payload: { price: 0 } });

  const [data, setData] = useState({
    id: "",
    name: "",
    type: "",
    price: 1337,
  });

  setData((previous) => {
    return {
      ...previous,
      name: "Hej",
    };
  });

  return <div className="App"></div>;
}

export default App;
