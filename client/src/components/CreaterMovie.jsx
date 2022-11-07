import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreaterMovie = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        director: '',
        year: '',
        cover: '',
        description: '',
    });

    const handleChange = e => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const save = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/movies', inputs);
        navigate('/');
    };

    return (
        <div className="text-center h-96 pt-5">
            <h1>Create</h1>
            <form onSubmit={save}>
                <label className="text-white font-bold text-lg ">
                    Name Movie:
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    value={inputs.name}
                />
                <br />
                <label className="text-white font-bold text-lg ">
                    Name Director:
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="director"
                    value={inputs.director}
                />
                <br />
                <label className="text-white font-bold text-lg ">Year: </label>
                <input
                    onChange={handleChange}
                    type="number"
                    name="year"
                    value={inputs.year}
                />
                <br />
                <label className="text-white font-bold text-lg ">
                    Cover Movie:
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="cover"
                    value={inputs.cover}
                />
                <br />
                <label className="text-white font-bold text-lg ">
                    Description:
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="description"
                    value={inputs.description}
                />
                <br />
                <button className=" mt-4 py-3 px-5 bg-red-300" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
};

export default CreaterMovie;
