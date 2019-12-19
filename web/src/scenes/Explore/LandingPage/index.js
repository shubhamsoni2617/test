import React, { useState, useEffect, Fragment } from 'react';
import './style.scss';
import ExploreService from '../../../shared/services/ExploreService';
import Banner from './Banner';
import WhatsUp from './WhatsUp';
import LandingArticles from './LandingArticles';
import LandingFestivals from './LandingFestivals';
import Reviews from './Reviews';
import Trending from './Trending';
import CustomtomSectionTwo from '../../Home/CustomSectionTwo';
import CustomtomSectionThree from '../../Home/CustomSectionThree';
import GiftCard from '../../Home/GiftCard';
import Utilities from '../../../shared/utilities';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import AdvertisementService from '../../../shared/services/AdvertisementService';
import Constants from '../../../shared/constants';

const Explore = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    scrollToTop();
    setLoading(true);
    getExploreLanding();
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const getExploreLanding = () => {
    ExploreService.getExploreLanding()
      .then(res => {
        if (res && res.data) {
          setData(res.data.data[0]);
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
    video_gallery,
    trending,
    royals,
    whats_up,
    articles,
    festivals,
    banner,
    section_five
  } = data;

  const bannerPart = banner && banner.length > 0 && (
    <Banner bannerData={banner} />
  );

  const whatsUpPart = whats_up && whats_up.data && whats_up.data.length > 0 && (
    <WhatsUp whatsUpData={whats_up} />
  );

  const royalsPart = royals &&
    royals.sub_section_two &&
    royals.sub_section_two.length > 0 && (
      <div className="home-page-wrapper">
        <CustomtomSectionTwo
          heading={royals.heading}
          customData={royals.sub_section_two}
          id={royals && royals.id}
          url={royals && royals.url}
          isMoreFrom={true}
        />
      </div>
    );

  const articlesPart = articles &&
    articles.data &&
    articles.data.length > 0 && <LandingArticles articles={articles} />;

  const giftCardPart = (
    <GiftCard
      api={AdvertisementService.getLeaderboardImage}
      params={{ client: Constants.CLIENT, page: 4 }}
    />
  );

  const festivalsPart = festivals &&
    festivals.data &&
    festivals.data.length > 0 && <LandingFestivals festivals={festivals} />;

  const reviewsPart = section_five &&
    section_five &&
    section_five.length > 0 && <Reviews reviewsData={section_five} />;

  const trendingPart = trending &&
    trending.sub_section_six &&
    trending.sub_section_six.length > 0 && <Trending trending={trending} />;

  const videoGalleryPart = video_gallery && video_gallery.length > 0 && (
    <CustomtomSectionThree
      heading="Video Gallery"
      customData={video_gallery}
      isHomePage={false}
    />
  );

  const sectionArray = [
    { orderNo: 'whatsUp', returnPart: whatsUpPart },
    { orderNo: 'banner', returnPart: bannerPart },
    { orderNo: 'royals', returnPart: royalsPart },
    { orderNo: 'festival', returnPart: festivalsPart },
    { orderNo: 'videoGallery', returnPart: videoGalleryPart },
    { orderNo: 'GiftCard', returnPart: giftCardPart },
    { orderNo: 'Reviews', returnPart: reviewsPart },
    { orderNo: 'articles', returnPart: articlesPart },
    { orderNo: 'trending', returnPart: trendingPart }
  ];

  return (
    <div className="explore-wrapper">
      {loading ? (
        <Fragment>
          <div className={Utilities.mobilecheck() ? '' : 'shimmer-margin'}>
            <div className="simmerOuter">
              {reusedShimmer(
                Utilities.mobilecheck() ? 200 : 300,
                1,
                'SOLID',
                12
              )}
            </div>
          </div>
          <div className="shimmer-margin">
            {reusedShimmer(
              Utilities.mobilecheck() ? 200 : 300,
              Utilities.mobilecheck() ? 1 : 4,
              'TILE',
              Utilities.mobilecheck() ? 12 : 3
            )}
          </div>
          <div className="shimmer-margin">
            {reusedShimmer(
              300,
              Utilities.mobilecheck() ? 1 : 2,
              'TILE',
              Utilities.mobilecheck() ? 12 : 6
            )}
          </div>
          <div className="shimmer-margin">
            {reusedShimmer(
              300,
              Utilities.mobilecheck() ? 1 : 2,
              'TILE',
              Utilities.mobilecheck() ? 12 : 6
            )}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {bannerPart}
          {whatsUpPart}
          {royalsPart}
          {articlesPart}
          {giftCardPart}
          {festivalsPart}
          {reviewsPart}
          {trendingPart}
          {videoGalleryPart}
        </Fragment>
      )}

      {/* {sectionOrders &&
        sectionOrders.map(({ order }) => {
          return sectionArray.map(({ orderNo, returnPart }) => {
            if (order === orderNo) {
              return returnPart;
            }
          });
        })} */}
    </div>
  );
};
export default Explore;
