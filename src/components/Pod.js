import React from "react";
import styled from "styled-components";

const PodContainer = styled.div`
  width: 50%;
  padding: 0;
  background: url("${props => props.imageURL}");
  background-size: cover;
  background-position: center;
  border-radius: 4px;

  @media ${p => p.theme.breakpointMobile}{
    width: 98%;
    height: 600px;
    margin: 5px auto 0;
  }
`;

export default function Pod ({imageURL, altText}){
  return (
    <PodContainer className="Pod" imageURL={imageURL} role="img" aria-label={"Astronomy photo of the day:" + altText}>
    </PodContainer>
  );
}
