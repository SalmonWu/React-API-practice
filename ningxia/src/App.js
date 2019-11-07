import React, { Component } from 'react';
import "./abc.scss";
// import styled from 'styled-components';
import gotop from './images/gotop.png';
// import pic from './images/sec3_1.jpg';
import footer from './images/logo_top_footer.png';
// import header from './images/itinerary_header.jpg';
import CityCard from './CityCard';
// import NingXiaJson from './ningxia.json';
import Meun from './meun';
export default class App extends Component {
  state = {
    NingXiaJson: [],
  }
  componentDidMount() {
    fetch('./ningxia.json')
      .then((response) => {
        return response.json();
      })
      .then((JsonData) => {
        // console.log('111', JsonData)
        this.setState({
          NingXiaJson: JsonData,
        });
        // console.log('222', JsonData.data)
      });
  }
  render() {
    let { NingXiaJson } = this.state;
    // console.log(NingXiaJson)
    return (
      <div id="wrap" >
        {/* <!-- gotop  start --> */}
        < a className="gotop" href="https://trello.com/b/R0M3hmU5/lionzoo-%E6%B4%BB%E5%8B%95%E7%B5%84" >
          <figure><img src={gotop} /></figure>
        </a>
        {/* <!-- gotop end --> */}
        {/* <!-- nav start --> */}
        <nav className="indexNav">
          <a href="https://trello.com/b/R0M3hmU5/lionzoo-%E6%B4%BB%E5%8B%95%E7%B5%84" className="logo">
            <figure></figure>
          </a>
          <Meun />
          <a href="https://trello.com/b/R0M3hmU5/lionzoo-%E6%B4%BB%E5%8B%95%E7%B5%84" className="menuBtn">
            <span></span>
          </a>
        </nav>
        {/* <!-- nav end --> */}
        <div className="header">
          <div className="header_bg">
            <div className="logo">
              <div className="logo_p1">神奇寧夏</div>
              <div className="logo_p2">NINGXIA TOURISM</div>
            </div>
            <div className="meun_list mylayout">
              <div className="list"><a href="https://trello.com/b/R0M3hmU5/lionzoo-%E6%B4%BB%E5%8B%95%E7%B5%84">景點TOP5</a> </div>
              <div className="list"><a href="https://trello.com/b/R0M3hmU5/lionzoo-%E6%B4%BB%E5%8B%95%E7%B5%84">達人揭密</a></div>
              <div className="list"><a href="https://trello.com/b/R0M3hmU5/lionzoo-%E6%B4%BB%E5%8B%95%E7%B5%84">行程推薦</a></div>
            </div>
          </div>

        </div>
        <main>
          <div className="main_content mylayout">
            {/* <!-- title start --> */}
            <div className="title_area">
              <p>台灣旅行社行程推薦，歡迎您親自體驗寧夏旅遊魅力</p>
              <div className="border_short"></div>
            </div>
            {/* <!-- title end --> */}
            {/* <!-- taoyuan start --> */}
            <CityCard {...NingXiaJson} />

            {/* <!-- taoyuan end --> */}
          </div>
        </main>

        {/* <!-- footer start --> */}
        <div id="footer">
          <div className="footer_content">
            <a href="https://trello.com/b/R0M3hmU5/lionzoo-%E6%B4%BB%E5%8B%95%E7%B5%84" className="footer_logo">
              <img src={footer} alt="" />
            </a>
            <p>&copy;&ensp;Copyright 雄獅旅行社股份有限公司All Rights Reserved </p>
          </div>

        </div>
        {/* <!-- footer end --> */}

      </div >
    );
  }
}

