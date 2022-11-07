const express = require('express')
const router = express.Router()
const {
    getMovies,
    createMovie,
    getMovieById,
    updateMovie,
    deleteMovie } = require('../controllers/movieControllers')

router.get('/', getMovies)
router.post('/', createMovie)
router.put('/:id', updateMovie)
router.get('/:id', getMovieById)
router.delete('/:id', deleteMovie)

module.exports = router