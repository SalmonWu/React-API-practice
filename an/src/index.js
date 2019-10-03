import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import imgUrl from "./images/itinerary_header.jpg";
import "./styles.scss";
import List from"./components/List";
import Btnmenu from"./components/Btnmenu";
import Data from"./data/ningxia.json";


function App() {
  let footerpic = {
    backgroundImage: "url(" + imgUrl + ")"
  };
  return (
    <div className="App">
      <Btnmenu/>
      <div id="header">
        <Menu />
        <footer style={footerpic}>
          <div>
            <h3>神奇寧夏</h3>
            <p>NINGXIA TOURISM</p>
          </div>
        </footer>
      </div>
      <main>
        <div className="main_content">
            <div className="title_area">
              <p>台灣旅行社行程推薦，歡迎您親自體驗寧夏旅遊魅力</p>
            </div>
            <div className="th_list">
                <List data= {Data}/>
            </div>
        </div>
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
