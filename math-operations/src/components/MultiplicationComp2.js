import React from 'react';
import {connect} from 'react-redux';

function MultiplicationComp2(props)
{
    return(
        <>
        <div id='button'> Result </div>
        <div>{props.result}</div>
        </>
    );
   
}

function mapStateToProps(state)
{
    console.log('The state in MultiplicationComp2 is ', state);
    return{
        result : state.storeMul.mulReducer
    };
}

export default connect(mapStateToProps)(MultiplicationComp2);