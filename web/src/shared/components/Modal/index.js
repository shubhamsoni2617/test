import React from 'react';
import PropTypes from 'prop-types';
// import Modal from 'react-animated-modal';
import './style.scss';
export default class ModalPopup extends React.Component {
  render() {
    const { handleClose, content, title, showModal, htmlContent } = this.props;
    if (showModal) {
      document.body.classList.add('fixed-body');
    }
    return (
      <div>
        {/* <Modal
          visible={showModal}
          closemodal={e => {
            document.body.classList.remove('fixed-body');
            handleClose(e);
          }}
          type="fadeInDown"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
            </div>
            <div className="modal-body">
              {htmlContent ? (
                <div
                  className="notice"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              ) : (
                <div className="notice">{content}</div>
              )}
              {this.props.children}
            </div>
          </div>
        </Modal> */}
      </div>
    );
  }
}

ModalPopup.propTypes = {
  content: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  htmlContent: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};
