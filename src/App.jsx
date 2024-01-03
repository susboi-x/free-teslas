import "./App.css";
import APIs from "./Components/APIs/APIs";
import Backed from "./Components/Backed/Backed";
import Header from "./Components/Header/Header";
import Payments from "./Components/Payments/Payments";
import Try from "./Components/Try/Try";
import Yahoo from "./Components/Yahoo/Yahoo";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Payments />
      <APIs />
      <Yahoo />
      <Backed />
      <Try />
      <Footer />
    </>
  );
}

export default App;
