import React from 'react';

function CompTwo(props)
{

    var number = 0;
    number = number +1;
    console.log(number);
    return(
        <>
        <input type = "text" value = {props.number}/>
        </>
    );
}
export default CompTwo;