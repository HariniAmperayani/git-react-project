import React, { useState } from 'react';

function CompOne()
{
console.log("compone called")
    
    // let inc = 0;
    const [inc,setInc] = useState(0);
    
    function funinc()
    {
        console.log('Button clicked');  
        setInc( inc + 1);
         console.log(inc);
         

    }
     
    return(
    <>
        {console.log("This is in html")}
        <div> <label for Count id='count'> No.of clicks </label>
        <button onClick={funinc} id='button'>Increment</button>
        <input id='textbox' type= 'text' value = {inc}/>
        </div>

    </>
        
    );

}
export default CompOne;