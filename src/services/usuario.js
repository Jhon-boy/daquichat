export const autentificacion = (req, res) => {
  const { cedula } = req.body;
  console.log(
    "===== Se ha iniciado un prorceos de autenfificacion para el usuario: ",
    cedula
  );

  if (cedula != "0606253169") {
    const response = {
      codeError: 200, // Bad Request
      message: "Autentitifacion fallida",
      content: {
        autenticacionExitosa: false,
        codigoAuth: null,
      },
    };
    console.log(
      " ===== El usuario es distintos a los registros de la base de datos"
    );
    return res.status(200).json(response);
  }
  const response = {
    codeError: 200,
    message: "Autenficacion Existosa",
    content: {
      autenticacionExitosa: true,
      codigoAuth: 100,
    },
  };
  console.log(" ===== Se ha logeado de manera exitosa");

  return res.status(200).json(response);
};

export const seguirConversacion = (req, res) => {
  const { codigoAuth } = req.params;

  console.log(" ===== codigo auth:", codigoAuth);
  if (codigoAuth != 100) {
    const response = {
      codeError: 500, // Bad Request
      message: "Error",
      content: null,
    };

    console.log(" ===== Codigo Incorrecto");
    return res.status(500).json(response);
  }

  const response = {
    codeError: 200,
    message: "Puede serguir en la conversacion",
    content: {
      autenticacionExitosa: true,
    },
  };

  console.log(" ===== El usuario se ha autentificado");
  return res.status(200).json(response);
};

export const consultaSaldo = (req, res) => {
  const { usuario } = req.params;

  console.log(" ===== El usuario desea conocer su saldo: ", usuario);
  const response = {
    codeError: 200,
    message: "Informacion exitosa del usuario",
    content: {
      autenticacionExitosa: true,
      saldoUsuario: "780.454",
    },
  };

  console.log(" ===== Informacion devuelva exitosamente");
  return res.status(200).json(response);
};
