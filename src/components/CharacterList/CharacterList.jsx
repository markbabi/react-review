function CharacterList(props) {
  console.log("character list props: ", props);
  return (
    <section className="characters">
      <h2 className="characters__title">Character List</h2>
      <ul className="characters__list">
        {props.filteredArray
          // .filter((character) => {
          //   return character.id !== selectedCharacter.id;
          // })
          .map((character) => {
            return (
              <li
                onClick={() => {
                  props.handleClick(character.id);
                }}
                key={character.id}
                className="characters__item"
              >
                <img
                  src={character.image}
                  alt=""
                  className="characters__image"
                />
                <p className="characters__detail">{character.first_name}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default CharacterList;
