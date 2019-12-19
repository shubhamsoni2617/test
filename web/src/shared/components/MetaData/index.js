import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HomeService from '../../services/HomeService';

export default function MetaData({ location, data }) {
  const [metaData, setMetaData] = useState(
    (data &&
      data.response &&
      data.response.metaData &&
      data.response.metaData.data) ||
    {}
  );
  useEffect(() => {
    if (window.__INITIAL_DATA__) {
      setMetaData(
        (window.__INITIAL_DATA__.metaData &&
          window.__INITIAL_DATA__.metaData.data) ||
        {}
      );
      delete window.__INITIAL_DATA__.metaData;
    } else {
      //Call Meta data API
      getMetaData(location.pathname).then(response => {
        if (response && response.data && response.data.data) {
          setMetaData(response.data.data || {});
        }
      });
    }
  }, [location]);
  const getMetaData = url => {
    return HomeService.getMetadata(url && url.substr(1));
  };

  const titleContent = metaData && metaData.title && metaData.title.replace(/(<([^>]+)>)/gi, '');
  // if (!title) return null;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{titleContent}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  );
}
