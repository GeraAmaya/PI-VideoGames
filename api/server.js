/*
const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const { Videogame, Genre, VideogameGenre } = require('./models'); // Asegúrate de tener tus modelos definidos en el archivo 'models.js'

// Configuración de Sequelize
const sequelize = new Sequelize('nombre_base_de_datos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql', // Cambia esto según tu base de datos
});

// Conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión establecida con la base de datos.');
  })
  .catch((err) => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

// Definición de las rutas
app.get('/videogames', async (req, res) => {
  try {
    const videogames = await Videogame.findAll();
    res.json(videogames);
  } catch (err) {
    console.error('Error al obtener los videojuegos:', err);
    res.status(500).json({ error: 'Ocurrió un error al obtener los videojuegos.' });
  }
});

app.get('/videogames/:idVideogame', async (req, res) => {
  const idVideogame = req.params.idVideogame;

  try {
    const videogame = await Videogame.findByPk(idVideogame, { include: Genre });
    if (videogame) {
      res.json(videogame);
    } else {
      res.status(404).json({ error: 'No se encontró el videojuego solicitado.' });
    }
  } catch (err) {
    console.error('Error al obtener el videojuego:', err);
    res.status(500).json({ error: 'Ocurrió un error al obtener el videojuego.' });
  }
});

app.get('/videogames/name', async (req, res) => {
  const nameQuery = req.query.name;

  try {
    const videogames = await Videogame.findAll({
      where: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('nombre')), 'LIKE', `%${nameQuery.toLowerCase()}%`),
      limit: 15,
    });

    if (videogames.length > 0) {
      res.json(videogames);
    } else {
      res.status(404).json({ error: 'No se encontraron videojuegos con el nombre especificado.' });
    }
  } catch (err) {
    console.error('Error al buscar videojuegos por nombre:', err);
    res.status(500).json({ error: 'Ocurrió un error al buscar videojuegos por nombre.' });
  }
});

app.post('/videogames', async (req, res) => {
  const { nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating, generos } = req.body;

  try {
    const videogame = await Videogame.create({
      nombre,
      descripcion,
      plataformas,
      imagen,
      fechaLanzamiento,
      rating,
    });

    await Promise.all(
      generos.map(async (generoId) => {
        const genre = await Genre.findByPk(generoId);
        if (genre) {
          await VideogameGenre.create({
            videogameId: videogame.id,
            genreId: genre.id,
          });
        }
      })
    );

    res.status(201).json(videogame);
  } catch (err) {
    console.error('Error al crear el videojuego:', err);
    res.status(500).json({ error: 'Ocurrió un error al crear el videojuego.' });
  }
});

app.get('/genres', async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.json(genres);
  } catch (err) {
    console.error('Error al obtener los géneros:', err);
    res.status(500).json({ error: 'Ocurrió un error al obtener los géneros.' });
  }
});

// Inicialización del servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000.');
});
*/