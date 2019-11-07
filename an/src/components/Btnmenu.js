import React from "react";
import ReactDOM from "react-dom";


const Btnmenu = props  => {
    const { active,onClick } = props;
    return(
        <React.Fragment>
            <a href="javascript:;" className={`btnmenu ${active} `}  onClick={e => onClick(e)} >
                <span></span>
            </a>
        </React.Fragment>
    )
}

export default Btnmenu;
