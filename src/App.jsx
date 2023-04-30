import Card from "./components/Card";
import Header from "./components/Header";
import "./styles.css";
import data from "./data.js";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <>
      <div className="md:w-3/5 md:mx-auto md:shadow-lg md:pb-5">
        <Header />
        <section className="cards-list">{cards}</section>
      </div>
    </>
  );
}

export default App;
