import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  const breadcrumbs = location.pathname
    .split("/")
    .filter((breadcrumb) => breadcrumb !== "")
    .map((breadcrumb) => {
      currentLink += `/${breadcrumb}`;
      const bread = breadcrumb.replace(/%20/g, " ");

      return (
        <span key={breadcrumb} className="crumb underline">
          <Link to={currentLink}>{bread}</Link>
        </span>
      );
    });

  return (
    <div className="breadcrumbs rounded-md  p-4 text-2xl text-blue-500 no-underline ">
      {breadcrumbs}
    </div>
  );
};

export default Breadcrumbs;
