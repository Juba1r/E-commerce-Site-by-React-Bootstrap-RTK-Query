import "./ProductCategory.css";
import productctg1 from "../../assets/productcategory1.png";
import productctg2 from "../../assets/productcategory2.png";
import productctg3 from "../../assets/productcategory3.png";
import productctg4 from "../../assets/productcategory4.png";
import productctg5 from "../../assets/productcategory5.png";
import productctg6 from "../../assets/productcategory6.png";
import productctg7 from "../../assets/productcategory7.png";
import productctg8 from "../../assets/productcategory8.png";

const categories = [
  {
    name: "Elektronica",
    items: [
      "Laptops",
      "Tablets",
      "Soundbars",
      "Televisies",
      "Stofzuigers",
      "Wasmachines",
    ],
    image: productctg1,
  },
  {
    name: "Telefoons",
    items: [
      "Losse telefoons",
      "Telefoon abonnement",
      "Sim Only Vergelijken",
      "Refurbished",
      "Telefoonhoesjes",
      "Samsung Galaxy S20",
      "Huawei",
    ],
    image: productctg2,
  },
  {
    name: "Apple",
    items: [
      "Vakantie & Reizen",
      "Speelgoed",
      "Lego",
      "Elektrische Fiets",
      "Boeken, Films & Muziek",
      "Hotels",
    ],
    image: productctg3,
  },
  {
    name: "Gaming",
    items: [
      "Nintendo",
      "Playstation",
      "Xbox",
      "Controllers",
      "FIFA",
      "Call Of Duty",
    ],
    image: productctg4,
  },
  {
    name: "Kleding",
    items: [
      "Dameskleding",
      "Herenkleding",
      "Meisjeskleding",
      "Jongenskleding",
      "Schoenen",
      "Horloges",
    ],
    image: productctg5,
  },
  {
    name: "Vrije tijd",
    items: [
      "Vakantie & Reizen",
      "Speelgoed",
      "Lego",
      "Elektrische Fiets",
      "Boeken, Films & Muziek",
      "Hotels",
    ],
    image: productctg6,
  },
  {
    name: "Huis en Tuin",
    items: [
      "Koelkasten",
      "Meubels",
      "Internet, TV en Bellen",
      "Vaatwasser",
      "Beveiligingscamera's",
      "Bedden",
    ],
    image: productctg7,
  },
  {
    name: "Verzorging",
    items: [
      "Make-up",
      "Parfum",
      "Scheerapparaten",
      "Tandenborstels",
      "Rituals",
    ],
    image: productctg8,
  },
];

const ProductCategory = () => {
  return (
    <div className="category-section container">
      <h2 className="category-title text-start">
        Black Friday 2023 <br />
        <span className="category-highlight">Categorieën</span>
      </h2>
      <div className="row row-cols-2">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <div className="d-flex justif">
              <ul className="category-list mt-5">
                <h3 className="category-name ">{category.name}</h3>
                {category.items.map((item, idx) => (
                  <li key={idx} className="category-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
