const stickyData = [];
 
export default function stickyNote(state = stickyData, action) {
     switch (action.type) {
          case 'editStickyNote' : 
               return [...state.slice(0, action.key), 
                action.data, 
                ...state.slice(action.key + 1)]
          
          case 'addStickyNote' :
               return [...state,""];
               
          default : return state 
     }
}