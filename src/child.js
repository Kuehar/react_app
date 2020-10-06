import React from 'react';

function Children1(){
    return <p>1:Hello World!!</p>;
}

const Children2 = () =>{
    return <p>2:Hello World!!</p>;
}

const Children3 = () => <p>3:Hello World!!</p>;

const Hello = () => {
    return (
        <div>
            <Children1 />
            <Children2 />
            <Children3 />
        </div>
    );
};

export default Hello;