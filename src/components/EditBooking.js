import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditBooking() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [booking, setBooking] = useState({
    nik: "",
    passengerName: "",
    age: "",
  });

  const { nik, passengerName, age } = booking;

  const onInputChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadBooking();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/booking/${id}`, booking);
    navigate("/booking");
  };

  const loadBooking = async () => {
    const result = await axios.get(`http://localhost:8080/booking/${id}`);
    setBooking(result.data);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-center">
        <div className="w-full max-w-md border rounded p-6 mt-4 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Edit Booking</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-4">
              <label htmlFor="Nik" className="block text-sm font-medium text-gray-700">
                NIK
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your NIK"
                name="nik"
                value={nik}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                Passenger Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your name"
                name="name"
                value={passengerName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your age"
                name="age"
                value={age}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
              >
                Submit
              </button>
              <Link
                className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
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