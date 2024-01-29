import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto mt-8 p-6 bg-blue-500 rounded-md text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Home Page</h1>
      <p className="text-lg leading-relaxed mb-6">
        Thank you for visiting our website. Explore the amazing content and
        services we offer to make your online experience delightful.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Featured Products Section */}
        <div className="bg-indigo-100 p-4 rounded-md shadow-md text-indigo-800">
          <h2 className="text-xl font-semibold mb-2">Featured Products</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Product 1:</strong> High-quality item with advanced
              features.
            </li>
            <li>
              <strong>Product 2:</strong> Affordable and durable solution for
              your needs.
            </li>
            <li>
              <strong>Product 3:</strong> Cutting-edge technology for a modern
              lifestyle.
            </li>
          </ul>
        </div>

        {/* Latest News Section */}
        <div className="bg-yellow-200 p-4 rounded-md shadow-md text-yellow-800">
          <h2 className="text-xl font-semibold mb-2">Latest News</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>News Article 1:</strong> Exciting developments in our
              industry.
            </li>
            <li>
              <strong>News Article 2:</strong> Company achievements and
              milestones.
            </li>
            <li>
              <strong>News Article 3:</strong> Insights into upcoming trends and
              innovations.
            </li>
          </ul>
        </div>

        {/* Additional Section */}
        <div className="bg-green-200 p-4 rounded-md shadow-md text-green-800">
          <h2 className="text-xl font-semibold mb-2">Additional Section</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-purple-200 p-6 rounded-md shadow-md text-purple-800">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-4">
          Explore our website and discover a world of possibilities.
        </p>
        <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
