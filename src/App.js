import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import CharacterCard from './components/CharacterCard';
import characters from './characters.json';




class App extends Component {

  state = {
    characters
  };


  render() {
    return (
      <div>
      <Navbar /> 
      <Wrapper> 
      {this.state.characters.map(character => (
        <CharacterCard
          id={character.id}
          key={character.id}
          image={character.image}
          name={character.name}
        />
      ))}
    </Wrapper>
    </div>
    )
  }
}

export default App;
