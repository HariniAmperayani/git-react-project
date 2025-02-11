import React from 'react';
import AdditionComp2 from './AdditionComp2';

function AdditionComp1()
{

    let [c, setC] = React.useState('');

    alert(" The AdditionComp1 component is called");

    function add1()
    {
        var a = document.getElementById('box1').value;
        var b = document.getElementById('box2').value;  
        alert('The button is clicked')
        
        c = parseInt(a) + parseInt(b);
        alert('The sum is ' + c);

        setC(c);
    }

    return(
        <>
        <h3>Addition of two numbers via two components</h3>
        <div>
            <input text='textbox' id='box1' placeholder='Enter first number'/>
            <span> + </span>
            <input text='textbox' id='box2' placeholder='Enter second number'/>
        </div>

        <button id='add' onClick={add1}>Add</button>

        <AdditionComp2 c={c}/>

        </>
    );
}

export default AdditionComp1;