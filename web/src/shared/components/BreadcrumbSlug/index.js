import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
const BreadcrumbSlug = ({ breadcrumbSlug }) => {
  return (
    <div>
      <ul>
        {breadcrumbSlug &&
          breadcrumbSlug.map((link, i) => {
            return (
              <li key={link.title} className="breadcrumb-slug">
                {breadcrumbSlug.length === i + 1 ? (
                  link.title
                ) : (
                  <Link to={link.path}>{link.title}/</Link>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default BreadcrumbSlug;
