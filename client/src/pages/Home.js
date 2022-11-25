import React from "react";
import { CardProduct } from "../components/CardProduct";
import { products } from "../data/products";

export const Home = () => {
  const newest = products.filter((product) => product.discount > 15);
  const inSale = products.filter((product) => product.category === "in-sale");
  return (
    <>
      <div className="container products-wrapper">
        <div className="row">
          <div className="col-12">
            <h2 className="products-title">Últimos agregados</h2>
          </div>

          {newest.map((product, index) => (
            <CardProduct {...product}  key={product.name + index}/>
          ))}
        </div>
      </div>
      <div className="container products-wrapper">
        <div className="row">
          <div className="col-12">
            <h2 className="products-title">Ofertas</h2>
          </div>

          {inSale.map((product, index) => (
            <CardProduct {...product} key={product.name + index}/>
          ))}
        </div>
      </div>
    </>
  );
};
