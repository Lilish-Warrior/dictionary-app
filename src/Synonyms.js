import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        Synonyms:
        <ul className="Synonyms text-capitalize">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
