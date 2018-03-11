import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import GameStartButton from './GameStartButton';
import styled from 'styled-components';
// import jQuery from 'jquery'
class Game extends Component {
    state = {
        userID:'威君是房主<3',
        ifIdeaInputFix: ""
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
    render() {
        return (
            <Background>
                <Fixedtheme>
                    房間代號:{this.props.roomID}<br></br>
                    房主ID:{this.props.roomOwner}<br></br>
                    {/* debug用 */}
                    <GameStartButton isRoomOwnerOrNot={this.state.userID === this.props.roomOwner}></GameStartButton>
                    <div id='timer'></div>
                    <IdeaInput placeholder='請輸入主題<3：' ifIdeaInputFixed={this.state.ifIdeaInputFixed}></IdeaInput>
                </Fixedtheme>
                <NoteArea>
                    <br/>
                    <br />                    
                    我有滑喔
                    <br />
                    <br />
                    真的有滑喔
                </NoteArea>
                <NewNoteButton/>
            </Background>
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

const milkshop = '#587a30';
const Background = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    max-width: 360px;
    height: 5000px; 
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
    padding: 10px;    
    background-color: #FFF;
`
const IdeaInput = styled.input`
    width: 200px;
    color: palevioletred;
    border: 2px solid ${milkshop};
`
const NoteArea = styled.div`
    width: 100%;
    height: 4000px;
    margin-top: 120px;
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
    opacity: .9;
`