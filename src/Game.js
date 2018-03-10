import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import GameStartButton from './GameStartButton';

class Game extends Component {
    state ={
        userID:'威君是房主<3'
    }

    
    render() {
        return (
            <div>
                房間代號:{this.props.roomID}<br></br>
                房主ID:{this.props.roomOwner}<br></br>
                <GameStartButton isRoomOwnerOrNot={this.state.userID === this.props.roomOwner}></GameStartButton>
                <div id="demo"></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        roomID: state.roomID,
        roomOwner: state.roomOwner
    }
}
export default withRouter(connect(mapStateToProps)(Game));
//connect 連結到的是reducer裡面的state,如果有多個reducer則要指定reducer
//整包的store.reducerName.state中指定的property