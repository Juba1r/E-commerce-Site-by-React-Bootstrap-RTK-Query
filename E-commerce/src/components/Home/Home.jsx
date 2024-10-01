import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="hero-title">Black Friday Deals</h1>
          <p className="hero-subtitle">
            Alle Deals die je nodig hebt tijdens Black Friday
          </p>
          <div className="button-group mt-4">
            <a href="#stores" className="btn btn-warning mr-3">
              Winkels
            </a>
            <a href="#deals" className="btn btn-outline-success">
              Deals
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
