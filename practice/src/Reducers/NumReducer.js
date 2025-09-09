function NumReducer(state = {redNum : 'xxx'}, action)
{
    console.log('The action in Reducer is ', action);

    let newState = {...state};

    if(action.type==='test')
    newState.redNum = action.compNum;
    console.log('The state in Reducer is ', newState);
    return newState;
}

export default NumReducer;