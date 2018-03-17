import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pipe, identify } from 'lodash/fp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import GameStartButton from './GameStartButton';
import Sticker from './Sticker';

// import jQuery from 'jquery'
class Game extends Component {
  propTypes = {
    dispatch: PropTypes.func,
    roomID: PropTypes.string,
    roomOwner: PropTypes.string,
  }

  defaultProps = {
    dispatch: identify,
    roomID: '',
    roomOwner: '',
  }

  state = {
    userID: '威君是房主<3',
    ifIdeaInputFixed: false,
    stickyArray: ['123', '5'],
  }
  componentDidMount = () => {
    // window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
  }
  // handleScroll = () => {
  //     if (document.body.scrollTop > 83 || document.documentElement.scrollTop > 83) {
  //         this.setState({ ifIdeaInputFixed: "fixed"})
  //     } else {
  //         this.setState({ ifIdeaInputFixed: "static" })
  //     }
  // }
  addCard() {
    const { stickyArray } = this.state;
    this.setState({ stickyArray: [...stickyArray, ''] });
  }

  addStickyNote = () => {
    this.props.dispatch({ type: 'addStickyNote' });
    console.log(this); // eslint-disable-line
  }

  render() {
    const { addStickyNote } = this;
    const { roomID, roomOwner } = this.props;
    const { userID, ifIdeaInputFixed, stickyArray } = this.state;

    return (
      <Background>
        <FixedTheme>
          房間代號:{roomID}<br />
          房主ID:{roomOwner}<br />
          {/* debug用 */}
          <GameStartButton isRoomOwnerOrNot={userID === roomOwner} />
          <div id="timer" />
          <IdeaInput placeholder="請輸入主題<3：" ifIdeaInputFixed={ifIdeaInputFixed} />
        </FixedTheme>
        <NoteArea>
          <Sticker stickyArray={stickyArray} />
        </NoteArea>
        <NewNoteButton onClick={addStickyNote} />
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  roomID: state.roomID,
  roomOwner: state.roomOwner,
});

export default pipe(
  withRouter,
  connect(mapStateToProps),
)(Game);

// connect 連結到的是reducer裡面的state,如果有多個reducer則要指定reducer
// 整包的store.reducerName.state中指定的property
// 資料全部切到redux

const milkshop = '#587a30';
const Background = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  max-width: 360px;
  height: 640px; 
  /* debug用height */
  overflow-x: hidden;
  background: ${milkshop};
`;
const FixedTheme = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;    
  background-color: #FFF;
  color: ${milkshop};
  text-align: center;
  button {
      background: ${milkshop};
      color: white;
      border-radius: 5px;
  }
`;
const IdeaInput = styled.input`
  width: 200px;
  height: 20px;
  color: palevioletred;
  border: 2px solid ${milkshop};
`;
const NoteArea = styled.div`
  width: 100%;
  height: 4000px;
  margin-top: 120px;
  /* debug */
  background: ${milkshop};
  color: white;
`;
const NewNoteButton = styled.button`
  position: fixed;
  width: 50px;
  height: 50px;
  display: fixed;
  bottom: 10px;
  right: 10px;
  border: 0px solid #000;;
  border-radius: 100%;
  background: #fff;
  opacity: .92;
`;
