import Home from '../Home'
import Events from '../Events'
import EventsDetail from '../Events/EventsDetail'
import HomeService from '../../shared/services/HomeService'
import PageNotFound from '../PageNotFound/index';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
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
    exact :true,
    fetchInitialData: (path = '') => HomeService.getData()
  },
  {
    path : "*",
    component: PageNotFound
  }
]

export default routes
