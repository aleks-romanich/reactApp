

const initialState = false

export default function popup( state = initialState, action){

     if (action.type === 'POPUP'){
          return action.payload
     }
     
     return state;
}
