import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pipe, identify } from 'lodash/fp';
// import styled from 'styled-components';
import uuidv1 from 'uuid/v1';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Game from './Game';
import './App.css';

class App extends Component {
  propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
  }

  defaultProps = {
    dispatch: identify,
    history: {
      push: identify,
    },
  }

  state = {
    roomID: '',
  }

  onChange = ({ target: { value: roomID } }) => {
    this.setState({ roomID });
  }

  checkIfRoomIDExist(targetRoomID) {
    // 會有一個list給我們check
    // 如果沒有這個房間，就alert錯誤
    // 如果有就進入房間
    // alert('你是智障，請再看一次房號<3')
    this.props.dispatch({ type: 'roomID', data: targetRoomID });
    this.props.history.push('/Game');
  }

  createRoom = () => {
    this.setState({ roomID: uuidv1().substring(0, 6) }, () => {
      this.props.dispatch({ type: 'roomID', data: this.state.roomID });
      this.props.dispatch({ type: 'setRoomOwner', data: '威君是房主<3' });
      // 按下創建房間的人，為房主，isRoomOwner = true
      // 先給假值，等後端決定再思考如何辨別不同使用者
      // 預期用socket ID
      this.props.history.push('/Game');
    });
  }

  enterRoom = ({ keyCode }) => {
    if (keyCode === 13) {
      const response = window.confirm('想進來嗎ㄇ？');// eslint-disable-line
      if (response === true) {
        // 要確認房間存在 之後做
        this.props.dispatch({ type: 'roomID', data: this.state.roomID });
        this.props.history.push('/Game');
      }
    }
  }

  render() {
    const { createRoom, enterRoom, onChange } = this;
    const { roomID } = this.state;
    const game = window.location.pathname === 'Game' ? <Game roomID={this.state.roomID} /> : undefined;
    return (
      <div>
        <HeaderBg />
        <FooterBg>
          <button onClick={createRoom}>創建房間(直接進入房間)</button>
          <br />
          <input
            onChange={onChange}
            onKeyDown={enterRoom}
            value={roomID}
            placeholder="請輸入房號<3"
          />
          <br />
          {/*
            <button onClick={() => {
              this.checkIfRoomIDExist(this.state.roomID)
            }}>進入房間(需要輸入房號)</button>
          */}
          {game}
          {/* 應該在Game裡面做狀態控制 */}
        </FooterBg>
      </div>
    );
  }
}

export default pipe(
  withRouter,
  connect(),
)(App);

const HeaderBg = styled.div`
  width: 100%;
  height: 320px;
`;
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
`;
