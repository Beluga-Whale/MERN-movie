import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditMovie = () => {
    const navigate = useNavigate();
    const { id } = useParams();
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
        axios.put(`http://localhost:5000/movies/${id}`, inputs);
        navigate('/');
    };
    return (
        <div className="text-center h-96 pt-5">
            <h1>Update</h1>
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
                <input onChange={handleChange} type="text" name="director" />
                <br />
                <label className="text-white font-bold text-lg ">Year: </label>
                <input onChange={handleChange} type="number" name="year" />
                <br />
                <label className="text-white font-bold text-lg ">
                    Cover Movie:
                </label>
                <input onChange={handleChange} type="text" name="cover" />
                <br />
                <label className="text-white font-bold text-lg ">
                    Description:
                </label>
                <input onChange={handleChange} type="text" name="description" />
                <br />
                <button className=" mt-4 py-3 px-5 bg-red-300" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
};

export default EditMovie;
