import React, { Component } from 'react';

class Switch extends Component{
    constructor(){
        super();
        this.state = {
            name:'Taro',
            data: {
                height:170,
                weight:65
            }
        };
    }
    render(){
        return(
            <div>
                <h1>{ this.state.name }</h1>            
            <dl>
                <dt>Height</dt>
                <dd>{this.state.data.height}</dd>
                <dl>Weight</dl>
                <dd>{this.state.data.weight}</dd>
            </dl>
            </div>
        );
    }
}