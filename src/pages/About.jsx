import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-8 p-6 bg-purple-500 rounded-md text-white">
      <h2 className="text-3xl font-semibold mb-4">About Us</h2>
      <section className="mb-6 p-4 rounded-md hover:bg-purple-600 transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-lg leading-relaxed">
          Welcome to our website! We are passionate about providing information
          and services that make a difference. Our team is dedicated to
          delivering high-quality content and experiences to our users.
        </p>
      </section>
      <section className="mb-6 p-4 rounded-md hover:bg-teal-600 transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold mb-2">Explore</h3>
        <p className="text-lg leading-relaxed">
          Explore our website to learn more about our products, services, and
          the amazing team behind it. If you have any questions or feedback,
          feel free to contact us.
        </p>
      </section>
      <section className="p-4 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold mb-2">Join Us</h3>
        <p className="text-lg leading-relaxed">
          Join us on this journey towards knowledge and discovery. Together, we
          can create a better and more informed world.
        </p>
      </section>
    </div>
  );
};

export default About;
