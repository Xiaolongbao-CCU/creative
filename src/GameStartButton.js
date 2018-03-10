import React from 'react';
import {connect} from 'react-redux';

const countDownTimer = ()=> {
    document.getElementById('startTimer').style.display = 'none';
    let countDownDate = new Date().getTime() + 3000 + 1000;

    // Update the count down every 1 second
    let x = setInterval(function() {
        // Get todays date and time
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML =minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text 
        if (distance <= 0) {
            clearInterval(x);
            document.getElementById("demo").style.display='none';
            document.getElementById('startTimer').style.display = 'block';             
        }
    }, 50);
}

const GameStartButton = ({isRoomOwnerOrNot}) => {
    if(isRoomOwnerOrNot){
        return <button 
        id="startTimer" 
        onClick={
            ()=>{countDownTimer()}
        }
    >
    你是房主，請按開始遊戲
    </button>

    } else {
        return <button 
            disabled
        >
        你不是房主，請稍後，遊戲馬上開始
        </button>
    } 
}

export default connect()(GameStartButton);