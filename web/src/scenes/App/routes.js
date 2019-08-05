import Home from '../Home'
import Events from '../Events'
import EventsDetail from '../Events/EventsDetail'
import HomeService from '../../shared/services/HomeService'

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
    fetchInitialData: (path = '') => HomeService.getData()
  },

]

export default routes
