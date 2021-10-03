import './App.scss';
import ListItems from './ListItems.js';
import { Icon } from '@iconify/react';

function App() {
  return (
    <body>
      <div className="main-content">
        <p className="intro-text">TO DO LIST</p>
        <form onSubmit={e => {e.preventDefault();}}>
          <input className="to-do" type="text" placeholder="Input what you will do" autoComplete="off" required/>
          <input id="time-left" className="time-to-do" type="number" placeholder="How much days left?" min="0" autoComplete="off" required/>
          <button className="fill" type="submit">Add it!</button>
        </form>
          <ListItems />
      </div>
    </body>
  );
}

const calculateTimeLeft = () => {
  let year = new Date.getFullYear()
  let muchDays = document.getElementById("time-left")

  const difference = +new Date(`10/01/${year}`) - +new Date();
};


export default App;
