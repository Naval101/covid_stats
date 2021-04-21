import React,{useState, useEffect} from 'react';
import "./Table.css";
import numeral from "numeral"

function Table({tableInfo}) {  

//   const [sortedData,setSortedData]= useState([])
// let sortableData= [...tableInfo]

 function buildTable(data) {
        return data.map((info) => (
            <tr>
            <td>{info.country}</td>
            <td>{numeral(info.cases).format('0,0')}</td>
            <td>{numeral(info.recovered).format('0,0')}</td>
            <td>{numeral(info.deaths).format('0,0')}</td>
            </tr>
            
        ))
    }
    
    // const onSort = ()=> { 
              
    //     sortableData.sort((a,b)=> {
    //         if(a.cases < b.cases ) {
    //             return 1
    //         }
    //         else { 
    //             return -1
    //         }
    //     })  
    //     setSortedData(sortableData)
    //  }

    return (
    <div className="table">
        <tr>
          <th>COUNTRY</th>
          <th data-sortable="true">CASES</th>
          <th>Recovereds</th>
          <th>Deaths</th> 
        </tr>
        <tbody>
        { 
             buildTable(tableInfo)
        }
        </tbody>
       
    </div>
    )
   
}

export default Table;