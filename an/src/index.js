import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu"
import  imgUrl from "./images/itinerary_header.jpg";
import "./styles.scss";

function App() {
  let footerpic = {
    backgroundImage: 'url(' + imgUrl + ')'
  };
  return (
    <div className="App">
      <div id="header">
        <Menu/>
        <footer style={footerpic}>
            
        </footer>
      </div>
      <main>
        <div className="main_content">
        </div>
      
      </main>
     
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
