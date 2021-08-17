import React,{useEffect,useState} from 'react';
import "./News.css";

function News() {
    const [dataNews,setDataNews] = useState();
    const apikey= "f54c8955538e4cf29efa2003b9fc9ef0";

    useEffect(() => {
    const url="https://gnews.io/api/v4/search?q=covid&token=2243a19da5a6eb5a9da4baa6792a2c91&lang=en";
    fetch(url)
    .then((response)=>response.json())
    .then((data)=> {
            setDataNews(data.articles);
        })
    }, [])

return (
   <div className ="news">
     {
         
         dataNews &&dataNews.map((data)=>(
         <div className="breaknews">
         <img src={data.image} />
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