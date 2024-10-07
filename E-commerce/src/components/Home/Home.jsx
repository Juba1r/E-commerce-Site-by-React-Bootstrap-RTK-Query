import "./Home.css";
import "./buttonHome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import banner from "../../assets/frontendposter.png";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";
import client6 from "../../assets/client6.png";
import client7 from "../../assets/client7.png";
import client8 from "../../assets/client8.png";
import Footer from "../Footer/Footer";
import Product1 from "../Product/Product1";
import Product2 from "../Product/Product2";
import Product3 from "../Product/Product3";
import Product4 from "../Product/Product4";
import Product5 from "../Product/Product5";
import Product6 from "../Product/Product6";
import ProductCategory from "../Product/ProductCategory";
import TextContent from "../../components/TextContent/textContent";
import LastProduct from "../../components/Product/lastProduct";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="home-container">
        <div className="navbar-custom">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              {/* Left Section - Logo */}
              <div className="navbar-logo">
                <img
                  src={banner}
                  alt="Black Friday Logo"
                  width="150"
                  height="190"
                />
              </div>

              {/* Hamburger Icon for Mobile */}
              <div
                className="hamburger-icon d-md-none"
                onClick={handleToggleMenu}
              >
                <FaBars />
              </div>

              {/* Right Section - Search Icon and Nav Links */}
              <div className="d-flex align-items-center">
                <div className="search-bar d-md-none">
                  
                  {/* Show search icon on mobile */}
                  <FaSearch className="search-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Hamburger Menu (Mobile Only) */}
          <div className={`navbar-collapse ${isMenuOpen ? "open" : ""}`}>
            <div className="nav-links">
              <a href="#electronics">Elektronica</a>
              <a href="#phones">Telefoons</a>
              <a href="#apple">Apple</a>
              <a href="#gaming">Gaming</a>
              <a href="#clothing">Kleding</a>
              <a href="#leisure">Vrije tijd</a>
              <a href="#home-garden">Huis & Tuin</a>
              <a href="#care">Verzorging</a>
              <a href="#bedding">Bedden</a>
            </div>
          </div>
        </div>

        <div className="hero-section d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h1 className="hero-title">Black Friday Deals</h1>
            <p className="hero-subtitle">
              Alle Deals die je nodig hebt tijdens Black Friday
            </p>
            <div className="gap-btn mt-4">
              <a href="" className="custom-btn">
                <span className="btn-text">Winkels</span>
              </a>
              <a href="" className="custom-btn">
                <span className="btn-text">Deals</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="client-container container-fluid">
        <div className="clients-logoslide">
          <img src={client1} alt="client1" width={100} height={90} />
          <img src={client2} alt="client2" width={150} height={100} />
          <img src={client3} alt="client3" width={150} height={100} />
          <img src={client4} alt="client4" width={150} height={100} />
          <img src={client5} alt="client5" width={150} height={110} />
          <img src={client6} alt="client6" width={150} height={100} />
          <img src={client7} alt="client7" width={200} height={100} />
          <img src={client8} alt="client8" width={150} height={100} />
        </div>
        <div className="clients-logoslide">
          <img src={client1} alt="client1" width={100} height={90} />
          <img src={client2} alt="client2" width={150} height={100} />
          <img src={client3} alt="client3" width={150} height={100} />
          <img src={client4} alt="client4" width={150} height={100} />
          <img src={client5} alt="client5" width={150} height={110} />
          <img src={client6} alt="client6" width={150} height={100} />
          <img src={client7} alt="client7" width={200} height={100} />
          <img src={client8} alt="client8" width={150} height={100} />
        </div>
      </div>
      <Product1 />
      <Product2 />
      <Product3 />
      <Product4 />
      <Product5 />
      <Product6 />
      <ProductCategory />
      <TextContent />
      <LastProduct />
      <Footer />
    </>
  );
};

export default Home;
