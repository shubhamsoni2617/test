import React from 'react';
import './style.scss';
import downloadIcon from '../../../../src/assets/images/download-icon.svg';
import Image from '../../../shared/components/Image';
import Utilities from '../../../shared/utilities';

const Articles = ({ articles }) => {
  return (
    <section>
      <div className="article-wrapper">
        <div className="container">
          <div className="article-heading">
            <h2>Articles</h2>
          </div>
          <div className="article-box">
            {articles &&
              articles.map((article, index) => {
                return (
                  <div className="article" key={index}>
                    <div className="article-img">
                      <Image src={article.image} type="Horizontal" />
                    </div>
                    <div className="article-content">
                      <a>
                        <span>{article.category}</span>
                      </a>
                      <h3>
                        {Utilities.showLimitedChars(
                          article.title,
                          Utilities.mobilecheck() ? 23 : 35
                        )}
                      </h3>
                      {!Utilities.mobilecheck() && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: article.description
                          }}
                        ></p>
                      )}
                    </div>
                    {article.download_file && (
                      <div className="download-icon">
                        <a
                          href={article.download_file}
                          download
                          target="_blank"
                        >
                          <img src={downloadIcon} alt="download" />
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}

            {/* <div className="article">
              <div className="article-img">
                <img src={article2} alt="article-2" className="img-fluid" />
              </div>
              <div className="article-content">
                <a href="#">
                  <span>Sales Channels</span>
                </a>
                <h3>Mosaic Music Series</h3>
                <p>
                  Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.
                </p>
              </div>
              <div className="download-icon">
                <img src={downloadIcon} alt="download" />
              </div>
            </div>
            <div className="article">
              <div className="article-img">
                <img src={article3} alt="article-3" className="img-fluid" />
              </div>
              <div className="article-content">
                <a href="#">
                  <span>Digital Experience</span>
                </a>
                <h3>National Museum of Singapore</h3>
                <p>
                  Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.
                </p>
              </div>
              <div className="download-icon">
                <img src={downloadIcon} alt="download" />
              </div>
            </div>
            <div className="article">
              <div className="article-img">
                <img src={article4} alt="article-4" className="img-fluid" />
              </div>
              <div className="article-content">
                <a href="#">
                  <span>Ticket Insurance</span>
                </a>
                <h3>Alladin- Buy 4 Tickets</h3>
                <p>
                  Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.
                </p>
              </div>
              <div className="download-icon">
                <img src={downloadIcon} alt="download" />
              </div>
            </div>




            <div className="article">
              <div className="article-img">
                <img src={article5} alt="article-5" className="img-fluid" />
              </div>
              <div className="article-content">
                <a href="#">
                  <span>Customer Service Hotline</span>
                </a>
                <h3>Shakespeare's Globe 2019</h3>
                <p>
                  Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.
                </p>
              </div>
              <div className="download-icon">
                <img src={downloadIcon} alt="download" />
              </div>
            </div>
            <div className="article">
              <div className="article-img">
                <img src={article6} alt="article-6" className="img-fluid" />
              </div>
              <div className="article-content">
                <a href="#">
                  <span>Entertainment</span>
                </a>
                <h3>ACT 3 International- The Rainbow Fish</h3>
                <p>
                  Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.
                </p>
              </div>
              <div className="download-icon">
                <img src={downloadIcon} alt="download" />
              </div>
            </div>
            <div className="article">
              <div className="article-img">
                <img src={article7} alt="article-7" className="img-fluid" />
              </div>
              <div className="article-content">
                <a href="#">
                  <span>Digital Experience</span>
                </a>
                <h3>SSO National Day Concert</h3>
                <p>
                  Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.
                </p>
              </div>
              <div className="download-icon">
                <img src={downloadIcon} alt="download" />
              </div>
            </div>
            <div className="article">
              <div className="article-img">
                <img src={article8} alt="article-8" className="img-fluid" />
              </div>
              <div className="article-content">
                <a href="#">
                  <span>Hot Show Support</span>
                </a>
                <h3>GSS2019 | Kurios</h3>
                <p>
                  Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.
                </p>
              </div>
              <div className="download-icon">
                <img src={downloadIcon} alt="download" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Articles;
