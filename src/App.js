import React from 'react';
import { Button } from '@material-ui/core';
import News from './components/News/News';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [articles,setArticles] = useState([]);

  useEffect(() =>{
      const url =` http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=61844ab868f2409baa7b3b47a3b81d97`;
     ;

      fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  },[])

  return (
    
    <div>
       <p style={{textAlign:'center'}}><small>All rights-reserved@TuhinKhan2021</small></p>
      <h1 style={{textAlign: 'center', margin:'30px 0',color:'tomato',fontSize:'50px',borderBottom:'5px solid gray'}}>News Portal</h1>
      {
        articles.map( article => <News article = {article}></News>)
      }
     
    </div>
  );
}

export default App;
