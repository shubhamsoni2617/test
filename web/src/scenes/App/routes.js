import Home from '../Home'
import Events from '../Events'
import EventsDetail from '../Events/EventsDetail'
import HomeService from '../../shared/services/HomeService'
import Promotions from '../Promotions';
import PageNotFound from '../PageNotFound/index';
import Agent from '../Agent';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/events/search',
    exact : true,
    component: Events,
  },
  {
    path: '/events/:icc',
    exact : true,
    component: EventsDetail,
  },
  {
    path: '/events',
    component: Events,
    exact : true,
    fetchInitialData: (path = '') => HomeService.getData()
  },
  {
    path: '/agents',
    component: Agent,
    exact : true,
  },
  {
    path: '/promotions/:promo_id',
    component: Promotions,
  },
  {
    path: '/promotions',
    exact : true,
    component: Promotions,
  },

  {
    path : "*",
    component: PageNotFound
  }
]

export default routes
