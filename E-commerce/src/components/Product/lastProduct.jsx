import "bootstrap/dist/css/bootstrap.min.css";
import lastproduct1 from "../../assets/lastproduct1.png";
import lastproduct2 from "../../assets/lastproduct2.png";
import lastproduct3 from "../../assets/lastproduct3.png";
import lastproduct4 from "../../assets/lastproduct4.png";
import lastproduct5 from "../../assets/lastproduct5.png";
import lastproduct6 from "../../assets/lastproduct6.png";

const LastProduct = () => {
  return (
    <div className="container my-4 mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Card 1 */}
        <div className="col">
          <div className="card h-100">
            <img
              src={lastproduct1}
              className="card-img-top"
              alt="Black Friday Weeks"
            />
            <div className="card-body">
              <h5 className="card-title Deals fw-bolder">
                LET&apos;S GO BLACK FRIDAY WEEKS bij MediaMarkt
              </h5>
              <p className="card-text">
                Mediamarkt biedt tijdens de Black Friday weken kortingen op
                elektronica, televisies
              </p>
              <a href="" className="customp-btn mt-3">
                <span className="btn-text">Bekijk deal</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div className="card h-100">
            <img
              src={lastproduct2}
              className="card-img-top"
              alt="Beste Electronica Deals"
            />
            <div className="card-body">
              <h5 className="card-title Deals fw-bolder">
                De beste elektronica deals in 2022
              </h5>
              <p className="card-text">
                Zoals elk jaar zijn er weer geweldige aanbiedingen in heel
                Nederland tijdens Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, sequi.
              </p>
              <a href="" className="customp-btn mt-3">
                <span className="btn-text">Bekijk deal</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div className="card h-100">
            <img
              src={lastproduct3}
              className="card-img-top"
              alt="Nieuwe Black Friday Producten"
            />
            <div className="card-body">
              <h5 className="card-title Deals fw-bolder">
                Nieuw: Black Friday producten!
              </h5>
              <p className="card-text">
                Dit jaar hebben we een nieuwe toevoeging op BlackFridaydeals.nu.
                Je kunt vanaf Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <a href="" className="customp-btn mt-3">
                <span className="btn-text">Bekijk deal</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col">
          <div className="card h-100">
            <img
              src={lastproduct4}
              className="card-img-top"
              alt="Nintendo Switch OLED"
            />
            <div className="card-body">
              <h5 className="card-title Deals fw-bolder">
                Nintendo Switch OLED: de nieuwste console van Nintendo
              </h5>
              <p className="card-text">
                Het hoge woord is eruit. Nintendo heeft zijn nieuwste console
                aangekondigd...
              </p>
              <a href="" className="customp-btn mt-3">
                <span className="btn-text">Bekijk deal</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col">
          <div className="card h-100">
            <img
              src={lastproduct5}
              className="card-img-top"
              alt="Activiteiten met Kortingen"
            />
            <div className="card-body">
              <h5 className="card-title Deals fw-bolder">
                Primeur: dit jaar ook activiteiten met hoge kortingen!
              </h5>
              <p className="card-text">
                De afgelopen jaren heeft Black Friday zijn opmars gemaakt in
                Nederland...
              </p>
              <a href="" className="customp-btn mt-3">
                <span className="btn-text">Bekijk deal</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col">
          <div className="card h-100">
            <img
              src={lastproduct6}
              className="card-img-top"
              alt="Producten Verwacht Black Friday"
            />
            <div className="card-body">
              <h5 className="card-title Deals fw-bolder">
                Welke producten kan je verwachten tijdens Black Friday?
              </h5>
              <p className="card-text">
                Black Friday staat weer voor de deur. Veel mensen vragen zich af
                welke producten...
              </p>
              <a href="" className="customp-btn mt-3">
                <span className="btn-text">Bekijk deal</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastProduct;
