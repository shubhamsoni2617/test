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
    if (window.__INITIAL_DATA__ && window.__INITIAL_DATA__.metaData) {
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
  // if (!title) return null;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      {metaData.title && <title>{metaData.title}</title>}
      {metaData.description && (
        <meta name="description" content={metaData.description} />
      )}

      {metaData.article_author && (
        <meta name="author" content={metaData.article_author} />
      )}
      {metaData.product_price_currency && (
        <meta name="currency" content={metaData.product_price_currency} />
      )}
      {metaData.product_price_amount && (
        <meta name="price" content={metaData.product_price_amount} />
      )}
      {metaData.generator && (
        <meta name="generator" content={metaData.generator} />
      )}
      {metaData.geo_position && (
        <meta name="geo.position" content={metaData.geo_position} />
      )}
      {metaData.geo_region && (
        <meta name="geo.region" content={metaData.geo_region} />
      )}
      {metaData.geo_placename && (
        <meta name="geo.placename" content={metaData.geo_placename} />
      )}
      {metaData.article_publisher && (
        <meta name="publisher" content={metaData.article_publisher} />
      )}
      {metaData.abstract && (
        <meta name="abstract" content={metaData.abstract} />
      )}
      {metaData.article_section && (
        <meta name="article_section" content={metaData.article_section} />
      )}
      {metaData.article_tag && (
        <meta name="article_tag" content={metaData.article_tag} />
      )}
      {metaData.content_language && (
        <meta name="content_language" content={metaData.content_language} />
      )}
      {metaData.keywords && (
        <meta name="keywords" content={metaData.keywords} />
      )}

      {metaData.canonical_url && (
        <link rel="canonical" href={metaData.canonical_url} />
      )}
      {metaData.image_src && (
        <link rel="preload" href={metaData.image_src} as="image"></link>
      )}
      {metaData.og_description && (
        <meta property="og:description" content={metaData.og_description} />
      )}
      {metaData.og_image && (
        <meta property="og:image" content={metaData.og_image} />
      )}
      {metaData.og_title && (
        <meta property="og:title" content={metaData.og_title} />
      )}

      {metaData.fb_app_id && (
        <meta property="fb:app_id" content={metaData.fb_app_id} />
      )}
      {metaData.fb_pages && (
        <meta property="og:pages" content={metaData.fb_pages} />
      )}
      {metaData.fb_admins && (
        <meta property="article:author" content={metaData.fb_admins} />
      )}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@site_account" />
      {metaData.twitter_cards_creator_id && (
        <meta
          name="twitter:creatorId"
          content={metaData.twitter_cards_creator_id}
        />
      )}

      {metaData.twitter_cards_creator && (
        <meta name="twitter:creator" content={metaData.twitter_cards_creator} />
      )}

      {metaData.twitter_cards_description && (
        <meta
          name="twitter:description"
          content={metaData.twitter_cards_description}
        />
      )}
      {metaData.twitter_cards_image && (
        <meta name="twitter:image" content={metaData.twitter_cards_image} />
      )}
      {metaData.twitter_cards_page_url && (
        <meta name="twitter:url" content={metaData.twitter_cards_page_url} />
      )}
      {metaData.twitter_cards_site && (
        <meta name="twitter:site" content={metaData.twitter_cards_site} />
      )}
      {metaData.twitter_cards_site_id && (
        <meta name="twitter:siteId" content={metaData.twitter_cards_site_id} />
      )}
      {metaData.twitter_cards_title && (
        <meta name="twitter:title" content={metaData.twitter_cards_title} />
      )}
      {metaData.twitter_cards_type && (
        <meta name="twitter:cardType" content={metaData.twitter_cards_type} />
      )}
    </Helmet>
  );
}
