import React, {useState, useEffect} from "react";
import {Link, Route, useHistory} from 'react-router-dom';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


const SearchForm = ({values, touched, errors, list, setList}) => {
  const [searchResults, setSearchResults] = ([]);

  // useEffect(() =>{
  //
  //   if (status) {
  //     set
  //   }
  // })
  // console.log(list);

  return (

      <div className="search">
        <Form>
          <Field
            type="text"
            name="nameSearch"
            placeholder="Search by Name"
            value={values.nameSearch}
          />{' ' }
          <button type="submit">Go</button>
        </Form>
      </div>



  );
}

const FormikSearchForm = withFormik({
  mapPropsToValues({ nameSearch }){
    return {
      nameSearch: nameSearch || ""
    };
  },

  handleSubmit(values, {props}){
    let results1 = props.list;
    let finalResults = results1.filter(function(final){
      return final.name.toLowerCase() === values.nameSearch.toLowerCase();})
    // console.log(finalResults[0].id);

    props.history.push(`/character/${finalResults[0].id}`);
  }

})(SearchForm);

export default FormikSearchForm;
