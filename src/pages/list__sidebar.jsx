import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Category from '../components/Category/Category'
const ListSidebar = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=6&skip=${(page - 1) * 6}`)
      .then(res => {
        setProducts(res.data.products);
        setTotalPages(Math.ceil(res.data.total / 6));
      });
  }, [page]);

  return (
    <div className="flex p-6 mt-44">
      <Category/>

      <main className="flex-1">
        <p className="mb-6 text-lg text-gray-800">
          We found <b className="text-emerald-500 font-medium">{products.length}</b> items for you!
        </p>

        <div className="flex flex-wrap gap-10 justify-center py-10">
          {products.map(product => (
            <div
              key={product.id}
              className="flex w-[1100px] h-[353px] bg-white rounded-xl shadow-md overflow-hidden relative p-6 box-border"
            >
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  New
                </span>
              )}

              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-[354px] h-[354px] object-contain border-r border-gray-300 mr-10"
              />

              <div className="flex flex-col justify-center flex-1">
                <p className="text-sm text-gray-400">{product.brand}</p>
                <h4 className="-mt-5 font-bold text-2xl text-slate-800">{product.title}</h4>

                <div className="flex items-center gap-6 text-sm text-gray-600 mt-2">
                  <span className="text-yellow-400"><i className="fa-solid fa-star"></i></span>
                  <span>{product.rating}</span>
                  <span>{product.weight}</span>
                </div>

                <p className="text-gray-500 mt-2 max-w-[795px]">{product.description}</p>

                <div className="flex items-center gap-3 my-4">
                  <span className="text-emerald-500 font-bold text-2xl">${product.price}</span>
                  <span className="text-gray-400 font-semibold text-lg line-through">${product.discountPercentage}</span>
                </div>

                <div className="flex items-center gap-5">
                  <button className="bg-emerald-500 text-white font-bold text-sm px-6 py-2 rounded-md flex items-center gap-3">
                    <i className="fa-solid fa-cart-shopping"></i> Add to Cart
                  </button>
                  <button className="text-gray-400 hover:underline text-sm font-bold flex items-center gap-2">
                    <i className="fa-solid fa-shuffle"></i> Add Compare
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-10 ml-16">
          <button
            className="w-10 h-10 bg-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-300"
            onClick={() => setPage(prev => (prev > 1 ? prev - 1 : prev))}
          >
            <i className="fa fa-arrow-left"></i>
          </button>

          {Array.from({ length: totalPages }, (_, i) => {
            const pageNumber = i + 1;
            if (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              Math.abs(pageNumber - page) <= 1
            ) {
              return (
                <button
                  key={i}
                  className={`w-10 h-10 rounded-full text-sm ${
                    page === pageNumber
                      ? 'bg-emerald-500 text-white font-bold'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            }

            if (
              (pageNumber === 2 && page > 3) ||
              (pageNumber === totalPages - 1 && page < totalPages - 2)
            ) {
              return <span key={i} className="px-1 text-xl text-gray-400">...</span>;
            }

            return null;
          })}

          <button
            className="w-10 h-10 bg-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-300"
            onClick={() => setPage(prev => (prev < totalPages ? prev + 1 : prev))}
          >
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ListSidebar;
