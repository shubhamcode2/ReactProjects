import React from 'react'

function Home() {
    return (
        <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center text-white max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website!</h1>
          <p className="text-lg mb-6">
            Explore our services, learn more about us, and get in touch. We’re here to help you succeed.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    )
}

export default Home