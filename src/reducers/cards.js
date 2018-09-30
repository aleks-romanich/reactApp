

const initialState = []

export default function cards( state = initialState, action = {}){

    if (action.type === 'FETCH_CARDS_SUCCESS'){
          return action.payload
     } else if (action.type === 'ADD_TEXT'){
           const updatedItems = state.map(item => {
             if(item.id === action.payload.id){
               return { ...item, ...action.payload }
             }
             return item
         })
         return updatedItems
     }
     return state;
}
