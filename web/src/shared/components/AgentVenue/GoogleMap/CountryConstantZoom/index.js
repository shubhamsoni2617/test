export default (country, setMarkerPosition, setZoomValue) => {
  switch (country) {
    case 'Singapore':
      setMarkerPosition({
        lat: 1.3143344,
        lng: 103.778818
      });
      setZoomValue(11);

      break;
    case 'Malaysia':
      setMarkerPosition({
        lat: 4.3842778,
        lng: 101.8236839
      });
      setZoomValue(6);
      break;
    case 'Indonesia':
      setMarkerPosition({
        lat: -4.1387633,
        lng: 122.2170101
      });
      setZoomValue(5);
      break;
    case 'Thailand':
      setMarkerPosition({
        lat: 15.9788149,
        lng: 101.5057835
      });
      setZoomValue(6);
      break;
    case 'Vietnam':
      setMarkerPosition({
        lat: 13.3104817,
        lng: 108.2777181
      });
      setZoomValue(6);
      break;
    case 'Macau':
      setMarkerPosition({
        lat: 22.1974038,
        lng: 113.5446799
      });
      setZoomValue(10);
      break;
    case 'Taiwan':
      setMarkerPosition({
        lat: 23.6103744,
        lng: 121.4909552
      });
      setZoomValue(7);
      break;
    case 'South Korea':
      setMarkerPosition({
        lat: 36.3761305,
        lng: 128.143116
      });
      setZoomValue(7);
      break;
  }
};
