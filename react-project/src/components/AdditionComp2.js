import React from 'react';
import {connect} from 'react-redux';

function AdditionComp2(props)
{
    console.log(" The Comp2 component is called");
    console.log("Props from comp2", props);

    return(
        <>
        <div>
            <input type='text' id='textbox3' placeholder='Result' value={props.total}/>
        </div>
         
        </>
    );
}

function mapStateToProps(state)
{
    console.log("The value in state is comp2", state);
    return {
        total: state.storeSum.redSum
    };
}

export default connect(mapStateToProps)(AdditionComp2);