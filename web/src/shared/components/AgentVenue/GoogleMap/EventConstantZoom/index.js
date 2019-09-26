export default (country, setZoomValue) => {
  switch (country) {
    case 'Singapore':
      setZoomValue(14);
      break;
    case 'Malaysia':
      setZoomValue(7);
      break;
    case 'Indonesia':
      setZoomValue(6);
      break;
    case 'Thailand':
      setZoomValue(7);
      break;
    case 'Vietnam':
      setZoomValue(7);
      break;
    case 'Macau':
      setZoomValue(4);
      break;
    case 'Taiwan':
      setZoomValue(7);
      break;
    case 'South Korea':
      setZoomValue(7);
      break;
  }
};
