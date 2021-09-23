import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="text-capitalize">{props.results.word}</h2>
        <small>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </small>
        <br />
        <div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}{" "}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
