import { useState } from "react";
import React, { Component } from 'react';
import "./App.css";
import LineChart from "./LineChart";
import {myDate, myDate2, UserData, UserData2} from "./Data";
//import Options from "./options";


function App() {

  const [chartDrop, setChartDrop] = useState(UserData);
  const [myChartDate, setMyChartDate] = useState(myDate)


  const [userData, setUserData] = useState({
    
   type: 'scatter',
   
    datasets: [
      {
        data: chartDrop, 
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: "black",
        borderWidth: 2,
        label: myChartDate,
        tension: 0.4,
        showLine: true
      },
    ],
  });

  return (
    <div className="App" >
      

     {/* <div style={{ width: "500px", paddingLeft:"100px"}}>
     <Options />
     </div> */}


     <br/>
{/*        <div >
      <select class="select-css"  id = 'chartDropId' value = {chartDrop} onChange= {(e) => {setChartDrop(e.target.value)}}>
        <option  value={UserData}> {myDate} </option>
        <option onClick= {() => { setUserData({
   type: 'scatter',
   
    datasets: [
     {
        data: UserData2,
        backgroundColor: [
          "rgba(192,22,142,1)",
        ],
        borderColor: "black",
        borderWidth: 2,
        label: myDate2,
        tension: 0.4,
        showLine: true,
    
      }, 

    ],
  })}} value={UserData2}> {myDate2} </option>
      </select>
     </div>  */}







     <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
  <a onClick= {() => {/* setChartDrop(UserData2); setMyChartDate(myDate2); */ setUserData({
   type: 'scatter',
   
    datasets: [
     {
        data: UserData2,
        backgroundColor: [
          "rgba(192,22,142,1)",
        ],
        borderColor: "black",
        borderWidth: 2,
        label: myDate2,
        tension: 0.4,
        showLine: true,
    
      }, 

    ],
  })}}>
      {myDate2}
     </a> 




   <a onClick={() => {/* setChartDrop(UserData); setMyChartDate(myDate); */ setUserData({
   type: 'scatter',
   
    datasets: [
     {
        data: UserData,
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: "black",
        borderWidth: 2,
        label: myDate,
        tension: 0.4,
        showLine: true,
    
      }, 

    ],
  
  })}}>
      {myDate}
     </a> 
  </div>
</div>
   
     <div class="chartCard" >

      <div class="chartBox" >

      <div className="linechart" style={{ width: "1000px", paddingLeft:"100px"}}>
        <LineChart chartData={userData} />
      </div>
        
      </div>
    </div>


    </div>
  );
}

export default App;
// paddingLeft:"15%"