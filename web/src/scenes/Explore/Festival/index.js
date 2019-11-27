import React, { useState, useEffect, Fragment } from 'react';
import './style.scss';
import MusicFestival from './MusicFestival';
import AllEvents from './AllEvents';
import SocialWall from './SocialWall';
import TicketDeals from './TicketDeals';
import Articles from './Articles';
import PollNServeys from './PollsNServeys';
import VideoGallery from './VideoGallery';
import ExploreService from '../../../shared/services/ExploreService';
import FestivalEventLineUp from './FestivalEventLineUp';
import Welcome from './Welcome';
import SliderBanner from '../SliderBanner';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import Utilities from '../../../shared/utilities';

const Festival = ({ match }) => {
  const [templateTwoContent, setTemplateTwoContent] = useState([]);
  const [loading, setLoading] = useState(false);

  const breadcrumbSlug = [
    { path: '/', title: 'Home' },
    { path: '/explore', title: '/ Explore' },
    { path: '/festival', title: '/ Festival' }
  ];

  useEffect(() => {
    scrollToTop();
    setLoading(true);
    getTemplateTwo();
  }, []);

  const getTemplateTwo = () => {
    const params = {
      id: match.params.id
    };
    ExploreService.getTemplateTwo(params)
      .then(res => {
        if (res && res.data.data && res.data.data.length > 0) {
          setTimeout(() => {
            setTemplateTwoContent(res.data.data[0]);
            setLoading(false);
          }, 500);
        } else if (res && res.data.data.length === 0) {
          setLoading(false);
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
          setLoading(false);
        }
      });
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const reusedShimmer = (height, count, type, propCls) => {
    return (
      <ShimmerEffect
        height={height}
        count={count}
        type={type}
        propCls={`shm_col-xs-${
          Utilities.mobilecheck() ? 12 : 2
        } col-md-${propCls}`}
      />
    );
  };

  const {
    title,
    subtitle,
    date,
    description,
    section_one,
    section_two,
    section_three,
    section_four,
    section_five,
    section_six,
    section_seven,
    section_eigth,
    social_wall_url,
    image,
    order
  } = templateTwoContent;

  const bannerPart = image && image.length > 0 && <SliderBanner data={image} />;
  const welcomePart = title ? (
    <Welcome
      breadcrumbSlug={breadcrumbSlug}
      title={title}
      subtitle={subtitle}
      date={date}
      description={description}
    />
  ) : loading ? (
    <div className={Utilities.mobilecheck() ? '' : 'shimmer-margin'}>
      <div className="simmerOuter">
        {reusedShimmer(Utilities.mobilecheck() ? 200 : 300, 1, 'SOLID', 12)}
      </div>
    </div>
  ) : null;

  const festivalPart =
    section_one && section_two ? (
      <FestivalEventLineUp sectionOne={section_one} sectionTwo={section_two} />
    ) : loading ? (
      <div className="shimmer-margin">
        {reusedShimmer(
          Utilities.mobilecheck() ? 200 : 300,
          Utilities.mobilecheck() ? 1 : 4,
          'TILE',
          Utilities.mobilecheck() ? 12 : 3
        )}
      </div>
    ) : null;

  const musicalPart = section_three ? (
    <MusicFestival sectionThree={section_three} />
  ) : loading ? (
    <div className="shimmer-margin">
      {reusedShimmer(
        300,
        Utilities.mobilecheck() ? 1 : 4,
        'TILE',
        Utilities.mobilecheck() ? 12 : 3
      )}
    </div>
  ) : null;

  const allEventPart = section_four ? (
    <AllEvents sectionFour={section_four} />
  ) : loading ? (
    <div className="shimmer-margin">
      {reusedShimmer(
        Utilities.mobilecheck() ? 150 : 300,
        Utilities.mobilecheck() ? 1 : 2,
        'TILE',
        Utilities.mobilecheck() ? 12 : 6
      )}
    </div>
  ) : null;

  const socialWallPart = social_wall_url && (
    <SocialWall socialUrl={social_wall_url} />
  );

  const ticketDealsPart = section_five ? (
    <TicketDeals sectionFive={section_five} />
  ) : loading ? (
    <div className="shimmer-margin">
      {reusedShimmer(
        Utilities.mobilecheck() ? 200 : 300,
        Utilities.mobilecheck() ? 1 : 4,
        'TILE',
        Utilities.mobilecheck() ? 12 : 3
      )}
    </div>
  ) : null;

  const articlesPart =
    section_six &&
    section_six.sub_section_six &&
    section_six.sub_section_six.length > 0 ? (
      <Articles sectionSix={section_six} />
    ) : loading ? (
      <div className="shimmer-margin">
        {reusedShimmer(
          Utilities.mobilecheck() ? 150 : 300,
          Utilities.mobilecheck() ? 1 : 2,
          'TILE',
          Utilities.mobilecheck() ? 12 : 6
        )}
      </div>
    ) : null;

  const pollNSurveysPart =
    section_seven && section_seven.length > 0 ? (
      <PollNServeys sectionSeven={section_seven} />
    ) : loading ? (
      <div className="shimmer-margin">
        {reusedShimmer(
          300,
          Utilities.mobilecheck() ? 1 : 2,
          'TILE',
          Utilities.mobilecheck() ? 12 : 6
        )}
      </div>
    ) : null;

  const videoGalleryPart = section_eigth && section_eigth.length > 0 && (
    <VideoGallery sectionEight={section_eigth} />
  );

  const sectionArray = [
    { orderNo: 'section_two', returnPart: festivalPart },
    { orderNo: 'section_two', returnPart: musicalPart },
    { orderNo: 'section_three', returnPart: allEventPart },
    { orderNo: 'section_four', returnPart: socialWallPart },
    { orderNo: 'section_five', returnPart: ticketDealsPart },
    { orderNo: 'section_six', returnPart: articlesPart },
    { orderNo: 'section_seven', returnPart: pollNSurveysPart },
    { orderNo: 'section_eight', returnPart: videoGalleryPart }
  ];

  return (
    <div className="festival-wrapper">
      {bannerPart}
      {welcomePart}
      {order && order.length > 0 ? (
        order &&
        order.map(serverOrderNo => {
          return sectionArray.map(({ orderNo, returnPart }) => {
            if (serverOrderNo === orderNo) {
              return returnPart;
            }
          });
        })
      ) : (
        <Fragment>
          {festivalPart}
          {musicalPart}
          {allEventPart}
          {socialWallPart}
          {ticketDealsPart}
          {articlesPart}
          {pollNSurveysPart}
          {videoGalleryPart}
        </Fragment>
      )}
    </div>
  );
};

export default Festival;
