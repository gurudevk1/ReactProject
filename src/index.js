import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";
//import foodpic from "./food.jpeg";
import Main from "./Main";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
    <Header name="Megha" />
    <Main />
    <Footer />
  </StrictMode>,
  rootElement
);
