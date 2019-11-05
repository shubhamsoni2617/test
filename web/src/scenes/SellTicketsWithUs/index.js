import React, { useState, useEffect } from 'react';
import './style.scss';
import Articles from './Articles';
import SellingForm from './SellingForm';
import StuckHelp from './StuckHelp';
import SisticStrength from './SisticStrength';
import EventTicket from './EventTicket';
import Banner from './Banner';
import SellTicketService from '../../../src/shared/services/SellTicketService';

const SellTicketsWithUs = () => {
  const [sellTicketWithUs, setSellTicketWithUs] = useState('');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventCapacity, setEventCapacity] = useState('');
  const [venueName, setVenueName] = useState('');

  useEffect(() => {
    SellTicketService.getSellTicketWithUs().then(res => {
      if (res && res.data) {
        setSellTicketWithUs(res.data);
      }
    });
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
  };
  const handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    switch (name) {
      case 'name':
        setName(trimSpace(value));
        break;
      case 'email':
        setEmail(value);
        break;
      case 'contact-no':
        const allowOnlyNum = /^[0-9\b]+$/;
        if (value === '' || allowOnlyNum.test(value)) {
          setContactNo(value);
        }
        break;
      case 'company-name':
        setCompanyName(trimSpace(value));
        break;
      case 'event-name':
        setEventName(trimSpace(value));
        break;
      case 'venue-name':
        setVenueName(trimSpace(value));
        break;
      case 'event-capacity':
        const allowOnlyNumber = /^[0-9\b]+$/;
        if (value === '' || allowOnlyNumber.test(value)) {
          setEventCapacity(value);
        }
        break;
      default:
        return;
    }
  };

  const trimSpace = value => {
    if (value.trim().length > 0) {
      return value;
    } else {
      return '';
    }
  };

  const {
    banner_title,
    banner_description,
    button_link,
    button_text,
    events,
    partnership,
    tickets,
    year,
    articles,
    content
  } = sellTicketWithUs;
  return (
    <div>
      {/* SISTIC banner starts here */}
      <Banner
        bannerTitle={banner_title}
        bannerDescription={banner_description}
        buttonLink={button_link}
        buttonText={button_text}
      />
      {/* SISTIC event ticket blog */}
      <EventTicket
        events={events}
        partnership={partnership}
        tickets={tickets}
        year={year}
      />
      {/* SISTIC strength */}
      <SisticStrength content={content} />
      {/* stucked help section */}
      <StuckHelp content={content} />
      {/* selling form */}
      <SellingForm
        content={content}
        handleChange={handleChange}
        name={name}
        email={email}
        contactNo={contactNo}
        companyName={companyName}
        eventName={eventName}
        eventCapacity={eventCapacity}
        venueName={venueName}
      />
      {/* articles section starts here */}
      <Articles articles={articles} />
    </div>
  );
};

export default SellTicketsWithUs;
