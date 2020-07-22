import React from 'react';
import Navbar from './Navbar';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyRoutes from './Routes';


const dogs = [
  {
    name: 'Whiskey',
    age: 5,
    src: 'whiskey',
    facts: [
      'Whiskey loves eating popcorn.',
      'Whiskey is a terrible guard dog.',
      'Whiskey wants to cuddle with you!'
    ]
  },
  {
    name: 'Hazel',
    age: 3,
    src: 'hazel',
    facts: [
      'Hazel has energy.',
      'Hazel is a good guard dog.',
      'Hazel wants to play with you!'
    ]
  },
  {
    name: 'Tubby',
    age: 4,
    src: 'tubby',
    facts: [
      'Tubby loves eating meat.',
      'Tubby is a sweethearth.',
      'Tubby wants to avoidyou!'
    ]
  }
];

function App() {
  return (
    <div className="App">
      <Navbar dogs={dogs.map(dog => dog.name)}/>
      <div className="container">
        <MyRoutes dogs={dogs} />
      </div>
    </div>
  );
}

export default App;
