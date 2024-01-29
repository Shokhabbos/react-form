import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          404 <span className="text-gray-700">Page Not Found</span>
        </h1>
        <p className="text-lg text-gray-600">{error}</p>
      </div>
    </div>
  );
};

export default NotFound;
