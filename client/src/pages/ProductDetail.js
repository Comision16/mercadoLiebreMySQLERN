import React from "react";
import {toThousand} from '../utils';
import {products} from '../data/products';
import { useParams } from "react-router-dom";

export const ProductDetail = () => {

    const {id : idProduct} = useParams();

    const {id,name,price,discount,description, image} = products.find(product => product.id === +idProduct)

  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">Detalle del producto: {name}</h2>
        </div>
      </div>
      <div className="product-detail">
        <div className="row">
          <div className="col-12 col-lg-8">
            <img
              src={`/images/products/${image}`}
              alt="product image"
              className="product-detail-img"
            />
            <div className="flex">
            {/*   {images.map((image) => (
                <img
                  className="mx-2"
                  src={`/images/products/${image}`}
                  alt="product image"
                  style={{ width: "100px" }}
                />
              ))} */}
            </div>
            <p className="product-detail-description">{description}</p>
          </div>
          <div className="col-12 col-lg-4">
            <article className="product-detail-info">
              <h2 className="product-detail-title">{name} </h2>

              {discount > 0 ? (
                <>
                  <p className="product-detail-price small">
                    <span>${price}</span>/<b>{discount}% OFF</b>
                  </p>
                  <p className="product-detail-price">
                    ${toThousand(price - (price * discount) / 100)}
                  </p>
                </>
              ) : (
                <p className="product-detail-price">${toThousand(price)}</p>
              )}

              <ul className="actions-list">
                <li>
                  <i className="fas fa-credit-card"></i>
                  <p>Pagá en 12 cuotas sin interes</p>
                </li>
                <li>
                  <i className="fas fa-store"></i>
                  <p>Retiro gratis en locales del vendedor</p>
                </li>
              </ul>

              <button
                className="btn btn-primary"
                
              >
                AGREGAR AL CARRITO
              </button>
              <hr />

              <a
                href="/products/edit/<%= product.id %>"
                className="btn btn-success"
              >
                EDITAR PRODUCTO
              </a>
              <form
                action="/products/delete/<%= product.id %>?_method=DELETE"
                method="POST"
                style={{display: "inline-flex"}}
              >
                <button
                  type="submit"
                  style={{cursor: "pointer"}}
                  className="btn btn-danger"
                >
                  ELIMINAR
                </button>
              </form>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
