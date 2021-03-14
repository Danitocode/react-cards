import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card.js';
import axios  from 'axios';

function App() {


  const [card, setCard] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      console.log(res.data)
      setCard(res.data)
    })
  }, [id])


  const changeNameHandler = (event, id) => {
    //1. make a copy of the cards
    const card_copy = {...card};
    //2. change the name of the specific card
    card_copy.name = event.target.value;
    //3. set the cards with the latest version of card copy
    setCard(card_copy);
  }

  return (
    <div className="App">
        <input type="text" value={id} onChange={e => setId(e.target.value)}></input>  
    <Card
      avatar={card.avatar}
      name={card.name}
      phone={card.phone}
      title={card.title}
      key={card.id}
      onChange={(event) => changeNameHandler(event, card.id)}
    />
    </div>
  );
}

export default App;
