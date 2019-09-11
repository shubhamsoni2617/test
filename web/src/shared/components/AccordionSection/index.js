import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./style.scss";
import InfoPopup from "../InfoPoup";
import infoIcon from "../../../assets/images/info-icon.svg";

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
      infoTag
    } = this.props;

    return (
      <div className="sidebar-accordion">
        <Accordion allowZeroExpanded={true} preExpanded={preExpanded}>
          <AccordionItem uuid={uuid}>
            <AccordionItemHeading>
              <AccordionItemButton>
                {title}
                {infoTag && (
                  <div>
                    <span>(Excludes Booking Fee)</span>
                    <span className="price-info-icon">
                      <img src={infoIcon} alt="Info Icon" />
                      <InfoPopup content={infoTag} />
                    </span>
                  </div>
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div>
                {langArr && (
                  <ul className="languages-group">
                    {langArr.map((obj, idx) => {
                      return (
                        <li
                          key={obj + idx}
                          className={`${activeLang === obj ? "active" : ""}`}
                        >
                          <a
                            href="/"
                            onClick={e => {
                              e.preventDefault();
                              changeLang(obj);
                            }}
                          >
                            {obj}
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
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}
