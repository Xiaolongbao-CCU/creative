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
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if (document.body.scrollTop > 83 || document.documentElement.scrollTop > 83) {
            this.setState({ ifIdeaInputFixed: "fixed"})
        } else {
            this.setState({ ifIdeaInputFixed: "static" })            
        }
    }
    render() {
        return (
            <Background>
                房間代號:{this.props.roomID}<br></br>
                房主ID:{this.props.roomOwner}<br></br>
                <GameStartButton isRoomOwnerOrNot={this.state.userID === this.props.roomOwner}></GameStartButton>
                <div id= 'demo'></div>
                <IdeaInput placeholder='三分鐘給你想計時開始<3：' ifIdeaInputFixed={this.state.ifIdeaInputFixed}></IdeaInput>
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
const Background = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    max-width: 360px;
    height: 5000px; 
    /* debug用height */
    overflow-x: hidden;
    background-color: white;
    border: 1px solid #000;
`
const IdeaInput = styled.input`
    width: 300px;
    color: palevioletred;
    border: 2px solid palevioletred;
    position: ${props => props.ifIdeaInputFixed};
`