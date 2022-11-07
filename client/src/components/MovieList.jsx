import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardMovie from './CardMovie';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/movies')
            .then(res => setMovies(res.data))
            .catch(error => console.log(error));
    }, [movies._id]);

    console.log(movies);
    return (
        <div className="max-w-6xl mx-auto py-6">
            <h1 className="text-white font-bold text-4xl  ">MOVIE LIST</h1>
            <div className="flex flex-wrap justify-between">
                {movies.map(movie => (
                    <CardMovie movie={movie} key={movie._id} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
