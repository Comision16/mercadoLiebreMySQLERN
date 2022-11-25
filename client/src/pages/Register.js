import React from "react";

export const Register = () => {
  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">Registrate</h2>
        </div>
        <div className="col-12">
          <form id="form-register" action="" method="POST" noValidate>
            <div className="row product-detail">
              <div className="col-12 col-md-6">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className=" form-control py-3  "
                  id="name"
                  name="name"
                  title="El nombre debe tener más de dos caracteres"
                />
                <small id="errorNombre" className="text-danger"></small>
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="surname" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className=" form-control py-3"
                  id="surname"
                  name="surname"
                  title="El apellido debe tener más de dos caracteres"
                />
                <small id="errorApellido" className="text-danger"></small>
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className=" form-control py-3 "
                  id="email"
                  name="email"
                />
                <small id="errorEmail" className="text-danger"></small>
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="pass" className="form-label">
                  Contraseña
                </label>
                <div className="d-flex  mb-3">
                  <input
                    type="password"
                    className=" py-3 form-control "
                    name="pass"
                    id="pass"
                  />
                  <span
                    className="input-group-text"
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className="fa-solid fa-eye-slash"
                    ></i>
                  </span>
                </div>
                <small id="errorPass" className="text-danger"></small>
                <div className="ms-3" id="msg-pass" hidden>
                  <p className="m-0" id="msgMayu">
                    Una mayúscula
                  </p>
                  <p className="m-0" id="msgMinu">
                    Una minúscula
                  </p>
                  <p className="m-0" id="msgNum">
                    Un número
                  </p>
                  <p className="m-0" id="msgEsp">
                    Un caracter especial
                  </p>
                  <p className="m-0" id="msgMin">
                    Mínimo 6 caracteres
                  </p>
                  <p className="m-0" id="msgMax">
                    Máximo 8 caracteres
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label htmlFor="pass2" className="form-label">
                  Reingresar contraseña
                </label>
                <input
                  type="password"
                  className=" form-control py-3 "
                  id="pass2"
                  name="pass2"
                />
                <small id="errorPass2" className="text-danger"></small>
              </div>
              <div className="col-12 col-md-3"></div>
              <div className="col-12">
                <div className="d-flex justify-content-center">
                  <div className="form-check d-flex align-items-center">
                    <input
                      name="bases"
                      className="form-check-input "
                      type="checkbox"
                      value=""
                      id="terms"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <label className="form-check-label ms-2" htmlFor="terms">
                      Acepto las bases y condiciones
                    </label>
                  </div>
                </div>

                <p id="errorTerms" className="text-danger text-center"></p>

                <p
                  id="msgError"
                  className="alert alert-danger text-center"
                  hidden
                >
                  Algunos tienen errores y/o están vacíos.
                </p>
              </div>
              <div className="col-12  d-flex justify-content-end mt-4">
                <button type="submit" className="buy-now-button">
                  Registrarse
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
