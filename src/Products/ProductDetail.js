import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { title } = useParams();

  // Fetch product details based on the title or use data from the context.
  // You can add the details here.

  return (
    <div className="container text-center mt-5">
      <h2>Product Details</h2>
      <p>Title: {title}</p>
    </div>
  );
};

export default ProductDetail;
