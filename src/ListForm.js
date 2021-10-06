import './App.scss';
import React, {useState} from 'react';
import { TextField } from '@mui/material';
import Button from '@material-ui/core/Button';

function ListForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.valueText : '');

  const handleChange = e => {
    setInput(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('')
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
    {props.edit ? (
      <>
        <TextField  id="filled-basic" 
          label="Edit what you want to do"   
          variant="filled"
          className="textfield"
          type="text" 
          name="text"
          value={input}
          autoComplete="off" required
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">UPDATE IT!</Button>
      </>
    ) : (
      <>
        <TextField  id="filled-basic" 
          label="What to do now?"   
          variant="filled"
          className="textfield"
          type="text" 
          name="text"
          value={input}
          autoComplete="off" required
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">ADD IT!</Button>
      </>   
    )}
    </form>
  );
}

export default ListForm;
