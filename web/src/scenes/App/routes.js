import Home from '../Home'
import Events from '../Events'
import EventsDetail from '../Events/EventsDetail'
import HomeService from '../../shared/services/HomeService'
import Promotions from '../Promotions';
import PageNotFound from '../PageNotFound/index';
import Attraction from '../Attraction'

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
    path: '/promotions/:promoId',
    component: Promotions,
  },
  {
    path: '/promotions',
    exact : true,
    component: Promotions,
  },

  {
    path: '/attraction',
    component: Attraction,
    exact : true
  },
  {
    path : "*",
    component: PageNotFound
  }
]

export default routes
