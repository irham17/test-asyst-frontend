import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BookingDetail() {
  const [booking, setBooking] = useState({
    nik:"",
    passengerName:"",
    age:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadBooking();
  }, []);

  const loadBooking = async () => {
    const result = await axios.get(`http://localhost:8080/booking/${id}`);
    setBooking(result.data);
  };

  return (
    <div className="container mx-auto px-4 py-6">
  <div className="max-w-lg mx-auto border border-gray-200 rounded-lg shadow-lg p-6 mt-6">
    <h2 className="text-2xl font-semibold text-center mb-4">Booking Details</h2>

    <div className="bg-white rounded-lg shadow-md">
      <div className="bg-gray-100 p-4 border-b border-gray-200">
        <span className="text-lg font-medium">Details of Booking ID: {booking.id}</span>
      </div>
      <ul className="list-none p-4">
        <li className="py-2 border-b border-gray-200">
          <span className="font-semibold">NIK:</span> {booking.nik}
        </li>
        <li className="py-2 border-b border-gray-200">
          <span className="font-semibold">Passenger Name:</span> {booking.passengerName}
        </li>
        <li className="py-2 border-b border-gray-200">
          <span className="font-semibold">Age:</span> {booking.age}
        </li>
      </ul>
    </div>
    <Link
      className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600"
      to={"/booking"}
    >
      Back to Home
    </Link>
  </div>
</div>
  );
}