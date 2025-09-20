import React from "react";

const Library = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-center items-center py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-purple-700">BookNest</h1>
      </nav>

      {/* Split Layout */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-10">
        {/* Left Image */}
        <img
          src="aaaa.jpg"
          alt="Library"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />

        {/* Right Text */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dive Into the World of Books
          </h2>
          <p className="text-gray-600 mb-6">
            Discover thousands of books across every genre. Expand your
            knowledge and imagination with our curated collection.
          </p>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Browse Collection
          </button>
        </div>
      </section>
    </main>
  );
};

export default Library;
