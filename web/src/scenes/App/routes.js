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
import Explore from '../Explore/LandingPage';
import ArticleList from '../Explore/ArticleList';
import Article from '../Explore/Article';
import Festival from '../Explore/Festival';

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
    path: '/attractions',
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
    path: '/conditions-of-access',
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
    path: '/corporate/career/:jobId',
    component: JobDescription,
    exact: true
  },
  {
    path: '/corporate/careers',
    component: Careers,
    exact: true
  },
  {
    path: '/corporate/about-us',
    component: AboutUs,
    exact: true
  },
  {
    path: '/corporate/partner-with-us',
    component: ApiPartner,
    exact: true
  },
  {
    path: '/search',
    component: Search,
    exact: true
  },
  {
    path: '/corporate/ticketing-technology',
    component: SystemLicensing,
    exact: true
  },
  {
    path: '/corporate/advertise-with-us',
    component: Advertise,
    exact: true
  },
  {
    path: '/corporate/ticket-with-us',
    component: SellTicketsWithUs,
    exact: true
  },
  {
    path: '/corporate',
    component: LandingPage,
    exact: true
  },

  {
    path: '/explore/articles',
    component: ArticleList,
    exact: true
  },
  {
    path: '/explore/1/:id',
    component: Article,
    exact: true
  },
  {
    path: '/explore/2/:id',
    component: Festival,
    exact: true
  },
  {
    path: '/explore',
    component: Explore,
    exact: true
  },
  {
    path: '*',
    component: PageNotFound
  }
];

export default routes;
