import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import { filter, slice } from "lodash";
import Background from "../images/sec3_1.jpg";

const List = function(props) {
  const [newdata, setnewdata] = useState({});
  const [currentdata1, setcurrentdata1] = useState(3);
  const [currentdata2, setcurrentdata2] = useState(3);
  const [currentdata3, setcurrentdata3] = useState(3);
  // const {newdata,currentdata}=props;


//   let data = props.data.data;
//   let Taoyuan = slice(filter(data, { departure: "Taoyuan" }), 0, currentdata+3);
//   let Taichung = slice(filter(data, { departure: "Taichung" }), 0, currentdata);
//   let Kaohsiung = slice(filter(data, { departure: "Kaohsiung" }), 0, currentdata);

let data = props.data.data;
let Taoyuan= filter(data, { departure: "Taoyuan" });
let Taichung= filter(data, { departure: "Taichung" });
let Kaohsiung= filter(data, { departure: "Kaohsiung" });


React.useEffect(() => {
    let Taoyuanview = slice(Taoyuan, 0 , currentdata1+3);
    let Taichungview = slice(Taichung, 0, currentdata2);
    let Kaohsiungview = slice(Kaohsiung, 0, currentdata3);
    setnewdata({
      Taoyuan: Taoyuanview,
      Taichung: Taichungview,
      Kaohsiung: Kaohsiungview
    });
    
  }, [currentdata1,currentdata2,currentdata3]);


  let moreTaoyuan=()=>{
    let Taoyuanmax = Taoyuan.length;
    console.log("onclick");
    if( currentdata1 <= Taoyuanmax){
        setcurrentdata1(currentdata1+3)
    }else{
        setcurrentdata1(Taoyuanmax);
    }
       
  }
  let moreTaichung=()=>{
    let Taichungmax = Taichung.length;
    console.log("onclick");
    if( currentdata2 <= Taichungmax){
        setcurrentdata2(currentdata2+3)
    }else{
        setcurrentdata1(Taichungmax);
    }  
  }




  const style={
    "backgroundImage":`url(${Background})`
  }
//   console.log(currentdata1);
    return (
        <React.Fragment>
            <div className="list_view">
                <header className="Taoyuan"> 桃園機場出發 </header>
                <div>
                    <ul>
                    {
                        newdata.Taoyuan&&newdata.Taoyuan.map((item,i)=>{
                            return(
                                <li key={i}>
                                    <figure style={style}></figure>
                                    <div>
                                        <header>
                                            {item.company}
                                        </header>
                                        <div>
                                            {item.info}
                                        </div>
                                        <footer>
                                            <p>{item.price}</p>
                                        </footer>
                                    </div>
                                </li>
                            )
                        })
                    }
                    </ul>
                
                </div>
                <footer>
                    <a href="javascript:;"  onClick={moreTaoyuan}> 更多</a>
                </footer>
            </div>
            <div className="list_view">
                <header className="Taichung"> 台中機場出發 </header>
                <div>
                    <ul>
                        {
                            newdata.Taichung&& newdata.Taichung.map((item,i)=>{
                                return(
                                    <li key={i}>
                                            <figure  style={style}></figure>
                                            <div>
                                                <header>
                                                    {item.company}
                                                </header>
                                                <div>
                                                {item.info}
                                                </div>
                                                <footer>
                                                    <p>{item.price}</p>
                                                </footer>
                                            </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <footer>
                    <a href="javascript:;"  onClick={moreTaichung}> 更多</a>
                </footer>
            </div>
            <div className="list_view">
                <header className="Kaohsiung"> 高雄小港出發 </header>
                <div>
                    <ul>
                        {
                            newdata.Kaohsiung&& newdata.Kaohsiung.map((item,i)=>{
                                return(
                                    <li key={i}>
                                            <figure  style={style}></figure>
                                            <div>
                                                <header>
                                                    {item.company}
                                                </header>
                                                <div>
                                                {item.info}
                                                </div>
                                                <footer>
                                                    <p>{item.price}</p>
                                                </footer>
                                            </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            
        </React.Fragment>
    )
};

export default List;
