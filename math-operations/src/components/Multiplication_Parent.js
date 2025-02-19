import React from 'react';
import { useState } from 'react';
import MultiplicationChild from './Multiplication_Child';

function MultiplicationParent()
{

    let [display, setDisplay] = useState([]);

    function multiply()
    {
    
        var number = document.getElementById('textbox').value;
        var product;
        var multable = [];

        for(let i=1 ; i < 11 ; i++)
        {
            product = number * i;   
            var template = (<><p>{number} * {i} = {product}</p></>);
            multable.push(template);

        }
            
        setDisplay(multable);

    }

return(
    <>
    <div>
        <h3>Multiplication Table with props</h3>

        <input type = 'text' id ='textbox' placeholder ='Enter the number'/>
        <button id ='multiply' onClick = {multiply} >Submit</button>

        <MultiplicationChild display={display}/>
        
    </div>
    </>
    );

}

export default MultiplicationParent;
