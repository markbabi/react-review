import "./SelectedCharacter.scss";

function SelectedCharacter(props) {
  //   console.log(props.character);

  return (
    <section className="selected-character">
      <h2 className="selected-character__title">Selected Character:</h2>
      <video
        poster={props.character.image}
        className="selected-character__video"
        controls
      ></video>
      <p className="selected-character__detail">{props.character.first_name}</p>
      <p className="selected-character__detail">{props.character.last_name}</p>
      <ul className="selected-character__list">
        {props.character.catchphrases.map((phrase) => {
          return (
            <li key={phrase.id} className="selected-character__item">
              {phrase.catchphrase}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SelectedCharacter;
