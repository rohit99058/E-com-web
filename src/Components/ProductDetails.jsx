import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${param.id}`)
      .then((data) => data.json())
      .then((result) => setProduct(result))
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [param.id]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all"
      >
        ← Back
      </button>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6">
          {product.title}
        </h1>

        {/* Main Image */}
        <div className="flex justify-center mb-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-xl shadow-md max-h-80 object-cover"
          />
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-700 mb-6">
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
        </div>

        {/* Description */}
        <p className="text-center text-gray-600 mb-8">{product.description}</p>

        {/* Pricing Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-green-600">
            💰 ${product.price}
          </h2>
          <p className="text-red-500 font-semibold">
            -{product.discountPercentage}% OFF
          </p>
          <p className="text-yellow-500 font-medium">
            ⭐ {product.rating} / 5
          </p>
          <p>
            <strong>Availability:</strong> {product.availabilityStatus}
          </p>
          <p>
            <strong>Stock Left:</strong> {product.stock}
          </p>
        </div>

        {/* Shipping & Warranty */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-3 border-b pb-2">
            🚚 Shipping & Warranty
          </h3>
          <div className="text-gray-700 space-y-1">
            <p>
              <strong>Shipping:</strong> {product.shippingInformation}
            </p>
            <p>
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>
            <p>
              <strong>Return Policy:</strong> {product.returnPolicy}
            </p>
          </div>
        </section>

        {/* Dimensions */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-3 border-b pb-2">
            📏 Product Dimensions
          </h3>
          <div className="text-gray-700 space-y-1">
            <p>Width: {product.dimensions?.width} cm</p>
            <p>Height: {product.dimensions?.height} cm</p>
            <p>Depth: {product.dimensions?.depth} cm</p>
          </div>
        </section>

        {/* Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <section className="mb-10">
            <h3 className="text-xl font-semibold mb-3 border-b pb-2">
              🗣 Customer Reviews
            </h3>
            <div className="space-y-4">
              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                  <p className="font-semibold">
                    {review.reviewerName} – ⭐ {review.rating}
                  </p>
                  <p className="italic text-gray-600">
                    “{review.comment}”
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}
        {product.images && product.images.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold mb-3 border-b pb-2">
              🖼 Product Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.title} ${i + 1}`}
                  className="rounded-lg shadow hover:scale-105 transition-transform duration-300 object-cover"
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
