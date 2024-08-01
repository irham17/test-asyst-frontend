import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddBooking() {
  let navigate = useNavigate();

  const [booking, setBooking] = useState({
    passengerName: "",
    nik: "",
    age: "",
  });

  const { passengerName, nik, age } = booking;

  const onInputChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/booking", booking);
    navigate("/booking");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-center">
        <div className="w-full max-w-md border rounded p-6 mt-4 shadow-lg">
          <h2 className="text-center text-2xl font-semibold mb-6">
            New Booking
          </h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Passenger Name
              </label>
              <input
                type="text"
                className="form-input w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                name="name"
                value={passengerName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="nik"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                NIK
              </label>
              <input
                type="text"
                className="form-input w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your NIK"
                name="nik"
                value={nik}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Age
              </label>
              <input
                type="text"
                className="form-input w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your age"
                name="age"
                value={age}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
              <Link
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                to="/"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
