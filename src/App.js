import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import FlightDetail from "./components/FlightDetail";
import Navbar from "./components/Navbar";
import AddBooking from "./components/AddBooking";
import BookingDetail from "./components/BookingDetail";
import EditBooking from "./components/EditBooking";
import Booking from "./components/Booking";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/flights" element={<Home />} />
          <Route exact path="/flightdetail/:id" element={<FlightDetail />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/bookingdetail/:id" element={<BookingDetail />} />
          <Route exact path="/editbooking/:id" element={<EditBooking />} />
          <Route exact path="/addbooking" element={<AddBooking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
