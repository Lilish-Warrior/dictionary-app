import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <small className="text-uppercase">{props.meaning.partOfSpeech}</small>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="text-capitalize">
              Definition: {definition.definition}
            </p>{" "}
            <br />
            <p>
              <em className="text-capitalize">Example: {definition.example}</em>
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
