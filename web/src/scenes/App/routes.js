import Home from '../Home'
import Events from '../Events'
import EventsDetail from '../Events/EventsDetail'
import HomeService from '../../shared/services/HomeService'
import Promotions from '../Promotions';
import PageNotFound from '../PageNotFound/index';
import Agents from '../Agents';
import Attraction from '../Attraction'
import Venues from '../Venues';
import WhereBuyTickets from "../WhereBuyTickets";
import TermsConditions from "../TermsConditions";
import PrivacyPolicy from "../PrivacyPolicy";
import GiftVouchers from "../GiftVouchers";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/events/search",
    exact: true,
    component: Events
  },
  {
    path: "/events/:icc",
    exact: true,
    component: EventsDetail
  },
  {
    path: "/events",
    component: Events,
    exact: true,
    fetchInitialData: (path = "") => HomeService.getData()
  },
  {
    path: '/agents',
    component: Agents,
    exact : true,
  },
  {
    path: "/promotions/:promoId",
    component: Promotions
  },
  {
    path: "/promotions",
    exact: true,
    component: Promotions
  },
  {
    path: "/where-to-buy-tickets",
    exact: true,
    component: WhereBuyTickets
  },
  {
    path: "/attraction",
    component: Attraction,
    exact: true
  },
  {
    path: "/terms-and-conditions",
    component: TermsConditions,
    exact: true
  },
  {
    path: "/privacy",
    component: PrivacyPolicy,
    exact: true
  },
  {
    path: "/gift-vouchers",
    component: GiftVouchers,
    exact: true
  },
  {
    path: '/venues',
    component: Venues,
    exact : true
  },
  {
    path : "*",
    component: PageNotFound
  }
];

export default routes;
