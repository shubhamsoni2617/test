import React, { useState, useEffect } from 'react';
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

const Festival = ({ match }) => {
  const [templateTwoContent, setTemplateTwoContent] = useState([]);
  const breadcrumbSlug = [
    { path: '/', title: 'Home' },
    { path: '/explore', title: 'Explore' },
    { path: '/festival', title: 'Festival' }
  ];

  useEffect(() => {
    scrollToTop();
    getTemplateTwo();
  }, []);

  const getTemplateTwo = () => {
    const params = {
      id: match.params.id
    };
    ExploreService.getTemplateTwo(params)
      .then(res => {
        if (res && res.data && res.data.data.length > 0) {
          setTimeout(() => {
            setTemplateTwoContent(res.data.data[0]);
          }, 2000);
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
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
        propCls={`shm_col-xs-2 col-md-${propCls}`}
      />
    );
  };

  const {
    title,
    subtitle,
    description,
    section_one,
    section_two,
    section_three,
    section_four,
    section_five,
    section_six,
    section_seven,
    section_eigth,
    social_wall_url
  } = templateTwoContent;
  console.log(templateTwoContent);
  return (
    <div className="festival-wrapper">
      <SliderBanner />
      {title ? (
        <Welcome
          breadcrumbSlug={breadcrumbSlug}
          title={title}
          subtitle={subtitle}
          description={description}
        />
      ) : (
        reusedShimmer(300, 1, 'TILE', 12)
      )}
      {section_one && section_two ? (
        <FestivalEventLineUp
          sectionOne={section_one}
          sectionTwo={section_two}
        />
      ) : (
        reusedShimmer(300, 6, 'TILE', 2)
      )}
      {section_three ? (
        <MusicFestival sectionThree={section_three} />
      ) : (
        reusedShimmer(300, 1, 'TILE', 12)
      )}
      {section_four ? (
        <AllEvents sectionFour={section_four} />
      ) : (
        reusedShimmer(300, 6, 'TILE', 2)
      )}
      {social_wall_url && <SocialWall socialUrl={social_wall_url} />}
      {section_five ? (
        <TicketDeals sectionFive={section_five} />
      ) : (
        reusedShimmer(300, 6, 'TILE', 2)
      )}
      {section_six ? (
        <Articles sectionSix={section_six} />
      ) : (
        reusedShimmer(300, 1, 'TILE', 12)
      )}
      {section_seven ? (
        <PollNServeys sectionSeven={section_seven} />
      ) : (
        reusedShimmer(300, 1, 'TILE', 12)
      )}
      {section_eigth && <VideoGallery sectionEight={section_eigth} />}

      {/* <div class="festival-wrapper"> */}

      {/* festival-banner starts here
      <section>
        <div class="event-wrapper">
          <div class="event-banner"></div>
        </div>
      </section> */}

      {/* home tab section
      <section>
        <div class="container-fluid">
          <div class="Home-tab ">
            <div class="explore-nav">
              <p>
                <span>Home</span>
                <span>/ Explore</span>
                <span>/ Festival</span>
              </p>
            </div>
            <div class="explore-img">
              <img src={shareIcon} alt="share" />
            </div>
          </div>
        </div>
      </section> */}

      {/* welcome fifa section
      <section>
        <div class="container-fluid">
          <div class="welcome-sifa">
            <h2>Welcome to SIFA 2019</h2>
            <span>May 22, 2019 07:00 PM</span>
            <p>
              As Singapore’s annual pinnacle arts festival, the Singapore
              International Festival of Arts (SIFA) presents captivating and
              diverse works across theatre, music, dance, film and visual arts.
              First launched as the Singapore Festival of Arts in 1977, the
              festival has gone through several evolutions and inspired
              generations of arts lovers and practitioners. Today, the
              highly-anticipated festival is a high-point on Singapore’s arts
              and cultural calendar.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
              enim justo. Vestibulum aliquam hendrerit molestie. Mauris
              malesuada nisi sit amet augue accumsan tincidunt. Maecenas
              tincidunt, velit ac porttitor pulvinar, tortor eros facilisis
              libero.
            </p>
          </div>
        </div>
      </section> */}

      {/* featured section
      <section class="featured-wrapper">
        <div class="container-fluid featured-container">
          <div class="featured-box">
            <div class="featured">
              <h2>Featured</h2>
              <img src={Kurios} alt="featured" />
              <h3>Kurios Cabinet of Curiosities</h3>
              <p>
                LA Comedy Live is excited to announce that the iconic winner.
              </p>
            </div>

            <div class="festival-lineup">
              <h2>Festival Event Lineup</h2>
              <div class="festival-event">
                <div class="event">
                  <img src={festivalEvent} alt="event" />
                  <h2>Alaska - Live in Singapore (R18)</h2>
                  <p>
                    LA Comedy Live is excited to announce that the iconic winner
                    of Rupaul’s Drag Race All Stars Season 2, ALASKA 5000, will
                    be bringing her anticipated performance to Singapore on Aug
                    27, 2019 at Shine Auditorium! Don’t miss this show as
                    Alaska, brings us her chart .
                  </p>
                  <a herf="#">Buy Tickets</a>
                </div>
                <div class="event">
                  <img src={festivalEvent} alt="event" />
                  <h2>
                    From Singapore to Singaporean: The Bicentennial Experience
                  </h2>
                  <p>
                    LA Comedy Live is excited to announce that the iconic winner
                    of Rupaul’s Drag Race All Stars Season 2, ALASKA 5000, will
                    be bringing her anticipated performance to Singapore on Aug
                    27, 2019 at Shine Auditorium! Don’t miss this show as
                    Alaska, brings us her chart .
                  </p>
                  <a herf="#">Buy Tickets</a>
                </div>
                <div class="event">
                  <img src={trevorNoah} alt="event" />
                  <h2>Trevor Noah Loud & Clear Tour 2019</h2>
                  <p>
                    LA Comedy Live is excited to announce that the iconic winner
                    of Rupaul’s Drag Race All Stars Season 2, ALASKA 5000, will
                    be bringing her anticipated performance to Singapore on Aug
                    27, 2019 at Shine Auditorium! Don’t miss this show as
                    Alaska, brings us her chart .
                  </p>
                  <a herf="#">Buy Tickets</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* music festival section
      <section>
        <div class="container-fluid">
          <div class="music-fest">
            <h2>Music Festivals</h2>
            <div class="music-fest-box">
              <div class="fest-img">
                <img src={Music} alt="music" />
              </div>
              <div class="fest-cont">
                <h2>A Spoonful Of Sherman</h2>
                <span>Day 1</span>
                <p>
                  A Spoonful of Sherman is a musical revue created by Robert J.
                  Sherman which celebrates three generations of his song writing
                  family’s century-long musical journey.
                </p>
                <p>
                  Fresh from the West End, A Spoonful of Sherman is making its
                  Asian Premiere right here in Singapore! Featuring
                  Oscar-winning songs from films such as Mary Poppins, Chitty
                  Chitty Bang Bang, The Jungle Book and Winnie the Pooh, which
                  have entertained the world for more than 60 years, this
                  musical revue is sure to take you on a nostalgic trip down
                  memory lane!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* all events
      <section class="festival-event-banner">
        <div class="container-fluid">
          <div class="fest-event-wrapper">
            <h2>All Events</h2>
            <div class="fest-box">
              <div class="event-box">
                <img src={hettyKeos} alt="event" />
                <h2>This Is What Happens To Pretty Girls </h2>
                <span>Sun, 26 May 2019</span>
                <p>Drama Centre Theatre</p>
              </div>
              <div class="event-box">
                <img src={hettyKeos} alt="event" />
                <h2>This Is What Happens To Pretty Girls </h2>
                <span>Sun, 26 May 2019</span>
                <p>Drama Centre Theatre</p>
              </div>
              <div class="event-box">
                <img src={hettyKeos} alt="event" />
                <h2>This Is What Happens To Pretty Girls </h2>
                <span>Sun, 26 May 2019</span>
                <p>Drama Centre Theatre</p>
              </div>
              <div class="event-box">
                <img src={hettyKeos} alt="event" />
                <h2>This Is What Happens To Pretty Girls </h2>
                <span>Sun, 26 May 2019</span>
                <p>Drama Centre Theatre</p>
              </div>
              <div class="event-box">
                <img src={hettyKeos} alt="event" />
                <h2>This Is What Happens To Pretty Girls </h2>
                <span>Sun, 26 May 2019</span>
                <p>Drama Centre Theatre</p>
              </div>
              <div class="event-box">
                <img src={hettyKeos} alt="event" />
                <h2>This Is What Happens To Pretty Girls </h2>
                <span>Sun, 26 May 2019</span>
                <p>Drama Centre Theatre</p>
              </div>
              <div class="event-box">
                <img src={hettyKeos} alt="event" />
                <h2>This Is What Happens To Pretty Girls </h2>
                <span>Sun, 26 May 2019</span>
                <p>Drama Centre Theatre</p>
              </div>
              <div class="event-box">
                <img src={hettyKeos} alt="event" />
                <h2>This Is What Happens To Pretty Girls </h2>
                <span>Sun, 26 May 2019</span>
                <p>Drama Centre Theatre</p>
              </div>
              <div class="event-box">
                <img src={hettyKeos} alt="event" />
                <h2>This Is What Happens To Pretty Girls </h2>
                <span>Sun, 26 May 2019</span>
                <p>Drama Centre Theatre</p>
              </div>
              <div class="event-box">
                <img src={hettyKeos} alt="event" />
                <h2>This Is What Happens To Pretty Girls </h2>
                <span>Sun, 26 May 2019</span>
                <p>Drama Centre Theatre</p>
              </div>
            </div>
            <a href="#">Load More (8)</a>
          </div>
        </div>
      </section> */}

      {/* tickets deal
      <section class="deal-wrapper">
        <div class="container-fluid">
          <div class="tickets">
            <h2>Ticket Deals</h2>
            <div class="tickets-deal">
              <div class="deal">
                <img src={ticket1} />
                <h3>LiveUp Partnership</h3>
              </div>
              <div class="deal">
                <img src={ticket2} />
                <h3>LiveUp Partnership</h3>
              </div>
              <div class="deal">
                <img src={ticket3} />
                <h3>LiveUp Partnership</h3>
              </div>
              <div class="deal">
                <img src={ticket2} />
                <h3>LiveUp Partnership</h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* pools and serveys
      <section class="polls-survey">
        <div class="container-fluid">
          <div class="polls-wrapper">
            <h2>Polls and Surveys</h2>
            <div class="polls-box">
              <div class="polls-img">
                <img src={pollsSurveys} alt="music" />
              </div>
              <div class="polls-cont">
                <h2>SIFA 2019 Survey</h2>
                <p>Tell us what you think and stand to win $1000! </p>
                <p>
                  Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                  Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                  Mauris malesuada nisi sit amet augue accumsan tincidunt.
                  Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros
                  facilisis libero, vitae commodo nunc quam et ligula. Ut nec
                  ipsum sapien. Interdum et malesuada fames ac ante ipsum…
                  <span>More</span>
                </p>
                <a href="#">Take Survey</a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* </div> */}
    </div>
  );
};

export default Festival;
