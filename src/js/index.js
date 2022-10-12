//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let myDiv = document.querySelector("#app");
myDiv.className="container-fluid p-0"
ReactDOM.render(<Home />, document.querySelector("#app"));
