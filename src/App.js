import React from 'react'
import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getAnimal(){
  const animals = ['dog','cat','horse','gator','bird'];
  return animals[Math.floor(Math.random()*animals.length)];
}

const App = () => {
  const [animals,setAnimals]=useState([]);
  const hanleClick =()=>{
    setAnimals([...animals , getAnimal()]);
  }
  const renderedAnimal = animals.map((animal,index) =>{
    return <AnimalShow type = {animal} key ={index}/>
 });
  return (
    <div className="app">
    <button onClick={hanleClick}>Add animal</button>
    <div className='animal-list'>{renderedAnimal}</div>
    </div>
  )
}

export default App;
