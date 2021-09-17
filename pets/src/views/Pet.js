import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';


const Pet = () => {

    const [pet, setPet] = useState({});
    // const [pets, setPets] = useState([]);
    const { id } = useParams();
    // const [products, setProducts] = useState([]);
    const history = useHistory();



    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                setPet(res.data)
                console.log(res.data)
            })


            .catch(err => console.error(err));
    }, [id]);
    const handleDelete = ((delId) => {
        axios
            .delete(`http://localhost:8000/api/pets/${delId}`)
            .then((res) => {
                console.log(res)
            })
            .catch(err =>
                console.log(err));
        let path = "";
        history.push(path);
    })
    const handleLikeClick = (likedPet) => {
        const editedPet = { likeCount: likedPet.likeCount + 1 };

        axios
            .put(
                "http://localhost:8000/api/pets/" + likedPet._id,
                editedPet
            )
            .then((res) => {
                const updatedPet = res.data;

                // const updatedPets = pets.map((p) => {
                //     if (p._id === updatedPet._id) {
                //         // replace only the updated article.
                //         return updatedPet;
                //     }
                //     return pet;
                // });

                setPet(updatedPet);
                // console.log("liked");
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    return (
        <>
            <nav>
                <div>
                    <h1>Pet Shelter</h1>
                    <Link to="/">
                        back to home
                    </Link>
                </div>
            </nav>
            <nav>
                <h2>Details about: {pet.name}</h2>
                <button onClick={(e) => {
                    handleDelete(pet._id);
                }}>
                    Adopt {pet.name}
                </button>
            </nav>
            <div>
                <p>Name: {pet.name}</p>
                <p>Type: {pet.type}</p>
                <p>Description: {pet.description}</p>
                <p>Skills : </p>
                <p>{pet.skill1}</p>
                <p>{pet.skill2}</p>
                <p>{pet.skill3}</p>
            </div>
            <p>
                <span onClick={(e) => {
                    handleLikeClick(pet);
                }}
                    style={{ cursor: "pointer" }}
                >
                    👍{pet.likeCount}
                </span>
            </p>
        </>
    )
}

export default Pet;
