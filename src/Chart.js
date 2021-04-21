import React from 'react';
import {Line} from 'react-chartjs-2';
import "./Chart.css";
function Chart({dataCountry, country}) {
   
    const {cases,deaths} = dataCountry

    const xCases = [];
    const yCases = [];

    const xDeaths = [];
    const yDeaths = [];


    for (let date in cases) {

        xCases.push(date);
        yCases.push(cases[date]);
    } 
  
    for (let date in deaths) {

        xDeaths.push(date);
        yDeaths.push(deaths[date]);
    } 
    

    /*w'll try to put dates in array and value cases in array then affet
    them to the data */

    return (
        <div className="app_chart">
        <div>
           <h3>{country} Situation</h3> 
           
            <Line width="312px" height="250px"
               data= {
                    {
                   labels:xCases,
                   datasets:[
                       {
                           label: "Cases",
                           data: yCases,
                           backgroundColor: 'rgba(255, 99, 132, 0.2)',
         
                       }

                   ]
                   
                }
               }
            />
            </div>
            <div>
            <h3>{country} Situation</h3>
            <Line width="312px" height="250px"
            data= {
                 {
                labels:xCases,
                datasets:[
                 {
                     label: "Deaths",
                     data: yDeaths,
                     backgroundColor: 'rgb(174, 2, 1)',

                 }

                ]
                
             }
            }
         />

         </div>

     </div>
    )
}

export default Chart;