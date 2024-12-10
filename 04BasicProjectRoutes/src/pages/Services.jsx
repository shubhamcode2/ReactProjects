import React from "react";

const services = [
  {
    title: "Web Development",
    description: "Build responsive, high-quality websites tailored to your needs.",
    icon: "🌐",
  },
  {
    title: "App Development",
    description: "Create user-friendly mobile and desktop applications.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Design seamless and intuitive user interfaces for your projects.",
    icon: "🎨",
  },
  {
    title: "SEO Optimization",
    description: "Boost your website's ranking and reach the right audience.",
    icon: "📈",
  },
  {
    title: "Digital Marketing",
    description: "Grow your brand with innovative digital marketing strategies.",
    icon: "💻",
  },
  {
    title: "Cloud Solutions",
    description: "Optimize your workflow with secure and scalable cloud services.",
    icon: "☁️",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black-500 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-200 mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900  shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
