// import INITIAL_STATE from '../actions/index'
export   const INITIAL_STATE = {
  count:0
}
export  const reducer = function(state = INITIAL_STATE, action){
 switch(action.type) {
   case "IncreaseCounter":
     return Object.assign({}, state, { count: state.count + 1});
   case "DecreaseCounter":
     return Object.assign({}, state, { count: state.count - 1});

   default:
     return state;

 }
}
