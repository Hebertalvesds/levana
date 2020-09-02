import React, { Component } from 'react';

const storage = window.localStorage;

export default class InputName extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''}
        this.setPlayerName = this.setPlayerName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if(typeof(storage) !== undefined){
            this.setState({value:storage.getItem('name') !== null ? storage.getItem('name') : ''});
        }
    }

    setPlayerName(e){
        this.setState({value: e.target.value})
    }

    handleSubmit(){
        storage.setItem('name',this.state.value);
    }

    render(){
        return(
            <div className="container display-flex flex-justify-center flex-align-center">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-frame font-normal border-radius-4">
                        <label htmlFor="playerName">Por favor insira seu nome:</label>
                        <input name="playerName" type="text" maxLength="55" 
                            value={ this.state.value } onChange={this.setPlayerName}/>
                        <div className="form-footer">
                            <button type="submit" className="button border-radius-half font-black">
                                <i className="lni lni-checkmark-circle"></i> Salvar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}