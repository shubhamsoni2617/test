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
    path: '/events',
    component: Events,
    fetchInitialData: (path = '') => HomeService.getData()
  },
  {
    path: '/events-detail',
    component: EventsDetail,
  }
]

export default routes