import React, { useState } from "react";
import bikedata from "../bikes.json";
import Product from "./Product";
import Title from "./Title";

function Products() {
  const [data] = useState(bikedata);
  console.log(data);

  return (
    <>
      <Title title="Road bikes" />
    <div className="products">

      {data.bikes.map((bike) => (
        <Product key={bike.id} bike={bike} />
      ))}
    </div>
    </>
  );
}

export default Products;
