import React from "react";

const brands = [
  {
    name: "Brand One",
    image: "https://images.unsplash.com/photo-1635021741080-b2dd270712c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Innovative solutions for modern challenges.",
  },
  {
    name: "Brand Two",
    image: "https://images.unsplash.com/photo-1625138644438-47f3b3c66880?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Delivering quality products since 1990.",
  },
  {
    name: "Brand Two",
    image: "https://images.unsplash.com/photo-1625138644438-47f3b3c66880?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Delivering quality products since 1990.",
  },
  {
    name: "Brand Three",
    image: "https://images.unsplash.com/photo-1517639191054-4d31c81e0cc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pioneers in technology and design.",
  },
  {
    name: "Brand Four",
    image: "https://images.unsplash.com/photo-1729813973906-096f47ab8dcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Global leaders in sustainability and growth.",
  },
  {
    name: "Brand Four",
    image: "https://images.unsplash.com/photo-1729813973906-096f47ab8dcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Global leaders in sustainability and growth.",
  },
  {
    name: "Brand Four",
    image: "https://images.unsplash.com/photo-1729813973906-096f47ab8dcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Global leaders in sustainability and growth.",
  },
  {
    name: "Brand Four",
    image: "https://images.unsplash.com/photo-1729813973906-096f47ab8dcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Global leaders in sustainability and growth.",
  },
];

const Brands = () => {
  return (
    <div className="min-h-screen bg-black-500 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-200 mb-10">
          Our Brands
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-400 mb-2">
                  {brand.name}
                </h3>
                <p className="text-gray-600 text-sm">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
