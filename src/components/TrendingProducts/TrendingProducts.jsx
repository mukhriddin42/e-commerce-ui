import React from "react";

const categories = [
  {
    title: "Top Selling",
    products: [
      {
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        price: 32.85,
        oldPrice: 35.8,
        img: "🥕",
      },
      {
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        price: 32.85,
        oldPrice: 35.8,
        img: "🌶️",
      },
      {
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        price: 32.85,
        oldPrice: 35.8,
        img: "🧃",
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
        img: "🍌",
      },
      {
        name: "Seeds of Change Organic Quinoa",
        price: 32.85,
        oldPrice: 35.8,
        img: "🍉",
      },
      {
        name: "Naturally Flavored Cinnamon Vanilla Coffee",
        price: 32.85,
        oldPrice: 35.8,
        img: "🍈",
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
        img: "🥭",
      },
      {
        name: "Organic Frozen Triple Berry Blend",
        price: 32.85,
        oldPrice: 35.8,
        img: "🍍",
      },
      {
        name: "Oroweat Country Buttermilk Bread",
        price: 32.85,
        oldPrice: 35.8,
        img: "🌽",
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
        img: "🍎",
      },
      {
        name: "Angie’s Boomchickapop Kettle Corn",
        price: 32.85,
        oldPrice: 35.8,
        img: "🥑",
      },
      {
        name: "All Natural Italian-Style Chicken Meatballs",
        price: 32.85,
        oldPrice: 35.8,
        img: "🍊",
      },
    ],
  },
];

const TrendingProducts = () => {
  return (
    <div className="p-4">
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
                  <div className="text-3xl">{product.img}</div>
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
