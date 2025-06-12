const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

console.log('Funciona de puta madre')

app.get('/', (req, res) => {
    res.send(`<h1>Bienvenido al curso back-end con Express</h1>
        <p>El servidor esta corriendo en el puerto ${PORT}</p>`)
} )

app.listen(PORT, () => console.log(`App funcionando en puerto ${PORT}`))