import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
const axios = require('axios').default

function App() {

const[to,setTo]=useState("");
const[from,setFrom]=useState("");
const[input,setInput]=useState("");
const[output,setOutput]=useState("");

useEffect(()=>{
  axios.get('https://libretranslate.de/languages',{headers:{'accept':'application/json'}}).then(res=>{
      
      console.log(res);

  })
})

//curl -X GET "https://libretranslate.de/languages" -H  "accept: application/json"

  return (
    <div className="App">

      <div>

        From:
        <select>
         <option value="1">1</option> 
         <option value="1">2</option> 
        </select>

        To:
        <select>
          <option value="1">1</option> 
         <option value="1">2</option> 
        </select>
      </div>
      <div>
        <textarea cols="50" row="8"></textarea>
      </div>
      <div>
      <textarea cols="50" row="8"></textarea>
      </div>
      <div>
      <button>Translate</button>
      </div>
      
    </div>
  );
}

export default App;
