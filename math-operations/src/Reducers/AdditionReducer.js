function AdditionReducer(state={redSum:''}, action)
{
  
  console.log('The action in Reducer is ', action);
  let newState = {...state};

  if (action.type === 'test')
    newState.redSum = action.compSum;
    console.log('The state in Reducer is ', newState);
    return newState;

}

export default AdditionReducer;