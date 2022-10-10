/* MAPPER SEQUELIZE */
/* EXPLICACIÓN DE LA FUNCION

Recorremos el array que recibimos por argumento,
reduce recibe un callback y el primer parámetro es un acumulador,luego el error por cada iteración,
y el segundo parámetro del reduce es un tipo de dato en nuestro caso un objecto.
lógica del callback:
retornamos en un objecto donde hacemos propagación de los datos del acumulador (que es un objeto) y luego se coloca el nuevo error con el formato esperado  -->  nombreCampo : mensaje
*/
const mapped = (errors = []) =>
  errors.reduce(
    (acum, { path, message }) => ({
      ...acum,
      [path]: message,
    }),
    {}
  );

// 422: <<Entidad no procesable>>. La solicitud del cliente contiene errores semánticos, y el servidor no puede procesarla.
const sendJsonError = (
  err,
  res,
  codeStatus = /sequelize/gi.test(err.name) ? 422 : 500
) => {
  let prop = "error",
    responseErr = "";
    
    // Funcion que mapea un array de objetos
    // example -->  [{ email : "Campo requerido" },{password : "Credenciales invalidas"}]

  if (err.errors && Array.isArray(err.errors)) {
    prop += "s";
    // si en el primer objecto obtenido existe la propiedad path y message significa que es un error enviado por sequelize
    if (err.name && /sequelize/gi.test(err.name)) {
      responseErr = mapped(err.errors); // mapeamos el array de errores
    }

    // si enviamos por con throw desde el Try colocamos el mensaje colocado con la instancia "new Error"
  } else if (err.message) {
    responseErr = err.message;
  } else {
    responseErr = err; // si colocamos un string
  }

  return res.status(codeStatus).json({
    ok: false,
    status: codeStatus,
    [prop]: responseErr,
  });
};

module.exports = {
  sendJsonError,
};
