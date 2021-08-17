import React,{useEffect,useState} from 'react';
import "./News.css";

function News() {
    const [dataNews,setDataNews] = useState();
    const apikey= "";

    useEffect(() => {
    const url="https://newsapi.org/v2/top-headlines?country=us&q=covid&apiKey=f54c8955538e4cf29efa2003b9fc9ef0";
    fetch(url)
    .then((response)=>response.json())
    .then((data)=> {
            setDataNews(data.articles);
        })
    }, [])

return (
   <div className ="news">
     {
         
         dataNews && dataNews.map((data)=>(
         <div className="breaknews">
         <img src={data.urlToImage} />
         <div className="new">
         <h3><a href= {data.url} >{data.title}</a></h3>
         <p>{data.content}</p>
         
         <div className="info">
         <p>Source : {data.source.name}</p>
         <p>Published {data.publishedAt}</p>
         </div>

         </div>
         </div>
         ))}
   </div>  
    ) 
}

export default News;