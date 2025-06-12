require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`<h1>Bienvenido al curso back-end con Express</h1>
        <p>El servidor esta corriendo en el puerto ${PORT}</p>`)
} )

app.listen(PORT, () => console.log(`Servidor: http://localhost:${PORT}`))