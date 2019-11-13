import React, { useState, useEffect } from 'react';
import './style.scss';
import Articles from './Articles';
import SellingForm from './SellingForm';
import StuckHelp from './StuckHelp';
import SisticStrength from './SisticStrength';
import EventTicket from './EventTicket';
import Banner from './Banner';
import SellTicketService from '../../../src/shared/services/SellTicketService';
import moment from 'moment';

const SellTicketsWithUs = () => {
  const [sellTicketWithUs, setSellTicketWithUs] = useState('');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventCapacity, setEventCapacity] = useState('');
  const [venueName, setVenueName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [additionalInformation, setAdditionalInformation] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [serverErr, setServerErr] = useState([]);

  useEffect(() => {
    SellTicketService.getSellTicketWithUs().then(res => {
      if (res && res.data) {
        setSellTicketWithUs(res.data);
      }
    });
    scrollToTop();
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      name &&
      email &&
      contactNo &&
      eventName &&
      venueName &&
      eventCapacity &&
      captcha
    ) {
      setLoading(true);
      const data = {
        name,
        email,
        company_name: companyName,
        contact_no: contactNo,
        event_name: eventName,
        event_date: eventDate,
        venue_name: venueName,
        event_capacity: eventCapacity,
        ticket_price: ticketPrice,
        additional_info: additionalInformation
      };
      submitForm(data);
    } else {
      setError(true);
    }
  };

  const submitForm = data => {
    SellTicketService.submitSellerForm(data)
      .then(res => {
        if (res && res.data) {
          handleReset();
          setSuccessMsg(res.data.message);
        }
      })
      .catch(err => {
        if (err && err.response) {
          setServerErr(err.response.data);
        }
      });
  };

  const handleReset = () => {
    setName('');
    setCompanyName('');
    setEmail('');
    setContactNo('');
    setEventName('');
    setEventCapacity('');
    setVenueName('');
    setEventDate('');
    setTicketPrice('');
    setAdditionalInformation('');
    setCaptcha('');
    setError(false);
    setLoading(false);
    setSuccessMsg('');
    setServerErr([]);
  };
  const handleChange = event => {
    const { name, value } = event.target;
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
      case 'event-date':
        setEventDate(trimSpace(value));
        break;
      case 'ticket-price':
        const allowOnlyNumInTicket = /^[0-9\b]+$/;
        if (value === '' || allowOnlyNumInTicket.test(value)) {
          setTicketPrice(value);
        }
        break;
      case 'additional-information':
        setAdditionalInformation(trimSpace(value));
        break;
      case 'event-capacity':
        const allowOnlyNumber = /^[0-9\b]+$/;
        if (value === '' || allowOnlyNumber.test(value)) {
          setEventCapacity(value);
        }
        break;
      case 'security-check':
        break;
      default:
        return;
    }
    setSuccessMsg('');
    setServerErr([]);
  };

  const handleCaptcha = captcha => {
    setCaptcha(captcha);
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
    <div className="sell-ticket-wrapper">
      {/* SISTIC banner starts here */}
      {banner_title && (
        <Banner
          bannerTitle={banner_title}
          bannerDescription={banner_description}
          buttonLink={button_link}
          buttonText={button_text}
        />
      )}
      {/* SISTIC event ticket blog */}
      {events && (
        <EventTicket
          events={events}
          partnership={partnership}
          tickets={tickets}
          year={year}
        />
      )}
      {/* SISTIC strength */}
      {content && <SisticStrength content={content} />}
      {/* stucked help section */}
      {content && <StuckHelp content={content} />}
      {/* selling form */}
      {content && (
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
          eventDate={eventDate}
          ticketPrice={ticketPrice}
          additionalInformation={additionalInformation}
          captcha={captcha}
          error={error}
          loading={loading}
          successMsg={successMsg}
          serverErr={serverErr}
          handleCaptcha={handleCaptcha}
          handleReset={handleReset}
          handleSubmit={handleSubmit}
        />
      )}
      {/* articles section starts here */}
      {articles && <Articles articles={articles} />}
    </div>
  );
};

export default SellTicketsWithUs;
