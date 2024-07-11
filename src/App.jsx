import "./App.scss";
import { useState } from "react";
import SelectedCharacter from "./components/SelectedCharacter/SelectedCharacter";
import CharacterList from "./components/CharacterList/CharacterList";
import simpsonsData from "./data/simpsonsData.json";

function App() {
  const [simpsonsArray, setSimpsonArray] = useState(simpsonsData);
  const [selectedCharacter, setSelectedCharacter] = useState(simpsonsData[0]);

  // console.log(simpsonsArray);
  // console.log(selectedCharacter);

  const filteredArray = simpsonsArray.filter((character) => {
    return character.id !== selectedCharacter.id;
  });

  const handleCharacterClick = (id) => {
    console.log("clicked character");

    const foundCharacter = simpsonsArray.find((character) => {
      return character.id === id;
    });
    console.log(foundCharacter);
    setSelectedCharacter(foundCharacter);
  };

  return (
    <div className="app">
      <SelectedCharacter character={selectedCharacter} />
      <CharacterList
        filteredArray={filteredArray}
        handleClick={handleCharacterClick}
      />
    </div>
  );
}

export default App;
