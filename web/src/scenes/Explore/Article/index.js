import React, { useState, useEffect } from 'react';
import SliderBanner from '../SliderBanner';
import './style.scss';
import DefaultUser from '../../../assets/images/user.jpg';
import Explore from '../../../shared/components/Explore';
import BreadcrumbSlug from '../../../shared/components/BreadcrumbSlug';
import SocialShare from '../../../shared/components/SocialShare';
import ShareIcon from '../../../assets/images/share-icon.svg';
import ExploreService from '../../../shared/services/ExploreService';
import FeaturedArticles from './FeaturedArticle';
import Image from '../../../shared/components/Image';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import Utilities from '../../../shared/utilities';

const Article = props => {
  const [articleData, setArticleData] = useState(null);
  const [showSocialShare, setShowSocialShare] = useState(false);
  const handleSocialShare = () => {
    setShowSocialShare(!showSocialShare);
  };

  useEffect(() => {
    setArticleData(null);
    getArticle();
  }, [props.match.params.id]);

  const getArticle = () => {
    window &&
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    const params = {
      id: props.match.params.id
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
    <section className="articledetail-wrapper">
      {articleData && articleData.image ? (
        <SliderBanner data={articleData.image} />
      ) : (
          <div className="simmerOuter">
            <ShimmerEffect
              height={Utilities.mobilecheck() ? 130 : 250}
              count={1}
              type="SOLID"
            />
          </div>
        )}

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
            {articleData && articleData.tags ? (
              <ul className="category-section">
                {articleData.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            ) : (
                <ShimmerEffect count={4} type="BLOCK" />
              )}
          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-2 pl-lg-0">
              {articleData && articleData.author_name && (
                <div className="artist-block">
                  <Image
                    src={articleData.author_image || DefaultUser}
                    alt="Artist"
                  />
                  <div className="artist-content">
                    <h4>{articleData.author_name}</h4>
                    <span>{articleData.author_posted_date}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="col-xs-12 col-lg-10 mb-5">
              <div className="article-content">
                {articleData && articleData.title && (
                  <h2>{articleData.title}</h2>
                )}
                {articleData && articleData.description ? (
                  <div
                    className="sub-text"
                    dangerouslySetInnerHTML={{
                      __html: articleData.description
                    }}
                  />
                ) : (
                    <div className="simmerOuter">
                      <ShimmerEffect
                        height={Utilities.mobilecheck() ? 100 : 200}
                        count={2}
                        type="LIST"
                      />
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="article-featured">
        <FeaturedArticles
          featuredArticles={articleData && articleData.featured_articles}
          history={props.history}
        />
      </div>
      <div className="article-explore">
        <Explore article heading="You Might Like" />
      </div>
    </section>
  );
};

export default Article;
