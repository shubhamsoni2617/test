import React, { Component } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './style.scss';

export default class AccordionSection extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { children, title, desc, activeLang, langArr, changeLang, uuid, preExpanded } = this.props;
        console.log(children, "sdfklnfklgnhklfgnh")
        let arr = ['title']
        return (
            <div>
                <Accordion allowZeroExpanded={true} preExpanded={preExpanded}>
                    <AccordionItem uuid={uuid}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {title}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div>
                                {langArr && <ul className="languages-group">
                                    {langArr.map((obj, idx) => {
                                        return <li className={`${activeLang == obj ? 'active' : ''}`}><a onClick={()=>changeLang(obj)}>{obj}</a></li>
                                    })}
                                </ul>
                                }
                                {desc &&
                                    <div dangerouslySetInnerHTML={{ __html: desc }}></div>
                                }
                                {children && children.map(obj =>
                                    <AccordionSection />
                                )}
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        );
    }
}

