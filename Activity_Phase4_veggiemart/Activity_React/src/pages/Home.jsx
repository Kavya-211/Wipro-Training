import Header from "../components/Header";
import VegetableCard from "../components/VegetableCard"; // already imported
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  const vegetables = [
    {
      id: 1,   // ✅ ADDED ID
      name: "Tomato",
      price: 40,
      image: "/images/Tomato.jpg"
    },
    {
      id: 2,
      name: "Potato",
      price: 30,
      image: "/images/Potato.jpg"
    },
    {
      id: 3,
      name: "Carrot",
      price: 60,
      image: "/images/Carrot.jpg"
    },
    {
      id: 4,
      name: "Broccoli",
      price: 90,
      image: "/images/Broccoli.jpg"
    }
  ];

  return (
    <>
      <Header />

      <div className="home-container">
        <h2>Fresh Vegetables</h2>

        <div className="veg-grid">
          {vegetables.map((veg) => (
            // ✅ USING YOUR VegetableCard COMPONENT
            <VegetableCard key={veg.id} vegetable={veg} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
