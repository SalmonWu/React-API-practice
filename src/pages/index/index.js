import React, { Component } from 'react';
const $ = window.jQuery = require('jquery')

class Index extends Component {
    componentDidMount() {
    }

    render() {
        console.log('Index')
        return (
            <div className="Index">
                <h1>Webpack test index</h1>
                <img src={require("~/images/logo.png")} alt='123'></img>
                <select data-placeholder="Choose a country..."
                    className="chosen-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                </select>
            </div >
        )
    }
}

export default Index