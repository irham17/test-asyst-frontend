import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="text-xl font-semibold" to="/">
            Airline Ticket Reservation
          </Link>
          <button
            className="lg:hidden text-white focus:outline-none"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <div className="hidden lg:flex space-x-4">
            <Link
              className="bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition"
              to="/booking"
            >
              Bookings
            </Link>
            <Link
              className="bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition"
              to="/flights"
            >
              Flights
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
