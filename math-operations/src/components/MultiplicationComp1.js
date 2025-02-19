import React from 'react';
import {connect} from 'react-redux';   

function MultiplicationComp1(props)
{
    console.log('The props in MultiplicationComp1 is ', props);

    function multiply()
    {
        
        alert('The button is clicked');

        var number = document.getElementById('textbox').value;
        var product;
        var multable = [];

        for (let i=1 ; i<=10 ; i++)
        {
            product = number * i ; 

            var template = (<><p>{number} * {i} = {product}</p></>);

            multable.push(template);
      
        }

      props.dispatch (
        {
            type : 'xxx',
            compMultiplication :multable
        }
      ); 
    }

    return(
        <>
            <h3>Multiplication Table via two components</h3>
            <input type='text' id='textbox' placeholder='Enter the number'/>
            <button id='mul' onClick = {multiply}>Submit</button>
        </>
    );
}
export default connect()(MultiplicationComp1);