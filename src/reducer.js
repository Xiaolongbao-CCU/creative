const roomID = "";

export default function reducer(state = roomID, action) {
    switch (action.type) {
        case 'roomID' : return action.data;
        default : return state 
    }
}