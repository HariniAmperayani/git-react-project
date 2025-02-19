import React from 'react';
import AdditionChild from './AdditionChild';

function AdditionParent()
{

    let [c, setC] = React.useState('');

    alert(" The Parent component is called");

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
        <h3>Addition of two numbers using props</h3>
        <div>
            <input text='textbox' id='box1' placeholder='Enter first number'/>
            <span> + </span>
            <input text='textbox' id='box2' placeholder='Enter second number'/>
        </div>

        <button id='add' onClick={add1}>Add</button>

        <AdditionChild c={c}/>

        </>
    );
}

export default AdditionParent;