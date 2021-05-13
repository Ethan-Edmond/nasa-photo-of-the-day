import React from "react";
import styled from "styled-components";

const PodContainer = styled.div`
  width: 49%;
  background-color: ${p => p.theme.color1};
  border: 4px outset ${p => p.theme.color2};
  border-radius: 5px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${p => p.theme.breakpointMobile}{
    width: 98%;
    margin: 5px auto;
border: none;
text-align: center;
  }
`;

const CapSpan = styled.span`
  text-transform: capitalize;
`;

const Title = styled.h2`
  background-color: ${p => p.theme.color3};
  color: ${p => p.theme.color1};
  margin: 4px;
  border-radius: 3px;
  border: 3px solid ${p => p.theme.color4};
  padding: 6px 10px 10px;
  text-shadow: 2px 1px ${p => p.theme.color2};
`;

const DateHeader = styled.h4`
  margin: 0 1%;
`;

const Explanation = styled.p`
  margin: 1% 3.5%;
  text-align: justify;
`;

export default function Descr({data, setDate, initialDate}){
  const {title, date, explanation, media_type} = data;
  return (
    <PodContainer>
      <Title>
        {title}
      </Title>
      <DateHeader>
        <CapSpan className="media-type">{media_type}</CapSpan> for the date of: <input type="date" max={initialDate} min="1995-06-16" onChange={e => setDate(e.target.value)}/>
      </DateHeader>
      <Explanation>
        {explanation}
      </Explanation>
    </PodContainer>
  );
}
