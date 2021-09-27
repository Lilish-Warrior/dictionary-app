import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <small className="text-uppercase">{props.meaning.partOfSpeech}</small>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="text-capitalize">
              <strong>Definition</strong> <br />
              {definition.definition}
            </p>{" "}
            <p>
              <em className="example" >Example: {definition.example}</em>
            </p>
            <div>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
