import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white pt-5 pb-4">
      <div className="container">
        <div className="row gap-5 text-nowrap">
          {/* Webshops Section */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5>Webshops</h5>
            <ul className="list-unstyled">
              <li>Bol.com</li>
              <li>Coolblue</li>
              <li>De Bijenkorf</li>
              <li>MediaMarkt</li>
              <li>Rituals</li>
              <li>T-Mobile</li>
              <li>T-Mobile Thuis</li>
              <li>Ziggo</li>
            </ul>
          </div>

          {/* Newest Products Section */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5>Nieuwste producten</h5>
            <ul className="list-unstyled">
              <li>iPhone 12</li>
              <li>Airpods 3</li>
              <li>Playstation 5</li>
              <li>Xbox Series X</li>
              <li>Nintendo Switch aanbieding</li>
              <li>Samsung Galaxy S21</li>
              <li>Dyson V15</li>
              <li>Samsung QLED tv</li>
              <li>JBL Charge 5</li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5>Categorieën</h5>
            <ul className="list-unstyled">
              <li>iPhone 12</li>
              <li>Airpods 3</li>
              <li>Playstation 5</li>
              <li>Xbox Series X</li>
              <li>Nintendo Switch aanbieding</li>
              <li>Samsung Galaxy S21</li>
              <li>Dyson V15</li>
              <li>Samsung QLED tv</li>
              <li>JBL Charge 5</li>
            </ul>
          </div>

          {/* Cities Section */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5>Steden</h5>
            <ul className="list-unstyled">
              <li>iPhone 12</li>
              <li>Airpods 3</li>
              <li>Playstation 5</li>
              <li>Xbox Series X</li>
              <li>Nintendo Switch aanbieding</li>
              <li>Samsung Galaxy S21</li>
              <li>Dyson V15</li>
              <li>Samsung QLED tv</li>
              <li>JBL Charge 5</li>
            </ul>
          </div>

          {/* Important Pages Section */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5>Belangrijke pagina&apos;s</h5>
            <ul className="list-unstyled">
              <li>Black Friday deals</li>
              <li>Black Friday categorieën</li>
              <li>Black Friday producten</li>
              <li>Black Friday winkels</li>
              <li>Black Friday België</li>
              <li>Black Friday España</li>
              <li>Black Friday Nieuws</li>
              <li>Black Friday 2023</li>
              <li>Cyber Monday</li>
              <li>Singles Day</li>
              <li>Wat is Black Friday?</li>
              <li>Geschiedenis Black Friday</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom mt-4 pt-3 border-top">
          <div className="d-flex justify-content-between align-items-center">
            <div className="footer-links">
              <a href="#">Contact</a> | <a href="#">Samenwerken & Adverteren</a>{" "}
              | <a href="#">Over Black Friday Deals</a> |{" "}
              <a href="#">Privacy</a> |{" "}
              <a href="#">Copyright BlackFridayDeals 2023</a> |{" "}
              <a href="#">xml sitemap</a>
            </div>
            <div>
              <span>Black Friday 2023 - España</span> |
              <span> Tempelierstraat 20A, 2012 ED, Haarlem</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
