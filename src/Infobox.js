import React from 'react';
import numeral from "numeral";
import "./Infobox.css";
function Infobox({title,total,today}) {
    return (

        <div className="card-txt">
        <p>{title}</p>
        <h4><b>+ {numeral(today).format('0.0a')}</b></h4>
        <p>Total :{numeral(total).format('0.0a')}</p>
        </div>
    )
}

export default Infobox