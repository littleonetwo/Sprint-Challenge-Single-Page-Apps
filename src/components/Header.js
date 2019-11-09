import React from "react";
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import SearchForm from "./SearchForm.js";



const Header = (props) => {
  console.log(props);
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Button outline color="info" tag={Link} to="/">Home</Button>
      <br />
      <br />
      <SearchForm
        {...props}
        list = {props.list}
        setList ={props.setList}
      />
      <br />
      <br />
    </header>

  );
}

export default Header;
