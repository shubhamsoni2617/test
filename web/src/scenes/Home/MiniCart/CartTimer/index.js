import React, { Component } from 'react';

const secondsToTime = secs => {
  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);
  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    m: minutes,
    s: seconds
  };
  console.log(obj);
  return obj;
};

export default class CartTimer extends Component {
  state = {
    minutes: secondsToTime(this.props.timeLeft).m,
    seconds: secondsToTime(this.props.timeLeft).s
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <>
        {minutes === 0 && seconds === 0 ? (
          <span className="timer-time">00:00</span>
        ) : (
          <span className="timer-time">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
        )}
      </>
    );
  }
}
