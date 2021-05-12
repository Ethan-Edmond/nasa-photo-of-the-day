import React, { useState, useEffect } from "react";
import "./App.css";
import Pod from "./components/Pod";
import Descr from "./components/Descr";
import axios from "axios";
import fetchObj from "./fetchObj";

const today = new Date();
const initialDate = today.toJSON().slice(0,10);

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(initialDate);

  useEffect(()=>{
    axios.get("", {
      baseURL: fetchObj.BASE_URL,
      params: {
        api_key: fetchObj.API_KEY,
        date: date
      }
    })
      .then(res => {
        setData(res.data);
      });
  }, [date]);

  return (
    <div className="App">
      {data && <Pod imageURL={data.url} altText={data.title}/>}
      {data && <Descr data={data}/>}
      <input type="date" max={initialDate} onChange={e => setDate(e.target.value)}/>
    </div>
  );
}

export default App;
