import React, { Component } from 'react';
import './App.css';
import uuidv1 from 'uuid/v1';
import Game from './Game';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import styled from 'styled-components';

// import styled from 'styled-components';
class App extends Component {
  state = {
    roomID: "",
  }
  checkIfRoomIDExist(targetRoomID) {
    //會有一個list給我們check
    //如果沒有這個房間，就alert錯誤
    //如果有就進入房間
    //alert('你是智障，請再看一次房號<3')
    this.props.dispatch({ type: 'roomID', data: targetRoomID });
    this.props.history.push("/Game")
  }
  render() {
    return (
      <div>
        <HeaderBg>
        </HeaderBg>
        <FooterBg>
          <button onClick={() => {
            let uuid = uuidv1().substring(0, 6)
            this.setState({ roomID: uuid }, () => {
              this.props.dispatch({ type: 'roomID', data: this.state.roomID });
              this.props.dispatch({ type: 'setRoomOwner', data: '威君是房主<3' })
              //按下創建房間的人，為房主，isRoomOwner = true
              //先給假值，等後端決定再思考如何辨別不同使用者
              //預期用socket ID
              socket.emit('joinRoom',{roomName:uuid});
              this.props.history.push("/Game")
            });
          }}>創建房間(直接進入房間)</button>
          <br></br>
          <input onChange={(e) => { this.setState({ roomID: e.target.value }) }} onKeyDown={(e) => {
            if (e.keyCode === 13) {
              let response = window.confirm("想進來嗎ㄇ？");
              if (response === true) {
                //要確認房間存在 之後做
                this.props.dispatch({ type: 'roomID', data: this.state.roomID });
                this.props.history.push("/Game")
              }
            }
          }} value={this.state.roomID} placeholder="請輸入房號<3" />
          <br></br>
          {/* <button onClick={() => { 
          this.checkIfRoomIDExist(this.state.roomID)
        }}>進入房間(需要輸入房號)</button> */}

          {window.location.pathname === "Game" ? <Game roomID={this.state.roomID} /> : null}
          {/* 應該在Game裡面做狀態控制 */}
        </FooterBg>

      </div>
    );
  }
}

export default withRouter(connect()(App));

const HeaderBg = styled.div`
  width: 100%;
  height: 320px;
`
const FooterBg = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  
  button,input {
    width: 50%;
    height: 40px;   
    padding: 0px; 
    border: 1.4px solid #aaa;
    border-radius: 5px;
    background-color: #fff;
    color: gray;
    font-size: 12px;
    text-align: center;
  }
  input {
    height: 37px;
  }
`