import React from 'react';
import { TextField } from '@material-ui/core';
import './InputSearch.css'

function InputSearch({ change, submit }) {
 return (
  <>
   <form className='input-search' onSubmit={submit}>
    <TextField fullWidth label='Search' onChange={change} />
   </form>
  </>
 )
}

export default InputSearch
