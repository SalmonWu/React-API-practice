import React, { Component } from 'react';
import Box from './Box';
import { exportDefaultSpecifier } from '@babel/types';



export default class CityCard extends Component {
    state = {
        cityArray: [],
    }
    cityArray = () => {
        const { data } = this.props;
        const cityArray = this.state.cityArray;
        let cityArr = data.map((placeAll) => {
            return placeAll.departure
        })
        let cityName = cityArr.filter(function (ele, index) {
            return (
                cityArr.indexOf(ele) === index
            )
        })

        // console.log(cityName);
        return cityName;
    }
    aboutClass = (cityItem) => {

        if (cityItem === "Taichung") {
            return "從台中出發"
        } else if (cityItem === "Taoyuan") {
            return "從桃園出發"
        } else if (cityItem === "Kaohsiung") {
            return "從高雄出發"
        }

        //(3) ["Taoyuan", "Kaohsiung", "Taichung"]
    }

    render() {
        const { data } = this.props;
        console.log(data)
        if (data !== undefined) {
            return (
                <React.Fragment>
                    {this.cityArray().map((cityItem, idx) => {
                        return (
                            < div className="city_area" key={cityItem}>
                                <div className={`city_title ${cityItem.toLowerCase()}`}>{this.aboutClass(cityItem)}</div>
                                <div className="boxes">
                                    {data.map((item) => {
                                        if (item.departure === cityItem) {
                                            return <Box item={item} key={item.departure + item.id} />
                                        }
                                    })}
                                </div>
                            </div >
                        )
                    })}
                </React.Fragment>
            )
        } else {
            return null;
        }

    }
}
