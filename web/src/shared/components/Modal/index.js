import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Modal from './ModalComponent';
import './style.scss';
function ModalPopup({
  handleClose,
  content,
  title,
  showModal,
  htmlContent,
  children
}) {
  console.log('modal');
  if (showModal && typeof window !== undefined) {
    document.body.classList.add('fixed-body');
  }
  return (
    <div>
      <Modal
        visible={showModal}
        closemodal={e => {
          if (typeof window !== undefined) {
            document.body.classList.remove('fixed-body');
          }
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
            {children}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default memo(ModalPopup);

ModalPopup.propTypes = {
  content: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  htmlContent: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};
