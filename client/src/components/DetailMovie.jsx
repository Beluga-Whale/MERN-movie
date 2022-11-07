import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailMovie = () => {
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:5000/movies/${id}`)
            .then(res => setMovieDetail(res.data));
    }, []);

    const { name, cover, director, year, description } = movieDetail;

    return (
        <section className="max-w-6xl mx-auto flex  justify-between items-center text-white">
            <div className="left w-1/2">
                <img src={cover} alt={name} />
            </div>
            <div className="right w-1/2">
                <div className="flex mb-2">
                    <h1 className="font-bold text-2xl ">{name}</h1>
                    <p className="ml-2 text-2xl">({year})</p>
                </div>
                <p className="mb-2">{description}</p>
                <p className="font-bold">{director}</p>
            </div>
        </section>
    );
};

export default DetailMovie;
