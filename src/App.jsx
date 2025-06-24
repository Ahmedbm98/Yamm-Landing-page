import "./App.css";
import ClientsDegrade from "./ClientsDegrade";
import Brands from "./Components/Brands";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Joinus from "./Components/Joinus";
import Navbar from "./Components/Navbar";
import PlatformsEcommerces from "./Components/PlatformsEcommerces";
import StoreOrder from "./Components/StoreOrder";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <StoreOrder />
      <ClientsDegrade />
      <PlatformsEcommerces />
      <Brands />
      <Faq />
      {/* <Testmonial /> */}
      <Joinus />
      <Footer />
    </>
  );
}

export default App;
