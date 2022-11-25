import React from "react";

export const Login = () => {
  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">Ingresá</h2>
        </div>
      </div>

      <div className="col-12">
        <div className="contenido">
          <div className="row">
            <div className="col-12 col-md-4 d-flex justify-content-center p-5">
              <img src="/images/logo-mercado-liebre.svg" alt="" />
            </div>
            <div className="col-12 col-md-8 p-5">
              <form id="form-login" noValidate>
                <div className="row product-detail">
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <div className="has-validation">
                      <input
                        type="email"
                        className="form-input form-control"
                        id="email"
                        name="email"
                      />
                      <small className="text-danger" id="error-email"></small>
                      <div className="invalid-feedback">
                        El email es obligatorio
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="pass" className="form-label">
                      Contraseña
                    </label>
                    <div className="has-validation">
                      <input
                        type="password"
                        className="form-input form-control"
                        id="pass"
                        name="pass"
                      />
                      <small className="text-danger" id="error-pass"></small>
                      <div className="invalid-feedback">
                        La contraseña es requerida
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        name="remember"
                        style={{width: "30px", height:"30px"}}
                      />
                      <label
                        className="form-check-label form-label ms-2"
                        htmlFor="exampleCheck1"
                      >
                        Recordarme
                      </label>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <button type="submit" className="buy-now-button">
                      Iniciar sesión
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
