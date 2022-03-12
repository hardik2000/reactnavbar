import React from 'react';
import './profile.css';
import profilepic from '../images/bhanu.png';
const Bhanu = () => {
  return (
    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center"> 
          <img src={profilepic} alt="Abhishek Kumar Yadav"  height="150" width="150" />
        <span class="name mt-3"><b>Bhanu Pratap</b></span> 
        <span class="idd">@bps</span>
        <div class="text mt-3"> <span>Motivated and dedicated learner with a good programming skills<br/><br/> Django | ReactJs | Android Developemtn | BlockChain | Scrapping </span> </div>
        <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>
        <div class=" px-2 rounded mt-4 date "> <span class="join">9999023654 | Bhanupratap@gmail.com</span> </div>
        </div>
      </div>
    </div>
  )
};

export default Bhanu;