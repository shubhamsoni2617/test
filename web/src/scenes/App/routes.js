import Home from '../Home'
import Events from '../Events'
import EventsDetail from '../Events/EventsDetail'
import HomeService from '../../shared/services/HomeService'
import Promotions from '../Promotions';
import PageNotFound from '../PageNotFound/index';

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
    exact : true,
    component: Events,
    fetchInitialData: (path = '') => HomeService.getData()
  },
  {
    path: '/promotions',
    component: Promotions,
  },
  {
    path : "*",
    component: PageNotFound
  }
]

export default routes
