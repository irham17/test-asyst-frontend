import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-full flex flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-100 shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Welcome to Airline Ticket Reservation
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Easily search, book, and manage your flights with our user-friendly application.
        </p>
        <div className="flex flex-col items-center">
          <Link
            to="/flights"
            className="w-full text-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300 mb-4"
          >
            Search Flights
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
