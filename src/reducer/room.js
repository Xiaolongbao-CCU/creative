const roomData = {
    roomID: '',
    roomOwner: '',
    userList:["sss",'666','77']
};

export default function room(state = roomData, action) {
    switch (action.type) {
        case 'roomID' : return Object.assign({},state,{
            roomID:action.data
        });
        case 'setRoomOwner' : return Object.assign({},state,{
            roomOwner:action.data
        });
        case 'newUser': return Object.assign({},state,{
            userList:[...state.userList,action.data]
        });
        default : return state 
    }
}
