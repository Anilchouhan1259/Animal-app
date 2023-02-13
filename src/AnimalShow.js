import React from 'react';
import './Animalshow.css';
import { useState } from 'react';
import heart from './svg/heart.svg';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';

const svgMap = {
  bird,cat,dog,gator,horse
}
function AnimalShow ({type}) {
  const [click, setClick] = useState(0);
  const handleClick = () =>{
    setClick(click + 1);
  }
  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' alt="animal" src = {svgMap[type]}/>
      <img className='heart'
      alt="heart" 
      src = {heart}
      style = {{width: 10 + 10*click }}
      />
    </div>
  )
}

export default AnimalShow
