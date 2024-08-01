import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [flights, setFlights] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    loadFlights();
  }, []);

  const loadFlights = async () => {
    const result = await axios.get("http://localhost:8080/flights");
    setFlights(result.data);
    setFilteredFlights(result.data);
  };

  const handleSearch = () => {
    const filtered = flights.filter((flight) =>
      flight.id.toString().includes(searchId)
    );
    setFilteredFlights(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-4 flex">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Search by Flight ID"
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-lg border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Flight Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Origin
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Destination
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Departure Time
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Arrival Time
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
            {filteredFlights.map((flight, index) => (
              <tr key={flight.id}>
                <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {flight.flightNumber}
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {flight.origin}
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {flight.destination}
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {flight.departureTime}
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {flight.arrivalTime}
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium">
                  <div className="flex justify-center space-x-2">
                    <Link
                      className="text-indigo-600 hover:text-indigo-900"
                      to={`/flightdetail/${flight.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="text-green-600 hover:text-green-900"
                      to="/addbooking"
                    >
                      Book
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
