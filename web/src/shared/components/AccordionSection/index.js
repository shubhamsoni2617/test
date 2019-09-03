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
      infoTag,
      openInfoPopup,
      showInfo
    } = this.props;
    // console.log(children, "sdfklnfklgnhklfgnh")
    // const  { showSection } = this.state;
    let content =
      "Please add to above price S$4 Booking Fee per ticket for tickets above S$40; S$3 Booking Fee per ticket for tickets between S$20.01 - S$40 and S$1 Booking Fee per ticket for tickets S$20 and below. Charges include GST where applicable.";
    let arr = ["title"];
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
                            className={`${activeLang == obj ? "active" : ""}`}
                          >
                            <a onClick={() => changeLang(obj)}>{obj}</a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {desc && <div dangerouslySetInnerHTML={{ __html: desc }} />}
                  {children &&
                    children.map(obj => (
                      <AccordionSection
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
