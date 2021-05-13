import React from "react";

export default function Descr({data}){
  const {title, date, explanation, media_type} = data;
  return (
    <div className="pod-container">
      <h2>
        {title}
      </h2>
      <h4>
        <span className="media-type">{media_type}</span> for the date of: {date}
      </h4>
      <p>
        {explanation}
      </p>
    </div>
  );
}
