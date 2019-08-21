import React, { Component, Fragment } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      second: 0,
      expired: ""
    }
  }

  componentDidMount() {
    this.mount = true;
    const { endDate,promotionExpired } = this.props;
    var countDownDate = new Date(endDate).getTime();
    var x = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (this.mount) {
        this.setState({
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        });
      }

      if (distance < 0) {
        clearInterval(x);
        if (this.mount) {
          promotionExpired("EXPIRED");
          this.setState({
            expired: "EXPIRED"
          });
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render() {
    const { days, hours, minutes, seconds, expired } = this.state;
    return (
      <Fragment>
        {expired === "EXPIRED" ? expired :
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
        }
      </Fragment>
    )
  }
}
export default Timer;
