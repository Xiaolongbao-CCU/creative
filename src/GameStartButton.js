import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const countDownTimer = () => {
  document.getElementById('timer').style.display = 'block';
  document.getElementById('startTimer').style.display = 'none';
  const countDownDate = new Date().getTime() + 3000 + 1000;

  // Update the count down every 1 second
  const x = setInterval(() => {
    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now an the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById('timer').innerHTML = `${minutes}m ${seconds}s `;

    // If the count down is finished, write some text
    if (distance <= 0) {
      clearInterval(x);
      document.getElementById('timer').style.display = 'none';
      document.getElementById('startTimer').style.display = 'block';
    }
  }, 50);
};

const GameStartButton = ({ isRoomOwnerOrNot }) => {
  if (isRoomOwnerOrNot) {
    return (<button
      id="startTimer"
      onClick={
    () => { countDownTimer(); }
    }
    >
      {/* 你是房主，請按開始遊戲 */}
    開始遊戲
            </button>);
  }
  return (<button
    disabled
  >
    {/* 你不是房主，請稍後，遊戲馬上開始 */}
開始遊戲
          </button>);
};

GameStartButton.propTypes = {
  isRoomOwnerOrNot: PropTypes.bool,
};

GameStartButton.defaultProps = {
  isRoomOwnerOrNot: false,
};

export default connect()(GameStartButton);
