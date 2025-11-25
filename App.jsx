import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/components/Navbar.jsx";
import Discover from "./assets/components/Discover.jsx";
import ExploreD from "./assets/components/ExploreD.jsx";
import Jewelry from "./assets/components/jewelry.jsx";
import Diamond from "./assets/components/sp_diamond.jsx";
import Bestseller from "./assets/components/bestseller.jsx";
import Mono from "./assets/components/mono.jsx";
import DesignR from "./assets/components/designR.jsx";
import ShopBy from "./assets/components/shopBy.jsx";
import Watch from "./assets/components/watch.jsx";
import ColorD from "./assets/components/colorD.jsx";
import MadeTo from "./assets/components/madeTo.jsx";
import Chicago from "./assets/components/chicago.jsx";
import Inspired from "./assets/components/Inspired.jsx";
import CD from "./assets/components/CD.jsx";
import HT from "./assets/components/HT.jsx";
import RV from "./assets/components/RV.jsx";
import Footer from "./assets/components/footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Discover />
      <ExploreD />
      <Jewelry />
      <Diamond />
      <Bestseller />
      <Mono />
      <DesignR />
      <ShopBy />
      <Watch />
      <ColorD />
      <MadeTo />
      <Chicago />
      <Inspired />
      <CD />
      <HT />
      <RV />
      <Footer />
    </>
  );
}

export default App;
