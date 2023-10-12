import React from "react";
const CardGrid = ({ data }) => {
  return (
    <div className="container pt-5">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">{item.title}</h5>
                <img
                  src={item.imageUrl}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="d-flex justify-content-between mt-2">
                  <p className="card-text mt-2">₹ {item.price}</p>
                  <button type="button" className="btn btn-primary">
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
