import React, { useState, useEffect } from 'react';
import SliderBanner from '../SliderBanner';
import './style.scss';
import Artist from '../../../assets/images/people2.png';
import ArticleImage from '../../../assets/images/article-4.jpg';
import FeaturedEvents from '../../../shared/components/FeaturedEvents';
import AdvertisementService from '../../../shared/services/AdvertisementService';
import Explore from '../../../shared/components/Explore';
import BreadcrumbSlug from '../../../shared/components/BreadcrumbSlug';
import SocialShare from '../../../shared/components/SocialShare';
import ShareIcon from '../../../assets/images/share-icon.svg';
import ExploreService from '../../../shared/services/ExploreService';

const Article = props => {
  console.log(props);
  const [articleData, setArticleData] = useState([]);
  const [showSocialShare, setShowSocialShare] = useState(false);
  const handleSocialShare = () => {
    setShowSocialShare(!showSocialShare);
  };

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = () => {
    const params = {
      id: 8372
    };
    setTimeout(() => {
      ExploreService.getArticle(params)
        .then(res => {
          console.log(res.data.data[0]);
          setArticleData(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }, 1000);
  };
  return (
    <section>
      <SliderBanner data={articleData && articleData.image} />
      <div className="acticle">
        <div className="container-fluid">
          <div className="offset-lg-2">
            <div className="breadcrumbs-section">
              <BreadcrumbSlug
                breadcrumbSlug={[
                  { path: '/', title: 'Home' },
                  { path: '/explore', title: 'Explore' },
                  { path: '/article', title: 'Article' }
                ]}
              />
              <span className="share" onClick={handleSocialShare}>
                <img src={ShareIcon} alt="share-icon" />
                <SocialShare
                  shareUrl={window.location.href}
                  showSocialShare={showSocialShare}
                />
              </span>
            </div>
            {articleData && articleData.tags && (
              <ul className="category-section">
                {articleData.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-2 pl-lg-0">
              {articleData && articleData.userProfile && (
                <div className="artist-block">
                  <img src={Artist} alt="Artist" />
                  <div className="artist-content">
                    <h4>Brayden William</h4>
                    <span>May 22, 2019 07:00 PM</span>
                  </div>
                </div>
              )}
            </div>

            <div className="col-xs-12 col-lg-10 mb-5">
              <div className="article-content">
                {articleData && articleData.title && (
                  <h2>{articleData.title}</h2>
                )}
                {articleData && articleData.description && (
                  <div
                    className="sub-text"
                    dangerouslySetInnerHTML={{
                      __html: articleData.description
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="article-featured">
        <FeaturedEvents
          api={AdvertisementService.getFeaturedEvents}
          heading="Featured in Article"
          explore
          article
        />
      </div>
      <div className="article-explore">
        <Explore article heading="You Might Like" />
      </div>
    </section>
  );
};

export default Article;
