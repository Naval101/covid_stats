import React from 'react';
import "./Info.css";
import sypt from './symptoms.jpg'; // relative path to image 
import prevent from './prevention.jpg'; // relative path to image 
import treat from './treatment.jpg'; // relative path to image 

function Info() {
    return (
        <div className="cards">
        <div className="card">
        <img src={sypt} style={{width:"100%"}}/>
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19#:~:text=symptoms">
        <div className="container">
          <h4><b>SYMPTOMS</b></h4> 
        </div>
        </a>
       </div>
       
       <div className="card">
        <img src={prevent} style={{width:"100%"}}/>
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">
        <div className="container">
          <h4><b>PREVENTION</b></h4> 
        </div>
        </a>
       </div>

       <div className="card">
        <img src={treat} style={{width:"100%"}}/>
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19#:~:text=protect">
        <div className="container">
          <h4><b>TREATMENTS</b></h4> 
        </div>
        </a>
       </div>

        </div>
    );

}

export default Info;