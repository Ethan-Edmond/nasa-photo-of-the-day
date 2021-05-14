import React, { useState } from "react";
import styled from "@emotion/styled";
import TextField from '@material-ui/core/TextField';
import { Collapse, Button } from "reactstrap";
import theme from "../theme";

const PodContainer = styled.div`
  width: 49%;
  background-color: ${theme.color1};
  border: 4px outset ${theme.color2};
  border-radius: 5px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${theme.breakpointMobile}{
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
  background-color: ${theme.color3};
  color: ${theme.color1};
  margin: 4px;
  border-radius: 3px;
  border: 3px solid ${theme.color4};
  padding: 6px 10px 10px;
  text-shadow: 2px 1px ${theme.color2};
`;

const DateHeader = styled.h4`
  margin: 0 1%;
`;

const Explanation = styled.div`
  margin: 1% 3.5%;
  text-align: justify;
`;

export default function Descr({data, setDate, initialDate}){
  const {title, explanation, media_type} = data;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <PodContainer>
      <Title>
        {title}
      </Title>
      <DateHeader>
        <CapSpan className="media-type">{media_type} </CapSpan>
        for the date of: <></>
        <TextField
          id="date"
          type="date"
          inputProps={{
            max: initialDate,
            min: "1995-06-16"
          }}
          onChange={e => setDate(e.target.value)}/>
      </DateHeader>
      <Button onClick={e => setIsOpen(!isOpen)}>Collapse</Button>
      <Collapse isOpen={isOpen}>
        <Explanation>
          {explanation}
        </Explanation>
      </Collapse>
    </PodContainer>
  );
}
