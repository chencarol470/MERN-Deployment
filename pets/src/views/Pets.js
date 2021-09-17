import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Pets = (props) => {
    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets`)
            .then((res) => {
                // console.log(res.data);
                setAllPets(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);


    return (
        <div>
            <nav>
                <div>
                    <h1>Pet Shelter</h1>
                </div>
                <div>
                    <Link to="/pets/new">
                        Add a pet to the shelter
                    </Link>
                </div>
            </nav>
            <p>These pets are looking for a good home </p>
            <div>
                <table style={{ color: "purple", marginLeft: "600px", display: "center", boxShadow: "initial", padding: "10px", boxborder: "solid, black" }}>
                    <thead style={{ backgroundColor: "yellow" }}>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* .map is a for loop to render all bunch of thing in JSX */}
                        {allPets.map((pet) => {
                            return (
                                <tr key={pet._id}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <nav>
                                            <Link
                                                to={`/pets/${pet._id}`}
                                                className="btn btn-sm btn-outline-warning mx-1"
                                            >
                                                details
                                            </Link>
                                            {" "} | {" "}
                                            <Link
                                                to={`/pets/${pet._id}/edit`}
                                                className="btn btn-sm btn-outline-warning mx-1"
                                            >
                                                edit
                                            </Link>
                                        </nav>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody >
                </table >
            </div>
        </div >
    )
}

export default Pets;