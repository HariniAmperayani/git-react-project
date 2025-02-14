import React, {useState} from 'react';

function AdditionUseState()
{
    console.log("The addition component is called");

    let [num3, setNum3] = useState('');
         
    function add()
    {
        var num1 = document.getElementById('textbox1').value;
        var num2 = document.getElementById('textbox2').value;
    
        console.log("The add button is clicked-update"); 
        
        num3 = parseInt(num1) + parseInt(num2);
        
        console.log(num3);

        setNum3(num3);
        
    };
    
    return(
        <>
        <div>
            <h3> Addition of two numbers using UseState</h3>

            <div>
                <input type='text' id='textbox1' placeholder= 'Enter the first number'/>
                <span> + </span>
                <input type='text' id='textbox2' placeholder= 'Enter the second number'/>
            </div>

            <button id='addbutton' onClick={add}> Add</button>

            <div>
                <input type='text' id='textbox3' placeholder='Result' value={num3}/>
            </div>
           
        </div>
        </>
    );
}

export default AdditionUseState;