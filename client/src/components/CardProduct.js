import React from "react";
import {toThousand} from '../utils'


export const CardProduct = ({id,name,image,discount,price}) => {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <section className="product-box">
        <a href={`/products/detail/${id}`}>
          <figure className="product-box_image">
            <img src={`/images/products/${image}`} alt="producto" />
          </figure>
          <article className="product-box_data">
            <h2>{toThousand(price)}</h2>

            {discount > 0 && <span>{discount}% OFF</span>}
            <p>{name}</p>

            <i className="fas fa-truck"></i>
          </article>
        </a>
      </section>
    </div>
  );
};
