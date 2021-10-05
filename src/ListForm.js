import './App.scss';
// import ListItems from './ListItems.js';
import React, {useState} from 'react';

function ListForm() {
  const [input, setInput] = useState('');
  const [timeInput, setTime] = useState('');

  const handleChange = e => {
    setInput (e.target.value)
  }

  const timeChange = e => {
    setTime (e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Math.floor(Math.random * 1000),
    //   text: input
    //   time: timeInput
    // })

    setInput('')
    setTime('')
  }

  return (
    <body>
      <div className="main-content">
        <p className="intro-text">TO DO LIST</p>
        <form onSubmit={handleSubmit}>
          <input 
            className="to-do" 
            type="text" 
            placeholder="Input what you will do"
            value={input}
            autoComplete="off" required
            onChange={handleChange}
          />
          <input 
            id="time-left" 
            className="time-to-do" 
            type="number" 
            placeholder="How much days left?" 
            value={timeInput}
            min="0" autoComplete="off" required
            onChange={timeChange}/>
          <button className="fill" type="submit">Add it!</button>
        </form>
      </div>
    </body>
  );
}

export default ListForm;
