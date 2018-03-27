const { Map } = require('immutable');
const stickyData = Map({ 'A': ['A'], 'B':['B'], 'C':['C'] })

export default function stickyNote(state = stickyData, action) {
     switch (action.type) {
		  case 'editStickyNote' : {
				let paper = action.paper;
				let result = state.set(paper,
					[...state.get(paper).slice(0, action.key), 
					action.data, 
					...state.get(paper).slice(action.key + 1)])
				return result;
		  }
				
				   
          case 'addStickyNote' : {
			let target = action.target;
				let result = state.set(target , [...state.get(target),'']);			
            	return result;
		  }
				
               
          default : return state 
     }
}