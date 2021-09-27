import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function storeword(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="title-block">
          <h1> What word are you looking for? </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={storeword}
              placeholder="Search for a word..."
              className="form-control text-center"
              autoFocus="on"
              defaultValue={props.defaultWord}
            />
          </form>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
