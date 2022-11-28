import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5 col-md-2">
            <Link to="/" className="main-header_home-link">
              <img src="/images/logo-mercado-liebre.svg" />
            </Link>
          </div>

          <div className="col-7 col-md-6">
            <form action="/search" method="GET" className="search-form">
              <input
                type="text"
                name="keywords"
                placeholder="Buscar productos, marcas y más"
                className="search-form_input"
              />
              <button type="submit" className="search-form_button">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>

          <div className="col-12 col-md-4">
            <a href="#" className="main-header_credit-link">
              <i className="fas fa-hand-holding-usd"></i>
              Comprá en cuotas y sin tarjeta de crédito
            </a>
          </div>
        </div>

        <button className="btn-toggle-navbar">
          <i className="fas fa-bars"></i>
        </button>

        <nav className="main-navbar">
          <ul className="left-navbar">
            <li>
              <Link to="/products">Todos los productos</Link>
            </li>
            <li>
              <Link to="#">Ofertas</Link>
            </li>
            <li>
              <Link to="#">Tiendas Oficiales</Link>
            </li>
            <li>
              <Link to="/products/create">Vender</Link>
            </li>
            <li>
              <Link to="#">Ayuda</Link>
            </li>
          </ul>

          <ul className="right-navbar">
            <li>
              <Link to="/users/profile">
                Mi perfil <i className="far fa-address-card"></i>
              </Link>
            </li>
            <li id="btn-cart">
              <button
                type="button"
                className="btn fs-4"
                data-bs-toggle="modal"
                data-bs-target="#cartModal"
              >
                Mis compras <i className="fas fa-shopping-basket"></i>
              </button>
            </li>

            <li>
              <Link to="/users/logout">
                Salir <i className="fas fa-sign-out-alt"></i>
              </Link>
            </li>

            <li>
              <Link to="/users/register" id="link-register">
                Creá tu cuenta <i className="fas fa-address-card"></i>
              </Link>
            </li>
            <li>
              <Link to="/users/login">
                Ingresá <i className="fas fa-sign-in-alt"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
