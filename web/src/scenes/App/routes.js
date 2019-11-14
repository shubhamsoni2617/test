import Home from '../Home';
import Events from '../Events';
import EventsDetail from '../EventsDetail';
import HomeService from '../../shared/services/HomeService';
import Promotions from '../Promotions';
import PageNotFound from '../PageNotFound/index';
import Agents from '../Agents';
import Attraction from '../Attraction';
import Venues from '../Venues';
import WhereBuyTickets from '../WhereBuyTickets';
import TermsPrivacy from '../TermsPrivacy';
import GiftVouchers from '../GiftVouchers';
import ContactUs from '../ContactUs';
import Faq from '../Faq';
import Careers from '../Careers';
import JobDescription from '../Careers/JobDescription';
import AboutUs from '../AboutUs';
import ApiPartner from '../ApiPartner';
import Search from '../Home/Search';
import SystemLicensing from '../SystemLicensing';
import Advertise from '../Advertise';
import SellTicketsWithUs from '../SellTicketsWithUs';
import LandingPage from '../LandingPage';
import ArticleList from '../Explore/ArticleList';
import Article from '../Explore/Article';
import Festival from '../Explore/Festival';

// import Explore from '../Explore';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/events/search',
    exact: true,
    component: Events
  },
  {
    path: '/events/:icc',
    exact: true,
    component: EventsDetail
  },
  {
    path: '/events',
    component: Events,
    exact: true,
    fetchInitialData: (path = '') => HomeService.getData()
  },
  {
    path: '/agents',
    component: Agents,
    exact: true
  },
  {
    path: '/promotions/:promoId',
    component: Promotions
  },
  {
    path: '/promotions',
    exact: true,
    component: Promotions
  },
  {
    path: '/where-to-buy-tickets',
    exact: true,
    component: WhereBuyTickets
  },
  {
    path: '/attraction',
    component: Attraction,
    exact: true
  },
  {
    path: '/terms-and-conditions',
    component: TermsPrivacy,
    exact: true,
    cmsPageType: 1
  },
  {
    path: '/privacy-policy',
    component: TermsPrivacy,
    exact: true,
    cmsPageType: 2
  },
  {
    path: '/condition-of-access',
    component: TermsPrivacy,
    exact: true,
    cmsPageType: 3
  },
  {
    path: '/transaction-security',
    component: TermsPrivacy,
    exact: true,
    cmsPageType: 4
  },
  {
    path: '/gift-vouchers',
    component: GiftVouchers,
    exact: true
  },
  {
    path: '/contact-us',
    component: ContactUs,
    exact: true
  },
  {
    path: '/venues',
    component: Venues,
    exact: true
  },
  {
    path: '/faq/:id',
    component: Faq,
    exact: true
  },
  {
    path: '/career',
    component: Careers,
    exact: true
  },
  {
    path: '/career/jobdescription/:jobId',
    component: JobDescription,
    exact: true
  },
  {
    path: '/about-us',
    component: AboutUs,
    exact: true
  },
  {
    path: '/apipartners',
    component: ApiPartner,
    exact: true
  },
  {
    path: '/search-results',
    component: Search,
    exact: true
  },
  {
    path: '/system-licensing',
    component: SystemLicensing,
    exact: true
  },
  {
    path: '/advertise',
    component: Advertise,
    exact: true
  },
  {
    path: '/sell-event-tickets',
    component: SellTicketsWithUs,
    exact: true
  },
  {
    path: '/b2b',
    component: LandingPage,
    exact: true
  },
  {
    path: '/explore/articlelist',
    component: ArticleList,
    exact: true
  },
  {
    path: '/explore/festival',
    component: Festival,
    exact: true
  },
  {
    path: '/explore/article',
    component: Article,
    exact: true
  },
  {
    path: '*',
    component: PageNotFound
  }
];

export default routes;
