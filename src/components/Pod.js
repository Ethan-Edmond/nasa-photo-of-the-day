import React from "react";

export default function Pod ({imageURL, altText}){
  return (
    <div className="pod-container">
      <img src={imageURL} alt={altText}/>
    </div>
  );
}
