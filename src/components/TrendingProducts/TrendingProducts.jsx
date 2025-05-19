import React from "react";
import categoryImg1 from "../../assets/img/category1.png";
import categoryImg2 from "../../assets/img/category2.png";
import categoryImg3 from "../../assets/img/category3.png";
import categoryImg4 from "../../assets/img/category4.png";
import categoryImg5 from "../../assets/img/category5.png";
import categoryImg6 from "../../assets/img/category6.png";
import categoryImg7 from "../../assets/img/category7.png";
import categoryImg8 from "../../assets/img/category8.png";
import categoryImg9 from "../../assets/img/category9.png";
import categoryImg10 from "../../assets/img/category10.png";
import categoryImg11 from "../../assets/img/category11.png";
import categoryImg12 from "../../assets/img/category12.png";

const categories = [
  {
    title: "Top Selling",
    products: [
      {
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        price: 32.85,
        oldPrice: 35.8,
        img: categoryImg1,
      },
      {
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        price: 32.85,
        oldPrice: 35.8,
        img: categoryImg2,
      },
      {
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        price: 32.85,
        oldPrice: 35.8,
        img: categoryImg3,
      },
    ],
  },
  {
    title: "Trending Products",
    products: [
      {
        name: "Organic Cage-Free Grade A Large Brown Eggs",
        price: 32.85,
        oldPrice: 35.8,
        img: categoryImg4,
      },
      {
        name: "Seeds of Change Organic Quinoa",
        price: 32.85,
        oldPrice: 35.8,
        img: categoryImg5,
      },
      {
        name: "Naturally Flavored Cinnamon Vanilla Coffee",
        price: 32.85,
        oldPrice: 35.8,
        img: categoryImg6,
      },
    ],
  },
  {
    title: "Recently added",
    products: [
      {
        name: "Pepperidge Farm Farmhouse Hearty White Bread",
        price: 32.85,
        oldPrice: 35.8,
        img: categoryImg7,
      },
      {
        name: "Organic Frozen Triple Berry Blend",
        price: 32.85,
        oldPrice: 35.8,
        img: categoryImg8,
      },
      {
        name: "Oroweat Country Buttermilk Bread",
        price: 32.85,
        oldPrice: 35.8,
        img: categoryImg9,
      },
    ],
  },
  {
    title: "Top Rated",
    products: [
      {
        name: "Foster Farms Takeout Classic Buffalo Wings",
        price: 32.85,
        oldPrice: 35.8,
        img: categoryImg10,
      },
      {
        name: "Angie's Boomchickapop Kettle Corn",
        price: 32.85,
        oldPrice: 35.8,
        img: categoryImg11,
      },
      {
        name: "All Natural Italian-Style Chicken Meatballs",
        price: 32.85,
        oldPrice: 35.8,
        img: categoryImg12,
      },
    ],
  },
];

const TrendingProducts = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.title} className="cursor-pointer">
            <h2 className="text-lg font-semibold mb-3">{category.title}</h2>
            <div className="space-y-4">
              {category.products.map((product, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
                >
                  <img src={product.img} alt="" />
                  <div>
                    <p className="font-medium text-sm">{product.name}</p>
                    <div className="flex items-center text-xs text-yellow-500 mt-1">
                      ⭐ <span className="ml-1 text-gray-600">(4.0)</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-green-600 font-semibold">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="line-through text-gray-400 ml-2">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
