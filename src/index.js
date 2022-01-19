import { StrictMode } from "react";
import ReactDOM from "react-dom";
//import foodpic from "./food.jpeg";

import App from "./App";

const rootElement = document.getElementById("root");

const dishs = [
  { name: "Salmon and Potatoes", chef: "Rachel" },
  { name: "Burrito", chef: "John" },
  { name: "Veggie Bowl", chef: "Rahkie" }
];

const Header = ({ name }) => {
  return <header>Hello {name}</header>;
};
function Footer() {
  return (
    <footer>
      <p> I'm footer | Author: Guru</p>
    </footer>
  );
}
const Main = () => {
  return (
    <section>
      we serve many dishs
      <src></src>
      <h2>Dishs</h2>
      <ul>
        {dishs.map((d) => (
          <li>
            Dish Name: {d.name} Chef: {d.chef}
          </li>
        ))}
      </ul>
    </section>
  );
};
ReactDOM.render(
  <StrictMode>
    <App />
    <Header name="Megha" />
    <Main />
    <Footer />
  </StrictMode>,
  rootElement
);
