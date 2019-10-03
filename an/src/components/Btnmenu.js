import React from "react";
import ReactDOM from "react-dom";


class Btnmenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openclose:false
        }   
    
    }

    openclose = () =>{
        let btn = this.state.openclose === false ? true:false;
        this.setState({
            openclose:btn
        })
    }


    render(){
        const active = this.state.openclose  === false ? "":"active";
        console.log(this.state.openclose );
        return(
            <React.Fragment>
                <a className={`btnmenu ${active} ` } onClick={this.openclose} href="javascript:;">
                    <span></span>
                </a>
            </React.Fragment>
        
        )
    }
}


export default Btnmenu;
