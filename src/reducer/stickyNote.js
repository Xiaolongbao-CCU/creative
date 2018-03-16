const stickyData = [];
 
export default function stickyNote(state = stickyData, action) {
     switch (action.type) {
          case 'editStickyNote' : 
               return state.map( (item, index) => {
                    if(index !== action.key) {
                         // This isn't the item we care about - keep it as-is
                         return item;
                    }else{
                         return action.data;
                    }
                    // Otherwise, this is the one we want - return an updated value
               });
          
          case 'addStickyNote' :
               return [...state,""];
               
          default : return state 
     }
}