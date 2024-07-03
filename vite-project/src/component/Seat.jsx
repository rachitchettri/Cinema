// src/components/Seat.jsx
import React from 'react';
import './Seat.css';

const Seat = ({ seat, onClick }) => {
  return (
    <div
      className={`seat ${seat.isBooked ? 'booked' : ''} ${seat.isSelected ? 'selected' : ''}`}
      onClick={() => !seat.isBooked && onClick(seat.id)}
    >
      {seat.id}
    </div>
  );
};

export default Seat;
