import Home from '../Home'
import Event from '../Event'
import Promotions from '../Promotions'
import HomeService from '../../shared/services/HomeService'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/event',
    component: Event,
    fetchInitialData: (path = '') => HomeService.getData()
  },
  {
    path: '/promotions',
    component: Promotions
  }
]

export default routes