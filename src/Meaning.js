export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <small className="text-uppercase">{props.meaning.partOfSpeech}</small>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p> <br />
            <p>Example: {definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
