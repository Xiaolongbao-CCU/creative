import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const countDownTimer = (grayAreaHandle)=> {
    var timer = document.getElementById('timer');
    timer.style.display = 'block';
    document.getElementById('startTimer').style.display = 'none';
    let countDownDate = new Date().getTime() + 10000 + 1000;
    timer.innerHTML = '0m 10s';
    // Update the count down every 1 second
    let x = setInterval(function() {
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
        if (distance <= 2000 && distance > 0) {
            grayAreaHandle();
        }
        if (distance <= 0) {
            clearInterval(x);
            timer.style.display='none';
            document.getElementById('startTimer').style.display = 'block';
            timer.style.color = '#587a30';                
            document.getElementById('timer').style.border = '1px solid #587a30';                               
        }
    }, 1000);
}

const GameStartButton = ({ isRoomOwnerOrNot, grayAreaHandle}) => {
    if(isRoomOwnerOrNot){
        return <Button 
        id="startTimer" 
        onClick={
            () => { countDownTimer(grayAreaHandle)}
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

export default connect()(GameStartButton);

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