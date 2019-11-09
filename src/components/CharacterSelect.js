import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Character = (props) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    const id = props.match.params.id;


       axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setCharacter(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);


  console.log(character);

  if (!character) {
    return <div>Loading Character information...</div>;
  }


    const { gender, image, name, species, status} = character;
    return (
      <div className="save-wrapper">
        <div className="character-card">
            <div className="bio-img">
              <img src={image} alt={name} />
            </div>

            <h2>{name}</h2>

            <div className="status">
              Status: <em>{status}</em>
            </div>

            <div className="species">
              Species: <strong>{species}</strong>
            </div>

            <div className="gender">
              Gender: <strong>{gender}</strong>
            </div>

        </div>
      </div>
    );

}

export default Character;
