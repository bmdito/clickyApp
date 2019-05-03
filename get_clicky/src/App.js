import React, {Component} from 'react';
import characters from "./characters.json";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"

import './App.css';
import CharTile from './components/CharTile/index.js';

class App extends Component {

  state = {
    characters,
    notClicked: characters
  };

  clickedHero = id => {
    
    const notClicked = this.state.notClicked.filter(character => character.id !== id);

      this.setState({
        notClicked
      });
            
      console.log(this.state.notClicked);
      
  }

  matchCheck = id => {
    console.log("Check engaged");
  }
  

  render(){



      return (
      
        <>
          <Nav />
          <Wrapper>
            
            {this.state.characters.map(character => 
                  <CharTile
                      key={character.id}
                      id={character.id}
                      image={character.image}
                      clickedHero = {this.clickedHero}
                      matchCheck = {this.matchCheck}
                  />
              )}
          </Wrapper>
          <Footer/>
        </>

      );
    }

 }

export default App;
