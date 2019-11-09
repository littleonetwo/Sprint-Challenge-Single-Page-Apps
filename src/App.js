import React, {useEffect, useState} from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import CharacterSelect from "./components/CharacterSelect.js";

import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import {Button} from 'reactstrap';

export default function App() {
  const [list, setList] = useState([]);


  return (
    <main>


      <Route exact path="/" render={props=>
        <div>
          <Header
            {...props}
            list = {list}
            setList = {setList}
          />

          <CharacterList
            {...props}
            list = {list}
            setList = {setList}
          />
        </div>
      } />

      <Route path= "/character/:id" render={props=>
        <div>
          <Header
            {...props}
            list = {list}
            setList = {setList}
          />
          <CharacterSelect
            {...props}
            list = {list}
            setList = {setList}
          />
        </div>
      }
      />

      <Route path= "/search/"

      />

    </main>
  );
}
