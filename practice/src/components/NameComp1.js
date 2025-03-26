import React from 'react';
import {connect} from 'react-redux';

function NameComp1(props)
{
    
    console.log(" The Comp1 component is called");
    
    function Name()

        {
                var n = document.getElementById('textbox').value;

                alert('OnClick function is called');

                alert('The name is ' + n);

                props.dispatch({type: 'test', compNum : n});
        }
    
    return(
        <>
        <h3>Practice - Store</h3>
        <div><input type='text' id='textbox' placeholder='Enter your name'/></div>

        <button id='button' onClick={Name}>Add</button>
        </>
    );
}

export default connect()(NameComp1);