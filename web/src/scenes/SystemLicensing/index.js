import React, { useState, useEffect } from 'react';
import './style.scss';
import B2BService from '../../shared/services/B2BService';
import Banner from './Banner';
import WhySistic from './WhySistic';
import TicketingSystem from './TicketingSystem';
import Partners from '../ApiPartner/Partners';
import ContactUs from '../ApiPartner/ContactUs';
import Clients from './Clients';
import MetaData from '../../shared/components/MetaData';

const SystemLicensing = ({ location, staticContext }) => {
  const [systemLicensing, setSystemLicensing] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    B2BService.getSystemLicensing()
      .then(res => {
        if (res && res.data) {
          console.log(res.data);
          setSystemLicensing(res.data);
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
        }
      });
  }, []);

  const {
    banner_title,
    button_link,
    button_text,
    banner_description,
    content
  } = systemLicensing;

  return (
    <div className="system-licence">
      <MetaData location={location} data={staticContext} />
      <Banner
        title={banner_title}
        buttonLink={button_link}
        buttonText={button_text}
        description={banner_description}
      />
      <WhySistic whySistic={content && content.why_sistic} />
      <TicketingSystem ticketingSystem={content && content.tickeying_system} />
      <section>
        <div className="methodology">
          <div className="container-fluid custom-container">
            {content && content.product_design && (
              <div>
                <h2 className="text-center section-title">
                  {content.product_design.title}
                </h2>

                <div
                  className="text-center sub-text"
                  dangerouslySetInnerHTML={{
                    __html: content.product_design.description
                  }}
                />
                <div className="methodology-inner-wrapper">
                  {content.product_design.data.map(product => {
                    return (
                      <div className="item" key={product.title}>
                        <h4>{product.title}</h4>
                        <ul>
                          {product.category.map(category => (
                            <li>{category}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {content && content.clients && (
        <Clients
          partnersLogo={content.clients.data}
          clients={content.clients}
        />
      )}
      <div class="apipartners-wrapper">
        <ContactUs />
      </div>
    </div>
  );
};

export default SystemLicensing;
