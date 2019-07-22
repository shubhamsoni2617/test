import React, { Component } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './style.scss';

export default class AccordionSection extends Component {
  
  constructor(props){
    super(props);
    
  }

  componentDidMount () {
    
  } 

  render() {
    const { children } = this.props;
    console.log(children,"sdfklnfklgnhklfgnh")

    return (
        <div>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What harsh truths do you prefer to ignore?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div>
                        {/* <p>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p> */}

                         {children && children.map(obj =>
                                 <AccordionSection />
                                
                                
                        )} 
                        </div>
                        
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Is free will real or just an illusion?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            In ad velit in ex nostrud dolore cupidatat consectetur
                            ea in ut nostrud velit in irure cillum tempor laboris
                            sed adipisicing eu esse duis nulla non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
  }
}

