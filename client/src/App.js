import React from "react";
import Bookshelf from "./Components/Bookshelf";
import Bookcard from "./Components/Bookcard";
import Jumbotron from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";


function App() {
  return (
      <div>
        <Navbar/>
        <Jumbotron/>
          <Bookshelf>
            
            <Bookcard/>
            
          </Bookshelf>
      </div>
  );
}

export default App;
