import React, { Component } from 'react';
import Data from '../../json/ningxia.json'

class itinerary extends Component {
    state = {
        data: Data
    }

    render() {
        console.log(this.state.data.msg)
        return (
            <div id="wrap">

                <a className="gotop" href="javascript:;">
                    <figure><img src="images/gotop.png"></img></figure>
                </a>
                <nav className="indexNav">
                    <a href="" className="logo">
                        <figure></figure>
                    </a>
                    <ul className="meunGroup burger_wrap">
                        <li><a href="javascript:;">關於寧夏</a></li>
                        <li><a href="javascript:;">景點TOP5</a></li>
                        <li><a href="javascript:;">達人揭秘</a></li>
                        <li><a href="javascript:;">行程推薦</a></li>
                        <li>
                            <a href="javascript:;" className="meunFb"></a>
                            <a href="javascript:;" className="meunLine"></a>
                        </li>
                    </ul>
                    <a href="javascript:;" className="menuBtn">
                        <span></span>
                    </a>
                </nav>
                <div className="header">
                    <div className="header_bg">
                        <div className="logo">
                            <div className="logo_p1">神奇寧夏</div>
                            <div className="logo_p2">NINGXIA TOURISM</div>
                        </div>
                        <div className="meun_list mylayout">
                            <div className="list"><a href="javascript:;">景點TOP5</a> </div>
                            <div className="list"><a href="javascript:;">達人揭密</a></div>
                            <div className="list"><a href="javascript:;">行程推薦</a></div>
                        </div>
                    </div>

                </div>
                <main>
                    <div className="main_content mylayout">
                        <div className="title_area">
                            <p>台灣旅行社行程推薦，歡迎您親自體驗寧夏旅遊魅力</p>
                            <div className="border_short"></div>
                        </div>
                        <div className="city_area">
                            <div className="city_title taoyuan">桃園機場出發</div>
                            <div className="boxes">
                                <div className="box">
                                    <div className="box_pic">
                                        <figure></figure>
                                    </div>
                                    <div className="box_intro">
                                        <p className="intro_p1">中安旅行社</p>
                                        <p className="intro_p2">寧夏輕鬆GO～兩晚喜來登、黃河青銅峽、沙漠騎駱駝、須彌山石窟八日(含稅、無購物、無自費)
                                        </p>
                                        <p className="intro_p3">$19,900<span>起</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="city_area">
                            <div className="city_title taichung">台中機場出發</div>
                        </div>
                        <div className="city_area">
                            <div className="city_title kaohsiung">高雄小港出發</div>
                        </div>
                    </div>
                </main>

                <div id="footer">
                    <div className="footer_content">
                        <a href="javascript:;" className="footer_logo">
                            <img src="./images/logo_top_footer.png" alt=""></img>
                        </a>
                        <p>&copy;&ensp;Copyright 雄獅旅行社股份有限公司All Rights Reserved </p>
                    </div>

                </div>

            </div>
        )
    }
}

export default itinerary
