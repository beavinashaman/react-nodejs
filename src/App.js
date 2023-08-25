import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [msg,setMsg] = useState();

useEffect(()=>{
  axios.get('http://localhost:8000/test').then((res)=>{
    console.log(res,'res');
setMsg(res.data.message);
  });
  },[]);

  return (
    <div className="App">
     {msg}
    </div>
  );
}

export default App;
