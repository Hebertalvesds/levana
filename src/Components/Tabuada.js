import React, { Component } from 'react';

export default class Tabuada extends Component{

    constructor(){
        super();
        this.state = {
            updateAt: new Date()
        }
    }

    render(){
        let lista = Array();

        for(let i=1; i<=this.props.items;i++){
            lista.push(<tr key={i}>
                        <td>{this.props.fator}</td><td>{i}</td><td>{i * this.props.fator}</td>
                    </tr>);
        }

        return(
            <table className="tabuada">
                <thead>
                    <tr>
                        <th colSpan="3">Tabuada do {this.props.fator}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Multiplicando X</td>
                        <td>Multiplicador =</td>
                        <td>Produto</td>
                    </tr>
                    {lista}
                </tbody>
            </table>
        );
    }
}