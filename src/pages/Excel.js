import React from 'react';

const Excel = () =>{
  const {   innerHeight: height } = window;
  
  return (
    <iframe src="https://docs.google.com/spreadsheets/d/1Ly6OmD3_u5liDghlne_FuBiGyoSHVN5V/edit?usp=sharing&ouid=118185082650328182238&rtpof=true&sd=true" title="excel iframe" width="100%" height={height}></iframe>
  );
}
export default Excel;
