import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  let freeLink = "";

  const breadcrumb = location.pathname
    .split("/")
    .filter((crumb) => !!crumb)
    .map((crumb) => {
      freeLink += `/${crumb}`;
      return (
        <span key={crumb} className="crumb text-white">
          <Link to={crumb}>{crumb}</Link>
        </span>
      );
    });

  console.log(breadcrumb);

  return <span className="breadcrumbs">{breadcrumb}</span>;
};

export default Breadcrumbs;

/*
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  const breadcrumbs = location.pathname
    .split("/")
    .filter((breadcrumb) => breadcrumb !== "")
    .map((breadcrumb) => {
      currentLink += `/${breadcrumb}`;

      return (
        <span key={breadcrumb} className="crumb ">
          <Link to={currentLink}>{breadcrumb}</Link>
        </span>
      );
    });

  return <div className="breadcrumbs ">{breadcrumbs}</div>;
};

export default Breadcrumbs;
*/
