import Home from '../Home'
import Event from '../Event'
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
  }
]

export default routes