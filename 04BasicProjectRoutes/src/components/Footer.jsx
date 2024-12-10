import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition duration-300"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-4">
          <p className="text-sm">
            Built with ❤️ using <span className="font-bold">React</span> and{" "}
            <span className="font-bold">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
