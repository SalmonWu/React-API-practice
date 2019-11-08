import React from "react";
import ReactDOM from "react-dom";
import Menu from "../../components/Menu";
import imgUrl from "./images/itinerary_header.jpg";
import "../../sass/styles.scss";
// import List from"./components/List";
import List from"./List2";
import Btnmenu from"../../components/Btnmenu";
import Data from"../../json/ningxia.json";
import Gotop from "../../components/Gotop";


let lastScrollY = 0;
let ticking = false;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
        openclose:false,
        scrollTop:false
    }   

}
componentDidMount(){
  window.addEventListener('scroll',this.handleScroll,true)
}

componentWillUnmount(){
  window.removeEventListener('scroll', this.handleScroll);
}
handleScroll(e) {
  const scrollY = window.scrollY;
  const scrollTop = this.myRef.current.scrollTop;
  let view;
  console.log(lastScrollY);
  if(lastScrollY > 100){
     this.setState({
      scrollTop:true
    })
  }



  // if (!ticking) {
  //   window.requestAnimationFrame(() => {
  //     // this.nav.current.style.top = `${lastScrollY}px`;
      
  //     if(lastScrollY > 100){
        
  //     }
      
  //     ticking = false;
       
  //   });
 
  //   ticking = true;
  // }
}
openclose = () =>{
  let btn = this.state.openclose === false ? true:false;
  this.setState({
      openclose:btn
  })
}


render(){
  let footerpic = {
    backgroundImage: "url(" + imgUrl + ")"
  };
  const active = this.state.openclose  === false ? "":"active";
  return (
    <div className={`App ${active} `} >
        <Btnmenu  active = {active} onClick={this.openclose} />
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
      <Gotop  ref={this.myRef} view={this.state.BtnGotop}/>
    </div>
  );
}

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
