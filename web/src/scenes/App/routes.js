import Home from '../Home'
import Event from '../Event'
import HomeService from '../../shared/services/HomeService'
import PageNotFound from '../PageNotFound/index.1';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/event',
    exact :true,  
    component: Event,
    fetchInitialData: (path = '') => HomeService.getData()
  },
  {
    component: PageNotFound
  }
]

export default routes