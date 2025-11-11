import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Productdetails.css";

const ProductDetails = () => {
  let [product, setProduct] = useState({});
  let navigate = useNavigate();
  let param = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${param.id}`)
      .then(data => {
        data.json().then(result => {
          setProduct(result)
        });
      })
      .catch(error => {
        console.error("Error fetching product details:", error);
      });
  }, []);

  return (
    <>
          <button className="back-btn" onClick={() => navigate(-1)}>
  ← Back
</button>

      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>

        <div className="main-image-container">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-main-image"
          />
        </div>

        <div className="product-meta">
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
        </div>

        <p className="description">{product.description}</p>

        <div className="pricing">
          <h2 className="price">💰 ${product.price}</h2>
          <p className="discount">-{product.discountPercentage}% OFF</p>
          <p className="rating">⭐ {product.rating} / 5</p>
          <p>
            <strong>Availability:</strong> {product.availabilityStatus}
          </p>
          <p>
            <strong>Stock Left:</strong> {product.stock}
          </p>
        </div>

        <section className="shipping-info section">
          <h3>🚚 Shipping & Warranty</h3>
          <p>
            <strong>Shipping:</strong> {product.shippingInformation}
          </p>
          <p>
            <strong>Warranty:</strong> {product.warrantyInformation}
          </p>
          <p>
            <strong>Return Policy:</strong> {product.returnPolicy}
          </p>
        </section>

        <section className="dimensions section">
          <h3>📏 Product Dimensions</h3>
          <p>Width: {product.dimensions?.width} cm</p>
          <p>Height: {product.dimensions?.height} cm</p>
          <p>Depth: {product.dimensions?.depth} cm</p>
        </section>

        <section className="reviews section">
          <h3>🗣 Customer Reviews</h3>
          {product.reviews?.map((review, index) => (
            <div key={index} className="review-card">
              <p>
                <strong>{review.reviewerName}</strong> – ⭐ {review.rating}
              </p>
              <p className="review-comment">"{review.comment}"</p>
            </div>
          ))}
        </section>

        <section className="gallery section">
          <h3>🖼 Product Gallery</h3>
          <div className="image-gallery">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.title} ${i + 1}`}
                className="gallery-image"
              />
            ))}
          </div>
        </section>
      </div>


    </>
  );
};

export default ProductDetails;
