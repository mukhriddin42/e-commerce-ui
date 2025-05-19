import React, { useEffect, useState } from 'react'
import '../styles/list__sidebar.css'
import axios from 'axios';

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
    
    <div className="container">
      <main className="product-section">
        <p>We found <b>{products.length}</b> items for you!</p>

        <div className="product-list">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              {product.isNew && <span className="badge">New</span>}

              <img src={product.thumbnail} alt={product.title} className="product-img" />

              <div className="product-info">
                <p className="brand">{product.brand}</p>
                <h4 className="title">{product.title}</h4>

                <div className="rating-weight">
                  <span className="star"><i className="fa-solid fa-star"></i></span>
                  <span className="rating">{product.rating}</span>
                  <span className="weight">{product.weight}</span>
                </div>

                <p className="description">{product.description}</p>

                <div className="price-section">
                  <span className="price">${product.price}</span>
                  <span className="old-price">${product.discountPercentage}</span>
                </div>

                <div className="buttons">
                  <button className="add-cart">
                    <i className="fa-solid fa-cart-shopping"></i> Add to Cart
                  </button>
                  <button className="compare">
                    <i className="fa-solid fa-shuffle"></i> Add Compare
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            className="page-btn"
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
                  className={`page-btn ${page === pageNumber ? "active" : ""}`}
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
              return <span key={i} className="dots">...</span>;
            }

            return null;
          })}

          <button
            className="page-btn"
            onClick={() => setPage(prev => (prev < totalPages ? prev + 1 : prev))}
          >
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </main>
    </div>
  );
}

export default ListSidebar;
