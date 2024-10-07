import "./Product.css";
import p1 from "../../assets/productimg1.png";
import p2 from "../../assets/productimg2.png";
import p3 from "../../assets/productimg3.png";
import p4 from "../../assets/productimg4.png";

const ProductComponent = () => {
  const productData = [
    {
      title: "Eziclean",
      description: "Eziclean Aqua Connect X850 Bekijk deal",
      price: "€ 499,99",
      image: p1,
    },
    {
      title: "KPN",
      description:
        "Nu 12 maanden Internet & TV voor 35,- per maand Bekijk deal",
      price: "Internet & TV",
      image: p2,
    },
    {
      title: "Pip Studio",
      description: "Shop nu je favoriete producten met hoge kortingen.",
      price: "tot - 50%",
      image: p3,
    },
    {
      title: "Vodafone",
      description:
        "Iphone 14 – Profiteer nú van hoge kortingen met de Vodafone Runners deals.",
      price: "€ 499,99",
      image: p4,
    },
  ];

  return (
    <div className="product-section container">
      <h1 className="section-title">
        Black <span className="Deals">Friday Apple</span> deals en <br />
        Aanbiedingen
        <br />
      </h1>
      <div className="product-list row row-cols-lg-4 d-flex justify-content-center ">
        {productData.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <h4 className="product-price">{product.price}</h4>
              <a href="" className="customp-btn">
                <span className="btn-text">Bekijk deal</span>
              </a>
            </div>
          </div>
        ))}
        <div className="p-5 w-auto">
          <a href="" className="customp-btn">
            <span className="btn-text">
              Bekijk alle black friday deals van un
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
