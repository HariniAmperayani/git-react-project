import React from 'react';
import {useState} from 'react';

function MultiplicationUseState()
{

    let [display, setDisplay] = useState([]);

    function multiply()
    {
        alert('The button is clicked');
        var number = document.getElementById('textbox').value;

        var multable = [];

        for(let i=1; i<=10; i++)
        {
            var product = number * i;
            //var result = (number + '*' + i +'='+ product);

            multable.push(returnProductHtml(number, i, product));

            setDisplay(multable);

            // document.getElementById('result').innerHTML = multable.join('<br/>');
                       
        }

    }

    function returnProductHtml(num, i1,prod){
        return <>
        <p>{num} * {i1} = {prod}</p>
        </>;
    }

    return(
        <>
        <div>
            <h3>Multiplication Table with UseState</h3>
            <input type = 'text' id ='textbox' placeholder ='Enter the number'/>
            <button id ='multiply' onClick = {multiply} >Submit</button>
            <div>Result</div>
            <div id='result'> {display} </div>

        </div>
        </>
    );
}
export default MultiplicationUseState;