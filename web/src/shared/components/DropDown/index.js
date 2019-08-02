import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        if (!this.state.isOpen) {
            window.addEventListener('click', this.handleOutsideClick, false);
        } else {
            window.removeEventListener('click', this.handleOutsideClick, false);
        }
        this.setState({ isOpen: !this.state.isOpen })
    }

    handleOutsideClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.toggle();
    }
    render() {

        const { showElementsInHeader, byGenreEvent } = this.props;
        const { isOpen } = this.state;

        return (
            <li className="dropdown">
                <a className="dropbtn" onClick={this.toggle} ref={node => { this.node = node; }}>More
                    <span class="dropdown-icon">
                    </span>
                </a>
                <ul className="dropdown-content" style={{ display: isOpen ? "block" : "none" }}>
                    {byGenreEvent && byGenreEvent.slice(showElementsInHeader, byGenreEvent.length).map((event, index) => {
                        return (
                            <li key={event.id}>
                                <Link to={ `/events/search?id=${event.id}`}> {event.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </li>
        );
    }
}

export default DropDown;