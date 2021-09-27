import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="text-capitalize">{props.results.word}</h2>
          <small>
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
          </small>
        </section>
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
    return (
      <h2 className="text-center p-3">
        Find definitions, synonyms and examples
      </h2>
    );
  }
}
