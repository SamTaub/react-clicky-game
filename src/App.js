import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import CharacterCard from './components/CharacterCard';
import characters from './characters.json';

class App extends Component {

  state = {
    characters,
    status: "Click an image to begin the game - don't click the same image twice!",
    currentScore: 0,
    highScore: 0,
    guesses: []
  };

  //ES6 Version of Fisher-Yates Shuffle Algorithm.  Credit to the contributors of this post: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleClick = (event) => {

    this.shuffleArray(this.state.characters)

    this.setState({
      currentScore: this.state.currentScore + 1
    }, () => {
      if (this.state.currentScore >= this.state.highScore) {
        this.setState({
          highScore: this.state.currentScore
        })
      }
    })

    if (!this.state.guesses.includes(event.currentTarget.id)) {
      this.setState({
        guesses: this.state.guesses.concat(event.currentTarget.id),
        status: "You guessed correctly!"
      }, () => {
        if (this.state.currentScore === 12) {
          this.setState({
            status: "You win!  Click an image to start a new game!",
            currentScore: 0,
            guesses: this.state.guesses.splice(0, this.state.guesses.length)
          })
        }
      })
    } else if (this.state.guesses.includes(event.currentTarget.id)) {
      this.setState({
        guesses: this.state.guesses.splice(0, this.state.guesses.length),
        status: "You guessed incorrectly! Game over - try again!",
        currentScore: 0
      })
    }
  }

  render() {

    return (
      <div>
        <Navbar status={this.state.status} highScore={this.state.highScore} currentScore={this.state.currentScore} />
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              image={character.image}
              name={character.name}
              onClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;
