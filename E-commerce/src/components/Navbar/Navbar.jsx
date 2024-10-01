import { Container, Row, Col, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import banner from "../../assets/frontendposter.png";

const NavigationBar = () => {
  return (
    <div className="navbar-custom">
      <Container fluid>
        <Row className="align-items-center">
          {/* Logo on the left */}
          <Col md={2} className="text-left">
            <div className="navbar-brand">
              <img
                src={banner}
                alt="Black Friday Logo"
                width="40"
                height="40"
              />
              
            </div>
          </Col>

          {/* Navigation Links */}
          <Col md={8} className="text-center">
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
          </Col>

          {/* Search Bar with Icon on the right */}
          <Col md={2} className="text-right">
            <div className="search-bar">
              <FormControl
                type="text"
                placeholder="Zoeken"
                className="search-input"
              />
              <FaSearch className="search-icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavigationBar;
