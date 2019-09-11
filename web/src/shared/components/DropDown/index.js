import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = e => {
    e.preventDefault();
    if (!this.state.isOpen) {
      window.addEventListener('click', this.handleOutsideClick, false);
      this.node.classList.add('active');
    } else {
      window.removeEventListener('click', this.handleOutsideClick, false);
      this.node.classList.remove('active');
    }
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleOutsideClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.toggle(e);
  };
  render() {
    const { showElementsInHeader, byGenreEvent } = this.props;

    return (
      <li
        className="dropdown"
        ref={node => {
          this.node = node;
        }}
      >
        <a href="/" className="dropbtn" onClick={e => this.toggle(e)}>
          More
          <span className="dropdown-icon"></span>
        </a>
        <ul className="dropdown-content">
          {byGenreEvent &&
            byGenreEvent
              .slice(showElementsInHeader, byGenreEvent.length)
              .map(event => {
                return (
                  <li key={event.id}>
                    <Link to={`/events?c=${event.id}`}> {event.name}</Link>
                  </li>
                );
              })}
        </ul>
      </li>
    );
  }
}

export default DropDown;
