// src/App.jsx
import React, { useState } from "react";
import SeatGrid from "./component/SeatGrid";
import "./App.css";
import Navbar from "./component/Navbar";



const App = () => {

  const [seats, setSeats] = useState([
    { id: 35, isBooked: false, isSelected: false },
    { id: 34, isBooked: false, isSelected: false },
    { id: 33, isBooked: false, isSelected: false },
    { id: 32, isBooked: false, isSelected: false },
    { id: 31, isBooked: false, isSelected: false },
    { id: 30, isBooked: false, isSelected: false },
    { id: 29, isBooked: false, isSelected: false },
    { id: 28, isBooked: false, isSelected: false },
    { id: 27, isBooked: false, isSelected: false },
    { id: 26, isBooked: false, isSelected: false },
    { id: 25, isBooked: false, isSelected: false },
    { id: 24, isBooked: false, isSelected: false },
    { id: 23, isBooked: false, isSelected: false },
    { id: 22, isBooked: false, isSelected: false },
    { id: 21, isBooked: false, isSelected: false },
    { id: 20, isBooked: false, isSelected: false },
    { id: 19, isBooked: false, isSelected: false },
    { id: 18, isBooked: false, isSelected: false },
    { id: 17, isBooked: false, isSelected: false },
    { id: 16, isBooked: false, isSelected: false },
    { id: 15, isBooked: false, isSelected: false },
    { id: 14, isBooked: false, isSelected: false },
    { id: 13, isBooked: false, isSelected: false },
    { id: 12, isBooked: false, isSelected: false },
    { id: 11, isBooked: false, isSelected: false },
    { id: 10, isBooked: false, isSelected: false },
    { id: 9, isBooked: false, isSelected: false },
    { id: 8, isBooked: false, isSelected: false },
    { id: 7, isBooked: true, isSelected: false },
    { id: 6, isBooked: false, isSelected: false },
    { id: 5, isBooked: false, isSelected: false },
    { id: 4, isBooked: false, isSelected: false },
    { id: 3, isBooked: false, isSelected: false },
    { id: 2, isBooked: false, isSelected: false },
    { id: 1, isBooked: false, isSelected: false },
  ]);

  const ticketPrice = 300;

  const handleSeatClick = (id) => {
    setSeats(
      seats.map((seat) =>
        seat.id === id ? { ...seat, isSelected: !seat.isSelected } : seat
      )
    );
  };
 
  const calculateTotalCost = () => {
    const selectedSeats = seats.filter(seat => seat.isSelected);
    return selectedSeats.length * ticketPrice;
  };
  return (

    <div className="App">
    <Navbar/>
     
      <h1>Cinema Seat Booking</h1>
      <SeatGrid seats={seats} onSeatClick={handleSeatClick} />

      <p>Total Cost: ₹{calculateTotalCost()}</p>
   
    </div>
  
  );
};

export default App;
