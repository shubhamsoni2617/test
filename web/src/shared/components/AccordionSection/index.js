import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './style.scss';
import InfoPopup from '../InfoPoup';
import infoIcon from '../../../assets/images/info-icon.svg';
import Utilities from '../../utilities';
import Image from '../Image';
import ReactPlayer from 'react-player';

export default class AccordionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSection: false,
      showInfo: false
    };
  }

  toggleSection = () => {
    if (this.state.showSection) {
      this.setState({ showSection: false });
    } else {
      this.setState({ showSection: true });
    }
  };

  render() {
    const {
      children,
      title,
      desc,
      activeLang,
      langArr,
      changeLang,
      uuid,
      preExpanded,
      infoTag,
      gallery,
      dynamicClass
    } = this.props;

    return (
      <div className={`sidebar-accordion ${dynamicClass}`}>
        <Accordion allowZeroExpanded={true} preExpanded={preExpanded}>
          <AccordionItem uuid={uuid}>
            <AccordionItemHeading>
              <AccordionItemButton>
                {title}
                {infoTag && (
                  <div>
                    <span>(Excludes Booking Fee)</span>
                  </div>
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            {infoTag && (
              <div>
                <span
                  className="price-info-icon"
                  onClick={() =>
                    this.setState({
                      showInfo: !this.state.showInfo
                    })
                  }
                >
                  <img src={infoIcon} alt="Info Icon" />
                  {Utilities.mobileAndTabletcheck() ? (
                    this.state.showInfo && <InfoPopup content={infoTag} />
                  ) : (
                    <InfoPopup content={infoTag} />
                  )}
                </span>
              </div>
            )}
            <AccordionItemPanel>
              <div>
                {langArr && (
                  <ul className="languages-group">
                    {langArr.map((obj, idx) => {
                      return (
                        <li
                          key={obj + idx}
                          className={`${
                            activeLang === obj.language ? 'active' : ''
                          }`}
                        >
                          <a
                            href="/"
                            onClick={e => {
                              e.preventDefault();
                              changeLang(obj);
                            }}
                          >
                            {obj.language}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {desc && <div dangerouslySetInnerHTML={{ __html: desc }} />}
                {children &&
                  children.map(obj => (
                    <AccordionSection
                      key={obj.title}
                      title={obj.title}
                      desc={obj.description}
                    />
                  ))}

                {gallery &&
                  gallery.map(obj => {
                    if (obj.type.name === 'Image') {
                      return (
                        <Image
                          key={obj.id}
                          src={obj.thumb_image}
                          largeImage={obj.full_image}
                        />
                      );
                    }

                    return (
                      <ReactPlayer
                        key={obj.id}
                        width="100%"
                        height="400px"
                        controls
                        muted={true}
                        url={obj.video_url}
                        volume={0.5}
                      />
                    );
                  })}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

AccordionSection.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string.isRequired,
  desc: PropTypes.node,
  activeLang: PropTypes.string,
  langArr: PropTypes.array,
  changeLang: PropTypes.func,
  uuid: PropTypes.string,
  preExpanded: PropTypes.array,
  infoTag: PropTypes.string
};
