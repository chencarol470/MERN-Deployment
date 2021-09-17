import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const EditPets = (props) => {
    const [p, setP] = useState(null);
    const [errors, setErrors] = useState(null);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                setP(res.data)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, [id]
    );
    const handleOnChange = (e) => {
        setP({ ...p, [e.target.name]: e.target.value });
        console.log(handleOnChange);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/pets/${p._id}`, p)
            .then((res) => {
                console.log(res.data);
                history.push(``);
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            });

    }
    if (p === null) {
        return "Loading..."
    }
    return (
        <div>
            <span>
                <h2>Pet Shelter</h2>
                <Link to="/">
                    back to home
                </Link>
            </span>
            <form onSubmit={(e) => {
                handleEditSubmit(e);
            }}>
                <h2>Edit {p.name}</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                        <div>
                            <label>Pet Name:</label>
                            {errors?.name && (<span style={{ color: "red" }}>{errors?.name?.message}</span>)}
                            <input onChange={(e) => {
                                handleOnChange(e);
                            }}
                                type="text"
                                value={p.name}
                                name="name"
                            />
                        </div>
                        <div>
                            <label>Pet Type:</label>
                            {errors?.type && (<span style={{ color: "red" }}>{errors?.type?.message}</span>)}
                            <input onChange={(e) => {
                                handleOnChange(e);
                            }}
                                type="text"
                                value={p.type}
                                name="type"
                            />
                        </div>
                        <div>
                            <label>Description: </label>
                            {errors?.description && (<span style={{ color: "red" }}>{errors?.description?.message}</span>)}
                            <input onChange={(e) => {
                                handleOnChange(e);
                            }}
                                type="text"
                                value={p.description}
                                name="description"
                            />
                        </div>
                        <button>Edit Pet</button>
                    </div>
                    <div>
                        <div>
                            <div>
                                <label>Skills (Optional) : </label>
                            </div>
                            <label>Skill 1: </label>
                            <input onChange={(e) => {
                                handleOnChange(e);
                            }}
                                type="text"
                                value={p.skill1}
                                name="skill1"
                            />
                        </div>
                        <div>
                            <label>Skill 2: </label>
                            <input onChange={(e) => {
                                handleOnChange(e);
                            }}
                                type="text"
                                value={p.skill2}
                                name="skill2"
                            />
                        </div>
                        <div>
                            <label>Skill 3: </label>
                            <input onChange={(e) => {
                                handleOnChange(e);
                            }}
                                type="text"
                                value={p.skill3}
                                name="skill3"
                            />
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default EditPets;