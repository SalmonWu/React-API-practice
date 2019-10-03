import React from "react";
import ReactDOM from "react-dom";
import { filter,slice } from 'lodash';
import Background from "../images/sec3_1.jpg";

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Loadfirst:false, 
            newdata:{},// 桃園 台中 高雄處理過後資料
            currentdata:3, // 一次顯示多少
            addlist:3, // 更多按鈕要顯示幾個
            max:6, // 從第幾個開始增加列表
            dn:false // 更多按鈕開關
        }   
    
    }
    componentDidMount() {
       this.viewlist();
    }
    componentWillUnmount() {

    }
    // 點擊更多列表
    morelist = () =>{
        let data =this.props.data.data;   
        let add =this.state.addlist;
        let max=this.state.max;
        let dn;
        let Taoyuan  = filter(data, { 'departure': "Taoyuan"});
        let Taichung = slice(filter(data, { 'departure': "Taichung"}),0,this.state.currentdata);
        let Kaohsiung= slice(filter(data, { 'departure': "Kaohsiung"}),0,this.state.currentdata);
        if(max+add >= Taoyuan.length){
            max=Taoyuan.length
            dn=true;
        }else{
            max=this.state.max + add; 
            dn=false;
        }
        let Taoyuan2  = slice(Taoyuan,0,max);
        this.setState({
            newdata:{
                "Taoyuan":Taoyuan2,
                "Taichung":Taichung,
                "Kaohsiung":Kaohsiung
            },
            max:max,
            dn:dn,
        })       
    }
    // 初始化顯示
    viewlist= ()=>{
        let data =this.props.data.data;     
        let Taoyuan  = slice(filter(data, { 'departure': "Taoyuan"}),0,(this.state.currentdata+3));
        let Taichung = slice(filter(data, { 'departure': "Taichung"}),0,this.state.currentdata);
        let Kaohsiung= slice(filter(data, { 'departure': "Kaohsiung"}),0,this.state.currentdata);

        this.setState({
            Loadfirst:true,
            newdata:{
                "Taoyuan":Taoyuan,
                "Taichung":Taichung,
                "Kaohsiung":Kaohsiung
            }
        })
    }

    render(){
     const {Loadfirst,newdata,max,dn}=this.state;
     const style={
       "backgroundImage":`url(${Background})`
     }
        if(Loadfirst){
           
            return(
                <React.Fragment>
                    <div className="list_view">
                        <header className="Taoyuan"> 桃園機場出發 </header>
                        <div>
                            <ul>
                            {
                                newdata.Taoyuan.map((item,i)=>{
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
                            <a href="javascript:;" className={dn===true?'dn':''} onClick={this.morelist}> 更多</a>
                        </footer>
                        
                    </div>
                    <div className="list_view">
                        <header className="Taichung"> 台中機場出發 </header>
                        <div>
                            <ul>
                                {
                                    newdata.Taichung.map((item,i)=>{
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
                       </div>
                    <div className="list_view">
                            <header className="Kaohsiung"> 高雄小港出發 </header>
                            <div>
                                <ul>
                                {
                                    newdata.Kaohsiung.map((item,i)=>{
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
                        </div>
                </React.Fragment>
                
                
            )
        }else{
            return null;
        }
      
    }
}


export default List;
