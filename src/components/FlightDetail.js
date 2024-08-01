import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function FlightDetail() {
  const [flight, setFlight] = useState({
    flightNumber:"",
    origin:"",
    destination:"",
    departureTime:"",
    arrivalTime:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadFlight();
  }, []);

  const loadFlight = async () => {
    const result = await axios.get(`http://localhost:8080/flight/${id}`);
    setFlight(result.data);
  };

  return (
    <div className="container mx-auto px-4 py-6">
  <div className="max-w-lg mx-auto border border-gray-200 rounded-lg shadow-lg p-6 mt-6">
    <h2 className="text-2xl font-semibold text-center mb-4">Flight Details</h2>

    <div className="bg-white rounded-lg shadow-md">
      <div className="bg-gray-100 p-4 border-b border-gray-200">
        <span className="text-lg font-medium">Details of Flight ID: {flight.id}</span>
      </div>
      <ul className="list-none p-4">
        <li className="py-2 border-b border-gray-200">
          <span className="font-semibold">Flight Number:</span> {flight.flightNumber}
        </li>
        <li className="py-2 border-b border-gray-200">
          <span className="font-semibold">Origin:</span> {flight.origin}
        </li>
        <li className="py-2 border-b border-gray-200">
          <span className="font-semibold">Destination:</span> {flight.destination}
        </li>
        <li className="py-2 border-b border-gray-200">
          <span className="font-semibold">Departure Time:</span> {flight.departureTime}
        </li>
        <li className="py-2">
          <span className="font-semibold">Arrival Time:</span> {flight.arrivalTime}
        </li>
      </ul>
    </div>
    <Link
      className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600"
      to={"/flights"}
    >
      Back to Home
    </Link>
  </div>
</div>
  );
}