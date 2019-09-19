import React,{Component} from 'react';
import './style.scss';
import Header from './Header';
import OurTeam from './OurTeam';
import Mission from './Mission';
import CoreValues from './CoreValues';
import Opening from './Opening';
import StayUpdated from './StayUpdated';
import Testimonials from './Testimonial';

class Careers extends Component{
  render(){
    return(
      <div>
        <Header />
        <OurTeam />
        <Mission />
        <CoreValues />
        <Opening />
        <StayUpdated />
        <Testimonials />
      </div>
    )
  }
}
export default Careers;
