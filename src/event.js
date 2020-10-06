import React,{ Component } from 'react';

class Button extends Component{
    constructor(){
        super();
    }

    handleClick(){
        alert('button click!!');
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Button</button>
            </div>
        )
    }
}

/*
<button onClick={() => alert('button click!')}>BUTTON</button>
*/