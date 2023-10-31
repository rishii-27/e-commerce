import React, { useContext } from "react";
import CartContext from "../Store/cart-context";
import { Link } from "react-router-dom"; // Import Link

const CardGrid = ({ data }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandle = (item) => {
    cartCtx.addItem(item);
    console.log(cartCtx);
  };

  return (
    <div className="container pt-5">
      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">
                  <Link to={`/products/${item.title}`}>{item.title}</Link>
                </h5>
                <img
                  src={item.imageUrl}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="d-flex justify-content-between mt-2">
                  <p className="card-text mt-2">₹ {item.price}</p>
                  <button
                    type="button"
                    onClick={() => addToCartHandle(item)}
                    className="btn btn-primary mt-0"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardGrid;
