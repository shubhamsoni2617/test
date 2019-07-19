import Home from '../Home'
import Events from '../Events'
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
  }
]

export default routes