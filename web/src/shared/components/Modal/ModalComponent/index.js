import React, { memo, useState, useEffect } from 'react';
import './Modal.css';
import { CSSTransition } from 'react-transition-group';

const ModalBody = memo(({ type, animateBody, closemodal, children }) => {
  return (
    <CSSTransition
      in={animateBody}
      timeout={0}
      mountOnEnter
      unmountOnExit
      classNames={type !== undefined ? type : 'flipInX'}
    >
      {transitionState => {
        return (
          <div className="react-modal-body">
            <div
              className="react-modal-body-close"
              onClick={() => closemodal()}
            />
            {children}
          </div>
        );
      }}
    </CSSTransition>
  );
});

const ModalOverlay = memo(({ animateOverlay, closemodal }) => {
  return (
    <CSSTransition
      in={animateOverlay}
      timeout={0}
      classNames="animate-modal-overlay"
    >
      <div className="react-modal-overlay" onClick={() => closemodal()} />
    </CSSTransition>
  );
});

export default class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      animateOverlay: false,
      animateBody: false
    };
  }
  componentDidMount() {
    if (this.props.visible) {
      setTimeout(() => {
        this.setState({ animateOverlay: true }, () => {
          setTimeout(() => {
            this.setState({ animateBody: true });
          }, 1);
        });
      }, 1);
    } else {
      setTimeout(() => {
        this.setState({ animateOverlay: false }, () => {
          setTimeout(() => {
            this.setState({ animateBody: false });
          }, 1);
        });
      }, 1);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      setTimeout(() => {
        this.setState({ animateOverlay: true }, () => {
          setTimeout(() => {
            this.setState({ animateBody: true });
          }, 1);
        });
      }, 1);
    } else {
      setTimeout(() => {
        this.setState({ animateOverlay: false }, () => {
          setTimeout(() => {
            this.setState({ animateBody: false });
          }, 1);
        });
      }, 1);
    }
  }
  closemodal = () => {
    setTimeout(() => {
      this.setState({ animateBody: false }, () => {
        setTimeout(() => {
          this.setState({ animateOverlay: false }, () => {
            setTimeout(() => {
              this.props.closemodal();
            }, 0);
          });
        }, 0);
      });
    }, 1);
  };
  render() {
    let { animateOverlay, animateBody } = this.state;
    let { visible } = this.props;
    let type = undefined;
    if (this.props.type !== undefined) {
      type = this.props.type;
    }
    if (visible) {
      return (
        <React.Fragment>
          <div className="react-modal">
            <ModalOverlay
              animateOverlay={animateOverlay}
              closemodal={this.closemodal}
            />
            <ModalBody
              type={type}
              animateBody={animateBody}
              closemodal={this.closemodal}
            >
              {this.props.children}
            </ModalBody>
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}
