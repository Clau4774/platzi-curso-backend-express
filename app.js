
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`<h1>Bienvenido al curso back-end con Express</h1>
        <p>El servidor esta corriendo en el puerto ${PORT}</p>`)
})

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`<p>Su id de usuario es: ${userId}</p>`);
})

app.get('/search', (req, res) => {
    const terms = req.query.terminos || 'No se ha encontrado los terminos';
    const category = req.query.categoria || 'No se ha encontrado la categoría';
    
    res.send(`<h2>Resultado de su búsqueda</h2>
        <p>Estos son los terminos que ingresó: ${terms}</p>
        <p>Y esta es la categoría elegida: ${category}</p>`)
});

app.post('/form', (req, res) => {
    const name = req.body.nombre || 'No especifica nombre';
    const email = req.body.email || 'Email no especificado'

    res.json({
        message: 'Información recibida con éxito',
        data: {
            name,
            email
        }
    });
})

app.post('/api/data', (req, res) => {
    const data = req.body;

    if(!data || Object.keys(data).length === 0) return res.status(400).json({error: 'Datos no recibidos'});

    res.status(201).json({
        message: 'Datos recibidos de manera exitosa',
        data
    });
})

app.listen(PORT, () => console.log(`Servidor: http://localhost:${PORT}`))