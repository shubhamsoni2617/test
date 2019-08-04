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
    path: '/events',
    component: Events,
    exact :true,
    fetchInitialData: (path = '') => HomeService.getData()
  },
  {
    path: '/events-detail',
    exact :true,
    component: EventsDetail,
  },
  {
    path : "*",
    component: PageNotFound
  }
]

export default routes