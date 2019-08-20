import React from "react";
import Modal from "react-animated-modal";
import popupClose from '../../../assets/images/cross.svg';
import './style.scss';
export default class ModalPopup extends React.Component {

  render() {
    const { handleClose, content, title, showModal, htmlContent, externalClose } = this.props;

    return (
      <div>
        <Modal
          visible={showModal}
          closemodal={() => handleClose()}
          type="fadeInDown"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{title}</h5>

            </div>
            <div className="modal-body">
              {htmlContent ?
                <div className="notice" dangerouslySetInnerHTML={{ __html: content }}></div>
                :
                <div className="notice">
                  {content}
                </div>
              }

            </div>
          </div>
        </Modal>

      </div>
    );
  }
}
