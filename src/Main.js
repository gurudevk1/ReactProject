const dishs = [
  { name: "Salmon and Potatoes", chef: "Rachel" },
  { name: "Burrito", chef: "John" },
  { name: "Veggie Bowl", chef: "Rahkie" }
];
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
export default Main;
