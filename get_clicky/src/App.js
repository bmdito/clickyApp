import React, {Component} from 'react';
import characters from "./characters.json";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"

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
            
            {this.state.characters.map(character => 
                  <CharTile
                      key={character.id}
                      image={character.image}
                  />
              )}
          </Wrapper>
          <Footer/>
        </>

      );
    }

 }

export default App;
