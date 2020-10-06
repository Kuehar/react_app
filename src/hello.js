import React,{ Component } from 'react';

/* This class extends Component in react package using class.
class Hello extends Component{
    render(){
        return <div>Hello World!!</div>;
    }
}

export default Hello;

*/

/* function based

import React from 'react';

const Hello = () =>{
    return <p>Hello World!!</p>;
};

export default Hello;

*/

const Hello = (props) =>{
    return <p>Hello My name is (props.name).</p>;
};

// <p>Hello, my name is Taro.</p>
<Hello name = "Taro" />


