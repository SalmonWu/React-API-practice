import React from 'react';

function Box({ item }) {
    return (
        <div className="box">
            <div className="box_pic">
                <figure></figure>
                {/* <figure style="background-image: url('./images/sec3_1.jpg')"></figure> */}
            </div>
            <div className="box_intro">
                <p className="intro_p1">{item.company}</p>
                <p className="intro_p2">{item.info}</p>
                <p className="intro_p3">${item.price}<span>起</span></p>
            </div>
        </div>
    );
};

export default Box;