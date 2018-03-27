import React,{Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import socket from './SocketEvent';

let interval;
const countDownTimer = (grayAreaHandle,Game,thisComponent)=> {
    var timer = document.getElementById('timer');
    timer.style.display = 'block';
    document.getElementById('startTimer').style.display = 'none';
    let countDownDate = new Date().getTime() + 10000 + 1000;
    timer.innerHTML = '0m 10s';
    // Update the count down every 1 second
    interval = setInterval(function() {
        // Get todays date and time
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        timer.innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text 
        if (distance <= 3000 && distance > 2000) {
            document.getElementById('timer').style.color = 'palevioletred';
            document.getElementById('timer').style.border = '1px solid palevioletred';     
        }

        if (distance <= 0) {
            timer.style.display='none';
            document.getElementById('startTimer').style.display = 'block';
            timer.style.color = '#587a30';                
            document.getElementById('timer').style.border = '1px solid #587a30';                             
        }
        if(distance <=0 && distance >-1000){
            grayAreaHandle();
        }
        if(distance <-2000 && distance >-3000){
            grayAreaHandle();
        }
        if(distance <-3000){
            clearInterval(interval);
            if (Game.refs.NoteA.parentNode.classList.contains('center')) {
                console.log(thisComponent.props.stickyArray.get('A'))
                socket.emit('sendStickyNote',{noteList:thisComponent.props.stickyArray.get('A')})
            }
            if (Game.refs.NoteB.parentNode.classList.contains('center')) {
                socket.emit('sendStickyNote',{noteList:thisComponent.props.stickyArray.get('B')})
            }
            if (Game.refs.NoteC.parentNode.classList.contains('center')) {
                socket.emit('sendStickyNote',{noteList:thisComponent.props.stickyArray.get('C')})
            }    
        }
    }, 950);
}


class GameStartButton extends Component{
    render(){
        if(this.props.isRoomOwnerOrNot){
            return <Button 
            id="startTimer" 
            onClick={
                    () => { countDownTimer(this.props.grayAreaHandle,this.props.Game,this)}
                }
            >
            {/* 你是房主，請按開始遊戲 */}
            開始遊戲
            </Button>
    
        } else {
            return <Button  
                disabled
                primary
            >
            {/* 你不是房主，請稍後，遊戲馬上開始 */}
            等待遊戲開始
            </Button>
        }
    }
}

const mapStateToProps = state => {
    return {
        stickyArray: state.stickyNote
    }
}
export default connect(mapStateToProps)(GameStartButton);

const Button = styled.button`
    height: 30px;
    width: 120px;
    margin: 10px 0;
    background-color : ${props => props.primary ? 'rgba(192,192,192,0.95)' : '#587a30'};
    color: white;
    border-radius: 5px;
    font-size: 16px;
    border: 0;
`