import Utilities from '../utilities';

class Constants {
  static WEBSITE_URL = 'http://sistic.com';
  static API_URL =
    typeof navigator === 'undefined' || typeof window === 'undefined'
      ? 'http://192.168.10.197'
      : '';
  static BASE_URL = this.API_URL + '/sistic/docroot/';
  static INSTAGRAM_ACCESS_TOKEN =
    '3225660226.f09c095.d66beeb477664e4091320bcfe6e3991a';
  static MOBILE_BREAK_POINT = 767;
  static CLIENT = 1;
  static LIMIT = 4;
  static GOOGLE_MAP_API_KEY = 'AIzaSyAuQ9CrtvBbrYCVG5XZrLM1s-ZBH368Y04';
  static MAP_PATH =
    'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z';
  static SOURCE_FROM_WEBSITE = 1;
  static SOURCE_FROM_MOBILE_RESPONSIVE = 3;
  static LIMIT = Utilities.mobileAndTabletcheck() ? 6 : 9;
  static SITE_KEY = '6LedScEUAAAAALMkHkGFibsc4yNxrajcV6wijeuP';
}

export default Constants;

// AIzaSyAYMtOiqk5Vxj-HCi_hr89QQeVTF90JNdA
