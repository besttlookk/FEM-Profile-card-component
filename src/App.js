import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="overlay overlay--top"></div>
      <div className="overlay overlay--bottom"></div>
      <Card />

      <Footer />
    </>
  );
}

export default App;
