import Utilities from '../utilities';
class Constants {
  static WEBSITE_URL = 'http://sistic.com';
  // static API_URL =
  //   typeof navigator === 'undefined' || typeof window === 'undefined'
  //     ? 'http://192.168.10.197:8081'
  //     : '';
  static API_URL = '';
  static DOC_ROOT_URL = '/sistic/docroot/';
  static BASE_URL = this.API_URL + this.DOC_ROOT_URL;
  static INSTAGRAM_ACCESS_TOKEN =
    '1108663717.0a26e12.3b399a8ef949401c91c25755caf3ae39';
  static MOBILE_BREAK_POINT = 767;
  static CLIENT = 1;
  // static LIMIT = 4;
  static GOOGLE_MAP_API_KEY = 'AIzaSyAuQ9CrtvBbrYCVG5XZrLM1s-ZBH368Y04';
  static MAP_PATH =
    'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z';
  static SOURCE_FROM_WEBSITE = 1;
  static SOURCE_FROM_MOBILE_RESPONSIVE = 3;
  static LIMIT = Utilities.mobileAndTabletcheck() ? 6 : 12;
  static SITE_KEY = '6LedScEUAAAAALMkHkGFibsc4yNxrajcV6wijeuP';
  static SISTIC_APP_STORE_URL =
    'https://itunes.apple.com/sg/app/sistic/id500601166?mt=8';
  static SISTIC_PLAY_STORE_URL =
    'https://play.google.com/store/apps/details?id=com.rainmakerlabs.sistic&hl=en';
  static SISTIC_MY_ACCOUNT_URL =
    'https://ticketing.stixcloudtest.com/sistic/patron/management';
  // static GO_TO_URL = location.origin;
  static SISTIC_LOGIN_URL = `https://ticketing.stixcloudtest.com/sistic/loginredirect?gotoUrl=`;
  static SISTIC_LOGOUT_URL =
    'https://ticketing.stixcloudtest.com/sistic/logout';

  static SISTIC_GO_TO_CART =
    'https://ticketing.stixcloudtest.com/sistic/confirm/shoppingcart';
  static FETCH_CART_DATA_URL =
    'https://ticketing.stixcloudtest.com/sistic/patron/checkcart/portal';
}

export default Constants;

// AIzaSyAYMtOiqk5Vxj-HCi_hr89QQeVTF90JNdA
