function MultiplicationReducer(state={mulReducer:''}, action)
  {
    
    let newMulState = {...state};
    
    if(action.type === 'xxx')
    newMulState.mulReducer = action.compMultiplication;
    console.log('The state in MultiplicationReducer is ', newMulState);
    
    return newMulState;
  }

export default MultiplicationReducer;