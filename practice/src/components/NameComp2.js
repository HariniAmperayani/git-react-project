import React from 'react';
import {connect} from 'react-redux';

function NameComp2(props)
{

    console.log(" The Comp2 component is called");
    console.log("Props from comp2", props);

    return (
        <>
        <div>
             <input type='text' id='textbox2' placeholder='Names' value={props.numDisplay}/>
        </div>
        </>
    );
}

function mapStateToProps(state)
{
    
    console.log("The value in state is comp2", state);
    
    return {
        
        numDisplay : state.storeNum.redNum
    };
}

export default connect(mapStateToProps)(NameComp2);