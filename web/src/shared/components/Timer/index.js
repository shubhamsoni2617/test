import React, { Component, Fragment } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      second: 0,
      expired: ''
    };
  }

  componentDidMount() {
    this.mount = true;
    const { endDate, promotionExpired } = this.props;
    // let countDownDate = new Date(endDate).getTime();
    let countDownDate = this.convertDateForIos(endDate);
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (this.mount) {
        this.setState({
          days: this.appendZero(days.toString()),
          hours: this.appendZero(hours.toString()),
          minutes: this.appendZero(minutes.toString()),
          seconds: this.appendZero(seconds.toString())
        });
      }

      if (distance < 0) {
        if (this.mount) {
          clearInterval(x);
          promotionExpired('EXPIRED');
          this.setState({ expired: 'EXPIRED' });
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.mount = false;
  }

  convertDateForIos = date => {
    var arr = date.split(/[- :]/);
    date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
    return date;
  };
  appendZero = digit => {
    let appendZero;
    if (digit && digit.length < 2) {
      appendZero = '0' + digit;
      return appendZero;
    } else {
      return digit;
    }
  };

  render() {
    const { days, hours, minutes, seconds, expired } = this.state;
    return (
      <Fragment>
        {expired === 'EXPIRED' ? null : (
          <Fragment>
            <li className="timer-days">
              <span>{days}</span>
              <span className="timer-label">Days</span>
            </li>
            <li className="timer-hours">
              <span>{hours}</span>
              <span className="timer-label">Hrs</span>
            </li>
            <li className="timer-minutes">
              <span>{minutes}</span>
              <span className="timer-label">Mins</span>
            </li>
            <li className="timer-seconds">
              <span>{seconds}</span>
              <span className="timer-label">Sec</span>
            </li>
          </Fragment>
        )}
      </Fragment>
    );
  }
}
export default Timer;
