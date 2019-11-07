import React from "react";
import ReactDOM from "react-dom";
import Topimg from "../images/gotop.png";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Gotop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }   
    
    }
    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
            // console.log("begin", arguments);
            
          });
      
          Events.scrollEvent.register('end', function(to, element) {
            // console.log("end", arguments);
          });
          
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollToTop = () => {
        scroll.scrollToTop();
       
    }

    render(){
   
       return(
           <div className="gotop">
                <a href="javascript:;" onClick={this.scrollToTop}>
                    <img src={Topimg}/>
                </a>
           </div>
       )
    }
}


export default Gotop;
