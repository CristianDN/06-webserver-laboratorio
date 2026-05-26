// Requerimos y configuramos dotenv de inmediato para proteger nuestras variables (Punto 9)
require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
// Requerimos el módulo nativo 'path' para estandarizar rutas entre Windows y Linux
const path = require('path'); 

const app = express();

// === CONFIGURACIÓN DE PRODUCCIÓN ===
// Si el servidor en la nube nos da un puerto en process.env.PORT, lo usa. Si no, usa el 8081 por defecto.
const port = process.env.PORT || 8081;

// Configurar el motor de plantillas HBS
app.set('view engine', 'hbs');

// CORRECCIÓN 1: Definir explícitamente la carpeta raíz de las vistas usando path.join
app.set('views', path.join(__dirname, 'views'));

// CORRECCIÓN 2: Registrar los parciales de forma segura para Linux
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// CORRECCIÓN 3: Servir contenido estático (estilos, imágenes) con ruta absoluta estandarizada
app.use(express.static(path.join(__dirname, 'public')));

// Ruta raíz dinámica (Home)
app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Cristhian',
        titulo: 'Curso de Node'
    });
});

// Ruta Generic dinámica
app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Cristhian',
        titulo: 'Curso de Node'
    });
});

// Ruta Elements dinámica
app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Cristhian',
        titulo: 'Curso de Node'
    });
});

// Manejador 404
app.use(function (req, res) {
    res.status(404).send('404 | Page not found');
});

// Escuchar en el puerto dinámico
app.listen(port, () => {
    console.log(`Servidor Express corriendo en el puerto ${port}`);
});
