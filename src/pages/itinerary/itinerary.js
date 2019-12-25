import React, { Component } from 'react';
import Data from '../../json/ningxia.json'
import gotop from '../../images/gotop.png'

class itinerary extends Component {
    state = {
        data: Data,
        img: {
            gotop: gotop
        }
    }

    render() {
        console.log(this.state.data.msg, this.state.data[0])
        return (
            <div id="wrap">

                <a className="gotop" href="javascript:;">
                    <figure><img src={this.state.img.gotop}></img></figure>
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
                                        <p className="intro_p1">{this.state.data.company}</p>
                                        <p className="intro_p2">{this.state.data.info}
                                        </p>
                                        <p className="intro_p3">${this.state.data.price}<span>起</span></p>
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
