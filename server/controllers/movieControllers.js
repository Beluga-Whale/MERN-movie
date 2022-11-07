const Movie = require('../models/movieModel')

//@desc Get Movies
//route GET /movies
const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.status(200).json(movies)
    } catch (error) {
        console.log(error);
    }
}

//@desc Get Movies
//route POST /movies
const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body)
        res.status(201).json(movie)
    } catch (error) {
        console.log(error);
    }
}

//@desc Get Movies
//route GET /movies/:id
const getMovieById = async (req, res) => {
    const id = req.params.id
    try {
        const movie = await Movie.findById(id)
        if (!movie) {
            res.status(400).json({ msg: "Not movie found " })
        }
        res.status(200).json(movie)
    } catch (error) {
        console.log(error);
    }
}

//@desc Get Movies
//route PUT /movies/:id
const updateMovie = async (req, res) => {
    const id = req.params.id
    const { name, director, year, cover, description } = req.body
    try {
        const movie = await Movie.findByIdAndUpdate(id, {
            name,
            director,
            year,
            cover,
            description
        }, { new: true })
        res.status(201).json(movie)
    } catch (error) {
        console.log(error);
    }
}

//@desc Get Movies
//route DELETE /movies/:id
const deleteMovie = async (req, res) => {
    const id = req.params.id
    try {
        const movie = await Movie.findByIdAndRemove(id)
        res.status(200).json({ id: movie._id })
    } catch (error) {

    }
}


module.exports = {
    getMovies,
    createMovie,
    getMovieById,
    updateMovie,
    deleteMovie
}