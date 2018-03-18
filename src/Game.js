import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import GameStartButton from './GameStartButton';
import Sticker from './Sticker';
import MemberListButton from './MemberListButton';
// import GrayArea from './GrayArea';

// import jQuery from 'jquery'
class Game extends Component {
    state = {
        userID:'威君是房主<3',
        stickyArray:["123","5"]
    }

    // grayAreaHandler = () => {
    //     document.getElementById("grayArea").style.display = 'block';
    //     setTimeout(() => {
    //         document.getElementById("grayArea").style.display = 'none';            
    //     }, 3000);
    // }

    render() {
        return (
            <Background>
                <Fixedtheme>
                    {/* 房間代號:{this.props.roomID}<br></br> */}
                    {/* 房主ID:{this.props.roomOwner}<br></br> */}
                    {/* debug用 */}
                    <GameStartButton isRoomOwnerOrNot={this.state.userID === this.props.roomOwner}></GameStartButton>
                    <Timer id='timer'></Timer>
                    <IdeaInput placeholder='請輸入主題<3'></IdeaInput>
                </Fixedtheme>
                <NoteArea>
                    <Sticker stickyArray={this.state.stickyArray}></Sticker>
                </NoteArea>
                <NewNoteButton onClick={()=>{
                    this.props.dispatch({
                        type: 'addStickyNote'
                    })
                    // this.grayAreaHandler();
                    // console.log(this);
                }}>+</NewNoteButton>
                <MemberListButton/>
                {/* <GrayArea id="grayArea"></GrayArea> */}
            </Background>
        );
    }
}
const mapStateToProps = state => {
    return {
        roomID: state.room.roomID,
        roomOwner: state.room.roomOwner,
    }
}
export default withRouter(connect(mapStateToProps)(Game));
//connect 連結到的是reducer裡面的state,如果有多個reducer則要指定reducer
//整包的store.reducerName.state中指定的property
//資料全部切到redux


const milkshop = '#587a30';
const Timer = styled.span`
    display:none;
    margin:10px;
    height:25px;
    font-size:20px;
    padding: 3px 25px 0px 25px;
    border-radius: 5px;
    border:1px solid ${milkshop};
`
const Background = styled.div`
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    max-width: 360px;
    height: 640px; 
    /* debug用height */
    overflow-x: hidden;
    background: ${milkshop};
`
const Fixedtheme = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;    
    background-color: #FFF;
    color: ${milkshop};
    text-align: center;
`
const IdeaInput = styled.input`
    width: 100%;
    height: 50px;
    color: palevioletred;
    background: rgba(192,192,192,0.3);
    border: 0px;
    text-align: center;
    font-size: 20px;    
`
const NoteArea = styled.div`
    width: 100%;
    height: 4000px;
    margin-top: 110px;
    /* debug */
    background: ${milkshop};
    color: white;
`
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
    font-size: 45px;
    color:palevioletred;
`
