import React, {useState, useEffect} from "react"
import  "./App.css"
import InfoBox from './Infobox';
import "leaflet/dist/leaflet.css"
import Infobox from "./Infobox";
import Table from "./Table"
import MyMap from "./MyMap";
import Chart from "./Chart";
//import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import News from "./News";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryinfo] = useState([]);
  const [tableData,setTableData] = useState([]);
  const [mapData,setMapData] = useState([]);
  const [mapCenter,setMapCenter] = useState([34.80746,-40.4796])
  const [mapZoom,setMapZoom] = useState(3);
  const [chartData,setChartData] = useState({});
  const [countryChart,setCountryChart] = useState("")
  const [countryUrl,setCountryUrl] = useState("Worldwide")
  const [periodeUrl,setPeriodeUrl] = useState("all")

  

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
    .then((data) => {
      setCountryinfo(data)
    })

  },[])
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data) => {
      const countries = data.map(country => ({
        name: country.country
      }));
      setCountries(countries);
      setMapData(data);
      setTableData(data);
    });
   }, [])

   useEffect(() => {
     fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
     .then((response)=>response.json())
     .then((data) => {
        setChartData(data)
        setCountryChart("Worldwide")
     })
   
   },[])

   const onPeriodChange = async (evt) => {
    const periode = evt.target.value;
    setPeriodeUrl(periode);
    const url2= countryUrl === 'Worldwide'? "https://disease.sh/v3/covid-19/historical/all?lastdays="+periode :"https://disease.sh/v3/covid-19/historical/"+countryUrl+"?lastdays="+periode;
    await fetch(url2)
   .then((response) => response.json())
   .then((data) => {
     if(url2 === "https://disease.sh/v3/covid-19/historical/"+countryUrl+"?lastdays="+periode) {
       setChartData(data.timeline);
       setCountryChart(countryUrl);
     }
     else {
       setChartData(data)
       setCountryChart("Worldwide")
     }
   })

  }
   const onCountryChange = async(evt) => {
     
      const country= evt.target.value;
      setCountryUrl(country)
      const url= country ==='Worldwide' ? "https://disease.sh/v3/covid-19/all" : "https://disease.sh/v3/covid-19/countries/"+country
      /* for infoboxes*/ 
      await fetch(url)
      .then((response) => response.json())
      .then((data)=> {
        setCountryinfo(data);
       // setMapCenter([data.countryInfo.lat,data.countryInfo.long]);
        setMapZoom(3);
      });
      
      /* for charts */
      const url2= country === 'Worldwide'? "https://disease.sh/v3/covid-19/historical/all?lastdays="+periodeUrl :"https://disease.sh/v3/covid-19/historical/"+country+"?lastdays="+periodeUrl;
      await fetch(url2)
     .then((response) => response.json())
     .then((data) => {
       if(url2 === "https://disease.sh/v3/covid-19/historical/"+country+"?lastdays="+periodeUrl) {
         setChartData(data.timeline);
         setCountryChart(country);
       }
       else {
         setChartData(data)
         setCountryChart("Worldwide")
       }
     })
   
    };
  return (
    <div className="app">

    <Router>
    <div className="navigation">
    <div className="logo">
      <p> COVID-19 </p>
    </div>
    <ul className="menu">
		  <li><a href="#">Stats</a></li>
		  <li><a href="">Actualities</a></li>
		  <li><a href="#">Vaccines</a></li>
		  <li><a href="#">WHO</a></li>
  	</ul>
    </div>
    
   
    <h3>Covid-19 Tracker</h3>

    <div className="container">
    <div className="left_side">
      <select onChange={onCountryChange}>
      <option> Worldwide</option>
      {countries.map((country) => (
        <option> {country.name}</option>
      ))}
     </select>
    { /* InfoBox */}
    <div className="app__cards">
      
    <div className="cases">
      <Infobox title=" Cases" 
              total={countryInfo.cases}
              today={countryInfo.todayCases}
              />
    </div>
    <div className="recovered">
      <Infobox title=" Recovered" 
              total={countryInfo.recovered}
              today={countryInfo.todayRecovered}
              />
       </div>       
      <div className="deaths">
      <Infobox title=" Deaths" 
              total={countryInfo.deaths}
              today={countryInfo.todayDeaths}
              />
        </div>

    </div>   
    { /* Graph */}
    
    <select onChange={onPeriodChange}>
    <option value="all"> touete la période</option>
    <option value="7"> 1 semaine</option>
    <option value="15"> 2 semaines</option>
    <option value="30"> 30 jours</option>
    </select>    
      
    <Chart dataCountry={chartData} country={countryChart}/>

	</div>
	
    <div className="right_side">
     { /* Table */}
    <Table tableInfo= {tableData}/> 
    </div>
    
    { /* Map */}
    <div className="map_container">   
    <MyMap center={mapCenter} zoom={mapZoom} data={mapData}/>
    
    </div>
    </div>
     <Route path="/News" exact component={News} />
    </Router>
    </div>

   
  );
}

export default App;
