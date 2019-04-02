import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import CharacterCard from './components/CharacterCard';
import characters from './characters.json';




class App extends Component {


  state = {
    characters,
    status: "Click an image to begin!",
    currentScore: 0,
    highScore: 0,
    guesses: []
  };


  handleClick = (event) => {

    this.setState({
      currentScore: this.state.currentScore + 1
    }, () =>{
      if(this.state.currentScore >= this.state.highScore){
        this.setState({
          highScore: this.state.currentScore
        })
      }
    })

    if(!this.state.guesses.includes(event.currentTarget.id)){
      this.setState({
        guesses: this.state.guesses.concat(event.currentTarget.id),
        status: "You guessed correctly!"
      }, () => {console.log(this.state.guesses)})
    } else if(this.state.guesses.includes(event.currentTarget.id)){
      this.setState({
        guesses: this.state.guesses.splice(0,this.state.guesses.length),
        status: "You guessed incorrectly!",
        currentScore: 0
      })
    }
    // if(this.state.guesses.includes(event.currentTarget.id)){
    //   alert("You lose")
    //   this.setState({
    //     currentScore: 0,
    //     guesses: this.state.guesses.splice(0,this.state.guesses.length)
    //   })
    // }
    // this.setState({
    //   guesses: this.state.guesses.concat(event.currentTarget.id)
    // })
    // console.log(this.state.guesses);
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
