import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import Bookcard from "./components/Bookcard";
import Jumbotron from "./components/Jumbotron";
import deck from "./deck.json";


class App extends Component {
  render() {
    return (
      <div>
         <Jumbotron/>
        <Board>
        
          <Bookcard
          name={deck[0].name}
          image={deck[0].image}
          suit={deck[0].suit}
          />
          <Bookcard
          name={deck[1].name}
          image={deck[1].image}
          suit={deck[1].suit}
          />
          <Bookcard
          name={deck[2].name}
          image={deck[2].image}
          suit={deck[2].suit}
          />
          <Bookcard
          name={deck[3].name}
          image={deck[3].image}
          suit={deck[3].suit}
          />
          <Bookcard
          name={deck[4].name}
          image={deck[4].image}
          suit={deck[4].suit}
          />
          <Bookcard
          name={deck[5].name}
          image={deck[5].image}
          suit={deck[5].suit}
          />
          <Bookcard
          name={deck[6].name}
          image={deck[6].image}
          suit={deck[6].suit}
          />
          <Bookcard
          name={deck[7].name}
          image={deck[7].image}
          suit={deck[7].suit}
          />
          <Bookcard
          name={deck[8].name}
          image={deck[8].image}
          suit={deck[8].suit}
          />
          <Bookcard
          name={deck[9].name}
          image={deck[9].image}
          suit={deck[9].suit}
          />
          <Bookcard
          name={deck[10].name}
          image={deck[10].image}
          suit={deck[10].suit}
          />
          <Bookcard
          name={deck[11].name}
          image={deck[11].image}
          suit={deck[11].suit}
          />
          <Bookcard
          name={deck[12].name}
          image={deck[12].image}
          suit={deck[12].suit}
          />
        </Board>
      </div>
    );
  }
}

export default App;

