import React, { useState, useEffect } from 'react';
import './style.scss';
import B2BService from '../../shared/services/B2BService';
import Constants from '../../shared/constants';
import Banner from './Banner';
import WhySistic from './WhySistic';
import TicketingSystem from './TicketingSystem';
import Partners from '../ApiPartner/Partners';
import ContactUs from '../ApiPartner/ContactUs';
import ApiPartnersService from '../../shared/services/ApiPartnersService';

const SystemLicensing = ({}) => {
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
          <div className="container-fluid">
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
        <Partners
          partnersLogo={content.clients.data}
          systemLicensing
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
