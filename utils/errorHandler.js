const errorGetData = res => res.status(500).json({error: "Ha habido un error en el servidor para obtener los datos"});

const errorExistingUser = res => res.status(302).json({error: "El usuario ya se encuentra creado"});

const errorWrithingFile = res => res.status(500).json({error: "Hubo un problema al intentar escribir el documento"})

module.exports = {
    errorGetData,
    errorExistingUser,
    errorWrithingFile
}