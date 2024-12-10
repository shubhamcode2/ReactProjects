import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-black-500 flex items-center justify-center py-10 px-5">
      <div className="bg-gray-700 shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div
          className="h-64 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578543882279-a252b87bc763?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
          }}
        ></div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            About Us
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Welcome to our website! We are passionate about delivering the best services and
            experiences to our customers. Our team is dedicated to excellence, innovation,
            and ensuring your satisfaction.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Our mission is to create impactful solutions that address real-world challenges.
            From providing top-notch services to building strong relationships, we strive to
            make a difference in everything we do.
          </p>
          <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
