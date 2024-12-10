import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-5">
      <div className="bg-gray-500 shadow-lg rounded-lg max-w-3xl w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Info Section */}
          <div className="bg-gray-900 text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">
              We're here to help! Reach out to us anytime, and we’ll happily answer your questions.
            </p>
            <ul className="space-y-4">
              <li>
                <strong>Email:</strong> contact@yourcompany.com
              </li>
              <li>
                <strong>Phone:</strong> +1 234 567 890
              </li>
              <li>
                <strong>Address:</strong> 123 Main Street, City, Country
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-200">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
