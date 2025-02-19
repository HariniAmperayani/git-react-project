import React from 'react';

function AdditionChild(props)
{
    alert(" The Child component is called");
    return(
        <>
        <div>
            <input type='text' id='box3' placeholder='Result' value={props.c}/>
        </div>
         
        </>
    );
}
export default AdditionChild;