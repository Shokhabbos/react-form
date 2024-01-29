const About = () => {
  return (
    <div className="container mx-auto mt-8 rounded-md bg-purple-500 p-6 text-white">
      <h2 className="mb-4 text-3xl font-semibold">About Us</h2>
      <section className="mb-6 rounded-md p-4 transition duration-300 ease-in-out hover:bg-purple-600">
        <h3 className="mb-2 text-xl font-semibold">Our Mission</h3>
        <p className="text-lg leading-relaxed">
          Welcome to our website! We are passionate about providing information
          and services that make a difference. Our team is dedicated to
          delivering high-quality content and experiences to our users.
        </p>
      </section>
      <section className="mb-6 rounded-md p-4 transition duration-300 ease-in-out hover:bg-teal-600">
        <h3 className="mb-2 text-xl font-semibold">Explore</h3>
        <p className="text-lg leading-relaxed">
          Explore our website to learn more about our products, services, and
          the amazing team behind it. If you have any questions or feedback,
          feel free to contact us.
        </p>
      </section>
      <section className="rounded-md p-4 transition duration-300 ease-in-out hover:bg-indigo-600">
        <h3 className="mb-2 text-xl font-semibold">Join Us</h3>
        <p className="text-lg leading-relaxed">
          Join us on this journey towards knowledge and discovery. Together, we
          can create a better and more informed world.
        </p>
      </section>
    </div>
  );
};

export default About;
