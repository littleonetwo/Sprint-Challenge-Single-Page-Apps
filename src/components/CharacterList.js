import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const CharacterList= (props) => {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);
  let hasRunOnce = 0;

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () =>{
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response =>{
          console.log(response.data.results);
          setCharacterList(response.data.results);

          // hasRunOnce = 1;
        })
        .catch(error=>{
          console.error('Server Error:', error);
        });

      };

      getCharacters();

  }, []);

  console.log(characterList);
  props.setList(characterList);

  // if(hasRunOnce >0){
    return (

      <div className="character-list">
        {characterList.map(character =>(
          <CharacterDetails key={character.id} character={character} />
        ))
        }

      </div>
    );
  // } else {
    // return(
    //   <div className="character-list">
    //           <p> Awaiting Response </p>
    //   </div>
    // );
  // }


}


function CharacterDetails({ character }){
  const { gender, image, name, species, status} = character;
  const ref = `/character/${character.id}`;

  function characterSelect(){
    console.log(character.id);
  }

  return (
    <Link to={ref}>
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

          <br />
          <br />
      </div>
    </Link>

  );
}

export default CharacterList;
