import React from "react";
import ReactDOM from "react-dom";
import  Logo from "../images/logo_top_footer.png"
const Menu =() => {
  return (
    <div className="header_contnet">
        <a href="javascript:;" target="_blank">
          <img src={Logo}/>
        </a>
        <nav>
            <ul>
                <li>關於寧夏</li>
                <li>景點TOP5</li>
                <li>達人揭秘</li>
                <li>行程推薦</li>
            </ul>
        </nav>
    </div>
  );
}

export default Menu;
