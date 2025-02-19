import React from 'react';

function MultiplicationChild(props)
{
    return(
        <>
        <div>Result</div>
        <div id='result'> {props.display} </div>
        </>
    );
}

export default MultiplicationChild;

