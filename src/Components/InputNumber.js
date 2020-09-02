import React, { Component } from 'react';

export default class InputNumber extends Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onNumberChange(e.target.value);
    }

    render(){
        return(
            <>
                <label htmlFor="fator">{this.props.apresentacao} </label>
                <input type="number" 
                       name="fator"
                       min="1"
                       value={this.props.num}
                       onChange={this.handleChange}/>
            </>
        )
    }
}