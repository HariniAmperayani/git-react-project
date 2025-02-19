import React, {useEffect} from 'react';

function AdditionUseEffect()
{
    console.log("The addition component is called");

    let num1 = 0, num2 = 0, num3 = 0;

    useEffect(()=>{

        
        console.log("This is from useEffect", num3);

    },[num1,num2,num3]) ;
    
    function add()
    {
         num1 = document.getElementById('textbox1').value;
         num2 = document.getElementById('textbox2').value;
    
        console.log("The add button is clicked"); 
        
        num3 = parseInt(num1) + parseInt(num2);
        
        console.log(num3);

        
    };
    
    return(
        <>
        <div>
            <h3> Addition of two numbers</h3>

            <div>
                <input type='text' id='textbox1' placeholder= 'Enter the first number'/>
                <span> + </span>
                <input type='text' id='textbox2' placeholder= 'Enter the second number'/>
            </div>

            <button id='button2' onClick={add}> Add</button>

            <div>
                <input type='text' id='textbox3' placeholder='Result' value={num3}/>
            </div>
        </div>
        </>
    );
}

export default AdditionUseEffect;