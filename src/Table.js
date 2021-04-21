import React from 'react';
import "./Table.css";
import numeral from "numeral"
import BootstrapTable from 'react-bootstrap-table-next';


function Table({tableInfo}) {  

const corona = [ ...tableInfo ];
const columns = [{
    dataField: 'country',
    text: 'Country'
  }, {
    dataField: 'cases',
    text: 'Cases',
    sort: true,
    formatter: (cell) => {
        let casesObj = cell;
        if (typeof cell !== '') {
          casesObj = numeral(cell).format('0,0');
        }
        return casesObj
    }
  }, {
    dataField: 'deaths',
    text: 'Deaths',
    sort: true,
    formatter: (cell) => {
        let deathsObj = cell;
        if (typeof cell !== '') {
          deathsObj = numeral(cell).format('0,0');
        }
        return deathsObj
    }
  },{
    dataField: 'recovered',
    text: 'Recovereds',
    sort: true,
    formatter: (cell) => {
        let recoveredObj = cell;
        if (typeof cell !== '') {
          recoveredObj = numeral(cell).format('0,0');
        }
        return recoveredObj
    }
  }];

//console.log(corona)
return (
    <BootstrapTable classes="react-bootstrap-table" keyField='id' data={ corona } columns={ columns }/>

)  
}

export default Table;