import React, { Component } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './style.scss';



export default class AccordionSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showInfo: false
        }
    }



    render() {
        const { children, title, desc, activeLang, langArr, changeLang, uuid, preExpanded, infoTag ,openInfoPopup} = this.props;
        console.log(children, "sdfklnfklgnhklfgnh")
        let arr = ['title']
        return (
            <div>
                <Accordion allowZeroExpanded={true} preExpanded={preExpanded}>
                    <AccordionItem uuid={uuid}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {title}
                                {infoTag && <div><span>(Excludes Booking Fee)</span><span onClick={(event) => openInfoPopup(event)}>(i)</span></div>}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div>
                                {langArr && <ul className="languages-group">
                                    {langArr.map((obj, idx) => {
                                        return <li className={`${activeLang == obj ? 'active' : ''}`}><a onClick={() => changeLang(obj)}>{obj}</a></li>
                                    })}
                                </ul>
                                }
                                {desc &&
                                    <div dangerouslySetInnerHTML={{ __html: desc }}></div>
                                }
                                {children && children.map(obj =>
                                    <AccordionSection title={obj.title} desc={obj.description}/>
                                )}
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        );
    }
}

