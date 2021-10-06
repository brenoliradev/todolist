import './App.scss';
import { palette } from '@material-ui/system';
import React, {useState} from 'react';
import { TextField, Typography } from '@mui/material';
import Button from '@material-ui/core/Button';

function ListForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.valueText : '');
  const [timeInput, setTime] = useState(props.edit ? props.edit.valueTime : '');

  const handleChange = e => {
    setInput(e.target.value)
  };

  const timeChange = e => {
    setTime(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      time: timeInput
    });

    setInput('')
    setTime('')
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
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
        <TextField id="filled-basic" 
          label="How much days left?" 
          variant="filled"
          className="textfield"
          type="number" 
          value={timeInput}
          min="0" autoComplete="off" required
          onChange={timeChange}
          />
        <Button variant="contained" type="submit">ADD IT!</Button>
      </form>
  );
}

export default ListForm;
