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
                            Synopsis
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div>
                            <ul className="languages-group">
                                <li className="active"><a href="/">EN</a></li>
                                <li><a href="/">CN</a></li>
                            </ul>
                            <p>An enchanting escapade awaits you as we bring to you two weekends of extraordinary 
                                works at the 24th edition of Ballet Under the Stars! A phenomenal line-up specially 
                                put together for true-blue ballet lovers to enthusiastic dance novices, this is an
                                 event for everyone, of all ages.</p>

                            <p>Spread out your picnic mats, pack along your picnic baskets, and join us in the lush
                                 greenery of Fort Canning.</p>
                            
                            <p>5 – 7 July</p>
                            <p>The first weekend will stage three remarkable contemporary works that have been raved 
                                as Audience’s Favourites - the breathtaking and awe-inspiring Evening Voices by Timothy
                                 Rushton, Linea Adora, which was specially created by Timothy Harbour for SDT’s 30th 
                                 Anniversary, as well as SYNC by Nils Christe, which received Best Premiere of 2018 by
                                  Dance Europe Critic's Choice…. <a href="">More</a></p>
                            {children && children.map(obj =>
                                    <AccordionSection />
                                    
                                    
                            )} 
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        Details
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
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        Admission Rules
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
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        Gallery 
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <img src="assets/images/kurios-joker.jpg" alt="joker" class="img-fluid"/>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
  }
}

