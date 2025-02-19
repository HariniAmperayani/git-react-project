import React from 'react';
import {connect} from 'react-redux';

function AdditionComp1(props)
{

    console.log(" The comp1 props are", props);

    function sum()
    {
        var num1 = document.getElementById('textbox1').value;
        var num2 = document.getElementById('textbox2').value;  
        alert('The button is clicked')
        
        var num3 = parseInt(num1) + parseInt(num2);
        alert('The sum is ' + num3);

        props.dispatch({type :'test', compSum : num3});
    }

    return(
        <>
        <h3>Addition of two numbers via two components</h3>
        <div>
            <input text='text' id='textbox1' placeholder='Enter first number'/>
            <span> + </span>
            <input text='text' id='textbox2' placeholder='Enter second number'/>
        </div>

        <button id='add' onClick={sum}>Add</button>
        </>
    );
}

export default connect()(AdditionComp1);