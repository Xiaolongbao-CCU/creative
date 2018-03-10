import React, { Component } from 'react';
import './App.css';
import uuidv1 from 'uuid/v1';
import Game from './Game';
import {withRouter} from 'react-router';
import {connect} from 'react-redux'

class App extends Component {
  state = {
    roomID : "",
  }
  checkIfRoomIDExist(targetRoomID){
    //會有一個list給我們check
    //如果沒有這個房間，就alert錯誤
    //如果有就進入房間
    //alert('你是智障，請再看一次房號<3')
    this.props.dispatch({type: 'roomID', data: targetRoomID});
    this.props.history.push("/Game")
  }
  render() {
    return (
      <div>
        <button onClick={() => { 
          this.setState({ roomID: uuidv1().substring(0, 6) }, () => { 
              this.props.dispatch({type: 'roomID', data: this.state.roomID});
              this.props.dispatch({type: 'setRoomOwner', data: '威君是房主<3'}) 
              //按下創建房間的人，為房主，isRoomOwner = true
              //先給假值，等後端決定再思考如何辨別不同使用者
              //預期用socket ID
              this.props.history.push("/Game")
            });
          }}>創建房間(直接進入房間)</button> 
        <br></br>
        <input onChange={(e)=> { this.setState({roomID: e.target.value})}} value={this.state.roomID}/>
        <br></br>
        <button onClick={() => { 
          this.checkIfRoomIDExist(this.state.roomID)
        }}>進入房間(需要輸入房號)</button>
        
        {window.location.pathname === "Game" ? <Game roomID = {this.state.roomID}/> : null}
        {/* 應該在Game裡面做狀態控制 */}
      </div>
    );
  }
}

export default withRouter(connect()(App));
