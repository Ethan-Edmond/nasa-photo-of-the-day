import React from "react";
import styled from "styled-components";

const PodContainer = styled.div`
  background: url("${props => props.imageURL}");
  background-size: cover;
  background-position: center;

  @media ${p => p.theme.breakpointMobile}{
    height: 600px;
    margin: 5px auto 0;
  }
`;

export default function Pod ({imageURL, altText}){
  return (
    <PodContainer className="Pod w-98 sm:w-1/2 rounded" imageURL={imageURL} role="img" aria-label={"Astronomy photo of the day:" + altText}>
    </PodContainer>
  );
}
