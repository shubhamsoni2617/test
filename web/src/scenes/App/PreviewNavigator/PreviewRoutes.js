import Home from '../../Home';
import Events from '../../Events';
import EventsDetail from '../../EventsDetail';
import HomeService from '../../../shared/services/HomeService';
import Promotions from '../../Promotions';
import PageNotFound from '../../PageNotFound/index';
import Attraction from '../../Attraction';
import Search from '../../Home/Search';
import Explore from '../../Explore/LandingPage';
import ArticleList from '../../Explore/ArticleList';
import Article from '../../Explore/Article';
import Festival from '../../Explore/Festival';

const privateRoutes = [
  {
    path: '/preview/search',
    component: Search,
    exact: true
  },
  {
    path: '/preview/explore/articles',
    component: ArticleList,
    exact: true
  },
  {
    path: '/preview/explore/1/:id',
    component: Article,
    exact: true
  },
  {
    path: '/preview/explore/2/:id',
    component: Festival,
    exact: true
  },
  {
    path: '/preview/explore',
    component: Explore,
    exact: true
  },
  {
    path: '/preview/events/search',
    exact: true,
    component: Events
  },
  {
    path: '/preview/events/:icc',
    exact: true,
    component: EventsDetail
  },
  {
    path: '/preview/events',
    component: Events,
    exact: true,
    fetchInitialData: (path = '') => HomeService.getData()
  },
  {
    path: '/preview/promotions',
    exact: true,
    component: Promotions
  },
  {
    path: '/preview/promotions/:promoId',
    component: Promotions
  },
  {
    path: '/preview/attractions',
    exact: true,
    component: Attraction
  },
  {
    path: '/preview',
    exact: true,
    component: Home
  },
  {
    path: '*',
    component: PageNotFound
  }
];

export default privateRoutes;
