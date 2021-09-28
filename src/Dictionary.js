import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexels(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = `563492ad6f9170000100000165a60e5fde924eeca115c854c4a42b38`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexels);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
