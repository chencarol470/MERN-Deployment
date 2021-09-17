import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const NewPet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const history = useHistory();
    const [errors, setErrors] = useState(null);

    const handleNewSubmit = (e) => {
        e.preventDefault();
        const newPet = {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3,
        };

        axios.post(`http://localhost:8000/api/pets`, newPet)
            .then((res) => {
                console.log(res.data);
                history.push(``)
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            });
    };


    return (
        <div>
            <nav>
                <h1>Pet Shelter</h1>
                <Link to="/">
                    back to home
                </Link>
            </nav>
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={(e) => {
                handleNewSubmit(e);
            }}>
                <div>
                    <label> Name: </label>
                    <br />
                    {errors?.name && (<span style={{ color: 'red' }}>{errors?.name?.message}</span>)}
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" />
                </div>
                <div>
                    <label> Type: </label>
                    <br />
                    {errors?.type && (<span style={{ color: 'red' }}>{errors?.type?.message}</span>)}
                    <input onChange={(e) => {
                        setType(e.target.value)
                    }} type="text" />
                </div>
                <div>
                    <label> Description: </label>
                    <br />
                    {errors?.description && (<span style={{ color: 'red' }}>{errors?.description?.message}</span>)}
                    <input onChange={(e) => {
                        setDescription(e.target.value)
                    }} type="text" />
                </div>
                <div>
                    <label> Skill1: </label>
                    <br />
                    <input onChange={(e) => {
                        setSkill1(e.target.value)
                    }} type="text" />
                </div>
                <div>
                    <label> Skill2: </label>
                    <br />
                    <input onChange={(e) => {
                        setSkill2(e.target.value)
                    }} type="text" />
                </div>
                <div>
                    <label> Skill3: </label>
                    <br />
                    <input onChange={(e) => {
                        setSkill3(e.target.value)
                    }} type="text" />
                </div>
                <button type="submit">
                    ⇪Add Pet
                </button>
            </form>
        </div>
    )
};

export default NewPet;