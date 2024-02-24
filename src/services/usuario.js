

export const autentificacion = (req, res) => {
    const {cedula} = req.body;

    if(cedula != "0606253169"){
        const response = {
            codeError: 500, // Bad Request
            message: "Todos los campos son obligatorios.",
            content: null,
        };

        return res.status(500).json(response);

    } 
    const response = {
        codeError: 200,
        message: "Autenficacion Existosa",
        content: {
            autenticacionExitosa: true,
            codigoAuth: 100
        }
    };
    console.log("Se ha logeado de manera exitosa");

    return res.status(200).json(response);

}

export const seguirConversacion = (req, res) => {
    const {codigoAuth} = req.params;

    console.log("codigo auth:", codigoAuth);

    if(codigoAuth != 100){
        const response = {
            codeError: 500, // Bad Request
            message: "Error",
            content: null,
        };

        return res.status(500).json(response);
    } 

    const response = {
        codeError: 200,
        message: "Puede serguir en la conversacion",
        content: {
            autenticacionExitosa: true
        }
    };


    return res.status(200).json(response);

}

export const consultaSaldo = (req, res) => {
    const {usuario} = req.params;

    const response = {
        codeError: 200,
        message: "Informacion exitosa del usuario",
        content: {
            autenticacionExitosa: true,
            saldoUsuario : "780.454"
        }
    };


    return res.status(200).json(response);

}