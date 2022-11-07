import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CardMovie = ({ movie }) => {
    const deleteMovie = e => {
        axios.delete(`http://localhost:5000/movies/${movie._id}`);
        window.location.reload(false);
    };

    return (
        <div className="w-80 mt-4 text-white border-2 ">
            <Link to={`/detail-movie/${movie._id}`}>
                <div className="img">
                    <img src={movie.cover} alt={movie.name} />
                </div>
            </Link>
            <div className="desc h-28 flex flex-col justify-evenly  ">
                <Link to={`/detail-movie/${movie._id}`}>
                    <p className="font-bold">{movie.name}</p>
                    <p>{movie.director}</p>
                </Link>
                <div className="flex justify-around ">
                    <button className="bg-green-400 py-2 px-5 hover:bg-green-200">
                        <Link to={`/edit-movie/${movie._id}`}>Edit</Link>
                    </button>
                    <button
                        onClick={deleteMovie}
                        className="bg-red-400 py-2 px-5 hover:bg-red-200"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardMovie;
