
export const mapStateToProps = function(state){
  return state;
}

export const mapDispatchToProps = function(dispatch){
  return{
    Increase: function(){ return dispatch({type: "IncreaseCounter"})},
    Decrease: function(){ return dispatch({type: "DecreaseCounter"})}
  }
}
