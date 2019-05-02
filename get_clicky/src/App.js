import React, {Component} from 'react';
import characters from "./characters.json";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

import './App.css';
import CharTile from './components/CharTile/index.js';

class App extends Component {

  state = {
    characters
  };

  render(){



      return (
      
        <>
          <Nav />
          <Wrapper>
            <h1>This is a header!</h1>
            {this.state.characters.map(character => 
                  <CharTile
                      image={character.image}
                  />
              )}
          </Wrapper>
        </>

      );
    }

 }

export default App;
