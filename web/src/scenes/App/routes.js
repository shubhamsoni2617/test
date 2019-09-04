import Home from "../Home";
import Events from "../Events";
import EventsDetail from "../Events/EventsDetail";
import HomeService from "../../shared/services/HomeService";
import Promotions from "../Promotions";
import PageNotFound from "../PageNotFound/index";
import Agent from "../Agent";
import Attraction from "../Attraction";
import WhereBuyTickets from "../WhereBuyTickets";
import GiftVouchers from "../GiftVouchers";
import Faq from "../Faq";
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
    path: "/agents",
    component: Agent,
    exact: true
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
    path: "/gift-vouchers",
    component: GiftVouchers,
    exact: true
  },
  {
    path: "/faq/:id",
    component: Faq,
    exact: true
  },
  {
    path: "*",
    component: PageNotFound
  }
];

export default routes;
