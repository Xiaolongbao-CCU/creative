const roomData = {
    roomID: '',
    roomOwner: ''
};

export default function room(state = roomData, action) {
    switch (action.type) {
        case 'roomID' : return Object.assign({},state,{
            roomID:action.data
        });
        case 'setRoomOwner' : return Object.assign({},state,{
            roomOwner:action.data
        });
        default : return state 
    }
}
