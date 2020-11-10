import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const inputFirstname = React.useRef(null);
  const inputLastname = React.useRef(null);
  const inputJokes = React.useRef(null);

  const [jokes, setJokes] = useState([]);
  const getJokes = () => {
    console.log(inputFirstname.current.value + inputLastname.current.value + inputJokes.current.value);

    axios
      .get(
        `http://api.icndb.com/jokes/random/${inputJokes.current.value ? inputJokes.current.value : 1}?${
          inputFirstname.current.value ? 'firstName=' + inputFirstname.current.value : ''
        }&${inputLastname.current.value ? 'lastName=' + inputLastname.current.value : ''}`
      )
      .then(function (response) {
        // handle success
        console.log(response.data.value);
        setJokes(response.data.value);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="input-group">
          <input type="text" ref={inputFirstname} placeholder="First Name" />
          <input type="text" ref={inputLastname} placeholder="Last Name" />
          <input type="number" min={1} max={100} ref={inputJokes} placeholder="Number of jokes" />
          <button onClick={getJokes}>กด</button>
        </div>
        <div className="content">
          {jokes.map((obj, i) => (
            <p key={i} className={i % 2 == 0 ? 'joke-bg' : ''} dangerouslySetInnerHTML={{__html: obj.joke}}></p>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
