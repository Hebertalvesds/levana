import React, { Component } from 'react';
import './App.css';
import Home from './Home';

const storage = window.localStorage;

class App extends Component{

  constructor(props){
    super(props);
    this.startNewGame = this.startNewGame.bind(this);
    this.state = {
      init: false
    }
  }

  componentDidMount(){
    if(storage.getItem('init') !== null){
      this.setState({init:storage.getItem('init')});
    }
  }

  startNewGame(){
    this.setState({ init: true });
    storage.setItem("init",true);
  }
  
  render(){
    let page;

    if(!this.state.init){
      page = <div className={"display-flex full-page flex-col flex-justify-center flex-align-center"} id="start">
                  <h1 className="font-black text-center"><span className="title">Levana</span></h1>
                  <button className="command font-black display-flex flex-row 
                          flex-justify-center flex-align-center button border-radius-half"
                          onClick={ this.startNewGame }>
                      <span className="lni lni-play lni-32"></span>
                      Começar
                  </button>
               </div>
    }else{
      page = <Home/>
    }

    return(
      <>
      {page}
      </>
    );
  }
}

export default App;
