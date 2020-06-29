import React, { useState } from "react";
import bikedata from "../bikes.json";
import Product from "./Product";

function Products() {
  const [data] = useState(bikedata);
console.log(data);

  return (
    <div className="products">
      {data.bikes.map((bike) => (
        <Product key={bike.id} bike={bike} />
      ))}
    </div>
  );
}

export default Products;
