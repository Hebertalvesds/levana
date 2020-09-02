import React, { Component } from 'react';

export default class Start extends Component{
    constructor(props){
        super(props);
        this.handle = this.handleClick.bind(this);
    }

    handleClick(){
        let el = document.getElementById('start');
        el.remove();
    }

    render(){
        return(
            <div className={"display-flex full-page flex-col flex-justify-center flex-align-center"} id="start">
                <h1 className="font-black text-center"><span className="title">Levana</span></h1>
                <button className="command font-black display-flex flex-row 
                        flex-justify-center flex-align-center button border-radius-half"
                        onClick={ this.handleClick }>
                    <span className="lni lni-play lni-32"></span>
                    Começar
                </button>
            </div>
        )
    }
}
