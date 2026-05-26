// Requerimos y configuramos dotenv de inmediato para proteger nuestras variables (Punto 9)
require('dotenv').config();

const express = require('express')
const hbs = require('hbs') 

const app = express()
// === CONFIGURACIÓN DE PRODUCCIÓN ===
// Si el servidor en la nube nos da un puerto en process.env.PORT, lo usa. Si no, usa el 8080 por defecto.
const port = process.env.PORT || 8081;

// Configurar el motor de plantillas HBS
app.set('view engine', 'hbs');

// Registrar los parciales
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public') )

// Ruta raíz dinámica (Home)
app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Cristhian',
        titulo: 'Curso de Node'
    });
})

// Ruta Generic dinámica
app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Cristhian',
        titulo: 'Curso de Node'
    });
})

// Ruta Elements dinámica
app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Cristhian',
        titulo: 'Curso de Node'
    });
})

// Manejador 404
app.use(function (req, res) {
    res.status(404).send('404 | Page not found')
})

// Escuchar en el puerto dinámico
app.listen(port, () => {
    console.log(`Servidor Express corriendo en el puerto ${port}`)
})