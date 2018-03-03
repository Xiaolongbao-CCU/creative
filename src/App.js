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
  render() {
    return (
      <div>
        <button onClick={() => { 
          this.setState({ roomID: uuidv1().substring(0, 6) }, () => { 
            this.props.dispatch({type: 'roomID', data: this.state.roomID});
            this.props.history.push("/Game")
          });
         }}>創建房間</button> 

        <input onChange={(e)=> { this.setState({roomID: e.target.value})}} value={this.state.roomID}/>
        <button onClick={() => { this.props.history.push("/Game")}}>進入房間</button>
        
        {window.location.pathname === "Game" ? <Game roomID = {this.state.roomID}/> : null}
        {/* 應該在Game裡面做狀態控制 */}
      </div>
    );
  }
}

export default withRouter(connect()(App));
