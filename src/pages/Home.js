import React from 'react';
import img from '../images/home.gif';
const Home = () =>{
  const { innerWidth:width , innerHeight: height } = window;
  
  return (
    <div>
      <img src={img} alt="home page" width={width} height={height} />
    </div>
  );
}
export default Home;