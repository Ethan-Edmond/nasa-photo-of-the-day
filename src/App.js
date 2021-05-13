import React, { useState, useEffect } from "react";
import "./App.css";
import Pod from "./components/Pod";
import Descr from "./components/Descr";
import axios from "axios";
import fetchObj from "./fetchObj";
import styled from "styled-components";

const today = new Date();
const initialDate = today.toJSON().slice(0,10);

const OuterBox = styled.div`
  padding: 3px;
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.theme.black};
`;
const StyledContainer = styled.div`
  padding: 0.5%;
  border: 5px outset ${props => props.theme.color2};
  border-radius: 1%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.color1};

  @media ${p => p.theme.breakpointMobile}{
    display: block;
    overflow: auto;
  }
`;

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
    <OuterBox>
      <StyledContainer>
        {data && <Pod imageURL={data.url} altText={data.title}/>}
        {data && <Descr data={data} setDate={setDate} initialDate={initialDate}/>}
      </StyledContainer>
    </OuterBox>
  );
}

export default App;
