import React, { Component } from 'react';
import InputName from './Components/InputName';
import Tabuada from './Components/Tabuada';
import InputNumber from './Components/InputNumber';

const storage = window.localStorage;

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            fator: 1,
            items: 1
        }
        this.handleChangeFator = this.handleChangeFator.bind(this);
        this.handleChangeItems = this.handleChangeItems.bind(this);

    }

    componentDidMount(){
        if(storage.getItem('name') !== null && typeof(storage.getItem('name') == 'string'))
            this.setState({name: storage.getItem('name')});
        this.setState({createAt: new Date().toLocaleTimeString()});
    }

    componentDidUpdate(){
        if(this.name == 'Hebert')
            this.setState({updateAt: new Date().toLocaleTimeString()});
    }

    handleChangeFator(fator){
        this.setState({fator:fator})
    }

    handleChangeItems(items){
        this.setState({items:items});
    }

    render(){
        let page;
        page = <div className="font-black content">
            <p>Olá, { this.state.name }</p>
            <div>
                <InputNumber num={ this.state.fator} 
                            onNumberChange={ this.handleChangeFator } 
                            apresentacao="Multiplicando: "/>
            </div>
            <div>
                <InputNumber num={ this.state.items }
                            onNumberChange={ this.handleChangeItems } 
                            apresentacao="Multiplicar até?"/>
            </div>
            <Tabuada fator={ this.state.fator } 
                     items={ this.state.items }
                     lastUpdate={new Date()} />
        </div>

        if (this.state.name == '')
            page = <InputName/>
        
        return(
            page
        )
    }
}