import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HomeService from '../../services/HomeService';

export default function MetaData({ location, data }) {
  const [title, setTitle] = useState(data && data.title ? data.title : '');
  useEffect(() => {
    if (
      window.__INITIAL_DATA__ &&
      window.__INITIAL_DATA__.metaData &&
      window.__INITIAL_DATA__.metaData.data &&
      window.__INITIAL_DATA__.metaData.data.title
    ) {
      setTitle(window.__INITIAL_DATA__.metaData.data.title);
      delete window.__INITIAL_DATA__.metaData;
    } else {
      getMetaData(location.pathname).then(response => {
        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.title
        ) {
          setTitle(response.data.data.title);
        }
      });
    }
  }, [location]);
  const getMetaData = url => {
    return HomeService.getMetadata(url && url.substr(1));
  };
  // if (!title) return null;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  );
}
