import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Booking() {
  const [bookings, setBookings] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const result = await axios.get("http://localhost:8080/booking");
    setBookings(result.data);
  };

  const deleteBooking = async (id) => {
    await axios.delete(`http://localhost:8080/booking/${id}`);
    loadBookings();
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-lg border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                NIK
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Passenger Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Age
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking, index) => (
              <tr key={booking.id}>
                <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {booking.nik}
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {booking.passengerName}
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {booking.age}
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium flex justify-center space-x-2">
                  <Link
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    to={`/bookingdetail/${booking.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    to={`/editbooking/${booking.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => deleteBooking(booking.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}