import React, { useState } from 'react';
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

const Article = props => {
  console.log(props);
  const [showSocialShare, setShowSocialShare] = useState(false);
  const handleSocialShare = () => {
    setShowSocialShare(!showSocialShare);
  };
  return (
    <section>
      <SliderBanner />
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

            <ul className="category-section">
              <li>Musical</li>
              <li>Currently Showing</li>
              <li>Phantom of Opera</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-2 pl-lg-0">
              <div className="artist-block">
                <img src={Artist} alt="Artist" />
                <div className="artist-content">
                  <h4>Brayden William</h4>
                  <span>May 22, 2019 07:00 PM</span>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-lg-10 mb-5">
              <div className="article-content">
                <h2>A Guide to SIFA 2019’s Music-centric Gems</h2>
                <p>
                  “Artists who are ground-breaking in their fields have always
                  inspired me. My hope is that they will also inspire both
                  Singaporean artists, as well as audiences” – these are the
                  words of Gaurav Kripalani, festival director of Singapore
                  International Festival of Arts (SIFA).
                </p>
                <p>
                  This year’s iteration of the festival marks the 42nd  time
                  SIFA has evoked the transformative and spectacular
                  affordances of cutting-edge art from across the spectrum of
                  mediums and disciplines in Singapore. But this time, the
                  festival assures attendees of an even greater payload of
                  offerings. In the arena of music, you will find a
                  horizon-blasting span of local and international artists who
                  will be showcasing their visionary works at the festival.
                </p>
                <p>
                  Below, get acquainted with the five music performances that
                  are absolutely worth your attention at SIFA 2019.
                </p>
                <h5>Bill Frisel Trio</h5>
                <img src={ArticleImage} alt="ArticleImage" />
                <p>
                  “Artists who are ground-breaking in their fields have always
                  inspired me. My hope is that they will also inspire both
                  Singaporean artists, as well as audiences” – these are the
                  words of Gaurav Kripalani, festival director of Singapore
                  International Festival of Arts (SIFA).
                </p>
                <p>
                  This year’s iteration of the festival marks the 42nd  time
                  SIFA has evoked the transformative and spectacular
                  affordances of cutting-edge art from across the spectrum of
                  mediums and disciplines in Singapore. But this time, the
                  festival assures attendees of an even greater payload of
                  offerings. In the arena of music, you will find a
                  horizon-blasting span of local and international artists who
                  will be showcasing their visionary works at the festival.
                </p>
                <p>
                  Below, get acquainted with the five music performances that
                  are absolutely worth your attention at SIFA 2019.
                </p>
                <h5>Bill Frisel Trio</h5>
                <img src={ArticleImage} alt="ArticleImage" />
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
        />
      </div>
      <div className="article-explore">
        <Explore />
      </div>
    </section>
  );
};

export default Article;
