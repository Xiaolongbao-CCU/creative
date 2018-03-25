import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import GameStartButton from './GameStartButton';
import Sticker from './Sticker';
import MemberListButton from './MemberListButton';
import FontAwesome from 'react-fontawesome';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import GrayArea from './GrayArea';
import OwlCarousel from 'react-owl-carousel';

// import jQuery from 'jquery'
class Game extends Component {
    state = {
        userID:'威君是房主<3',
        stickyArray:["123","5"],
        grayAreaHandle: 'none',
    }

    grayAreaHandler = () => {
        this.setState({ grayAreaHandle : this.state.grayAreaHandle === 'none' ? 'block' : 'none' });
    }

    render() {
        return (
            <Background>
                <Fixedtheme>
                    {/* 房間代號:{this.props.roomID}<br></br> */}
                    {/* 房主ID:{this.props.roomOwner}<br></br> */}
                    {/* debug用 */}
                    <GameStartButton isRoomOwnerOrNot={this.state.userID === this.props.roomOwner} grayAreaHandle={this.grayAreaHandler}></GameStartButton>
                    <Timer id='timer'></Timer>
                    <IdeaInput placeholder='請輸入主題<3'></IdeaInput>
                </Fixedtheme>

                <OwlCarousel
                    className="owl-theme"
                    loop={true}
                    center={true} 
                    items={1.2}
                    margin={10}
                    dots={false}
                    nav
                >
                    <div className="item">
                        <NoteArea>
                            <Sticker stickyArray={this.state.stickyArray}></Sticker>
                        </NoteArea>
                    </div>
                    <div className="item">
                        <NoteArea>
                        </NoteArea>                        
                    </div>
                    <div className="item">
                        <NoteArea>
                        </NoteArea>                        
                    </div>
                </OwlCarousel>

                {/* <NoteArea>
                    <Sticker stickyArray={this.state.stickyArray}></Sticker>
                </NoteArea> */}

                <NewNoteButton onClick={()=>{
                    this.props.dispatch({
                        type: 'addStickyNote'
                    })
                }}><FontAwesome
                        className='far fa-plus'
                        name='cross'
                        size='3x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                </NewNoteButton>
                <MemberListButton/>
                <GrayArea display={this.state.grayAreaHandle} >
                    <span>
                        統整想法
                        <br />
                        (10分鐘)
                    </span>
                </GrayArea>
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
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* max-width: 360px; */
    width: 100%;
    height: 640px; 
    /* debug用height */
    overflow-x: hidden;
    background: white;
    .owl-next {
        /* display: none; */
    }
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
    z-index: 1000;
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
    height: 450px;
    margin-top: 110px;
    /* debug */
    background: ${milkshop};
    color: white;
    overflow: scroll;
    border-radius: 2px;
`
const NewNoteButton = styled.button`
    position: fixed;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 10px;
    right: 10px;
    border: 0px solid #000;;
    border-radius: 100%;
    background: #fff;
    opacity: .92;
    color:palevioletred;
    padding: 0;
    padding-top: 3px;
`