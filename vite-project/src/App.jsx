import React, { useState } from "react";
import SeatGrid from "./component/SeatGrid";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-stripe-public-key");

const App = () => {
  const [seats, setSeats] = useState([
    { id: 176, isBooked: false, isSelected: false, price: 500 },
    { id: 175, isBooked: false, isSelected: false, price: 500 },
    { id: 174, isBooked: false, isSelected: false, price: 500 },
    { id: 173, isBooked: false, isSelected: false, price: 500 },
    { id: 172, isBooked: false, isSelected: false, price: 500 },
    { id: 171, isBooked: false, isSelected: false, price: 500 },
    { id: 170, isBooked: false, isSelected: false, price: 500 },
    { id: 169, isBooked: false, isSelected: false, price: 500 },
    { id: 168, isBooked: false, isSelected: false, price: 500 },
    { id: 167, isBooked: false, isSelected: false, price: 500 },
    { id: 166, isBooked: false, isSelected: false, price: 500 },
    { id: 165, isBooked: false, isSelected: false, price: 300 },
    { id: 164, isBooked: false, isSelected: false, price: 300 },
    { id: 163, isBooked: false, isSelected: false, price: 300 },
    { id: 162, isBooked: false, isSelected: false, price: 300 },
    { id: 161, isBooked: false, isSelected: false, price: 300 },
    { id: 160, isBooked: false, isSelected: false, price: 300 },
    { id: 159, isBooked: false, isSelected: false, price: 300 },
    { id: 158, isBooked: false, isSelected: false, price: 300 },
    { id: 157, isBooked: false, isSelected: false, price: 300 },
    { id: 156, isBooked: false, isSelected: false, price: 300 },
    { id: 155, isBooked: false, isSelected: false, price: 300 },
    { id: 154, isBooked: false, isSelected: false, price: 300 },
    { id: 153, isBooked: false, isSelected: false, price: 300 },
    { id: 152, isBooked: false, isSelected: false, price: 300 },
    { id: 151, isBooked: false, isSelected: false, price: 300 },
    { id: 150, isBooked: false, isSelected: false, price: 300 },
    { id: 149, isBooked: false, isSelected: false, price: 300 },
    { id: 148, isBooked: false, isSelected: false, price: 300 },
    { id: 147, isBooked: false, isSelected: false, price: 300 },
    { id: 146, isBooked: false, isSelected: false, price: 300 },
    { id: 145, isBooked: false, isSelected: false, price: 300 },
    { id: 144, isBooked: false, isSelected: false, price: 300 },
    { id: 143, isBooked: false, isSelected: false, price: 300 },
    { id: 142, isBooked: false, isSelected: false, price: 300 },
    { id: 141, isBooked: false, isSelected: false, price: 300 },
    { id: 140, isBooked: false, isSelected: false, price: 300 },
    { id: 139, isBooked: false, isSelected: false, price: 300 },
    { id: 138, isBooked: false, isSelected: false, price: 300 },
    { id: 137, isBooked: false, isSelected: false, price: 300 },
    { id: 136, isBooked: false, isSelected: false, price: 300 },
    { id: 135, isBooked: false, isSelected: false, price: 300 },
    { id: 134, isBooked: false, isSelected: false, price: 300 },
    { id: 133, isBooked: false, isSelected: false, price: 300 },
    { id: 132, isBooked: false, isSelected: false, price: 300 },
    { id: 131, isBooked: false, isSelected: false, price: 300 },
    { id: 130, isBooked: false, isSelected: false, price: 300 },
    { id: 129, isBooked: false, isSelected: false, price: 300 },
    { id: 128, isBooked: false, isSelected: false, price: 300 },
    { id: 127, isBooked: false, isSelected: false, price: 300 },
    { id: 126, isBooked: false, isSelected: false, price: 300 },
    { id: 125, isBooked: false, isSelected: false, price: 300 },
    { id: 124, isBooked: false, isSelected: false, price: 300 },
    { id: 123, isBooked: false, isSelected: false, price: 300 },
    { id: 122, isBooked: false, isSelected: false, price: 300 },
    { id: 121, isBooked: false, isSelected: false, price: 300 },
    { id: 120, isBooked: false, isSelected: false, price: 300 },
    { id: 119, isBooked: false, isSelected: false, price: 300 },
    { id: 118, isBooked: false, isSelected: false, price: 300 },
    { id: 117, isBooked: false, isSelected: false, price: 300 },
    { id: 116, isBooked: false, isSelected: false, price: 300 },
    { id: 115, isBooked: false, isSelected: false, price: 300 },
    { id: 114, isBooked: false, isSelected: false, price: 300 },
    { id: 113, isBooked: false, isSelected: false, price: 300 },
    { id: 112, isBooked: false, isSelected: false, price: 300 },
    { id: 111, isBooked: false, isSelected: false, price: 300 },
    { id: 110, isBooked: false, isSelected: false, price: 300 },
    { id: 109, isBooked: false, isSelected: false, price: 300 },
    { id: 108, isBooked: false, isSelected: false, price: 300 },
    { id: 107, isBooked: false, isSelected: false, price: 300 },
    { id: 106, isBooked: false, isSelected: false, price: 300 },
    { id: 105, isBooked: false, isSelected: false, price: 300 },
    { id: 104, isBooked: false, isSelected: false, price: 300 },
    { id: 103, isBooked: false, isSelected: false, price: 300 },
    { id: 102, isBooked: false, isSelected: false, price: 300 },
    { id: 101, isBooked: false, isSelected: false, price: 300 },
    { id: 100, isBooked: false, isSelected: false, price: 300 },
    { id: 99, isBooked: false, isSelected: false, price: 300 },
    { id: 98, isBooked: false, isSelected: false, price: 300 },
    { id: 97, isBooked: false, isSelected: false, price: 300 },
    { id: 96, isBooked: false, isSelected: false, price: 300 },
    { id: 95, isBooked: false, isSelected: false, price: 300 },
    { id: 94, isBooked: false, isSelected: false, price: 300 },
    { id: 93, isBooked: false, isSelected: false, price: 300 },
    { id: 92, isBooked: false, isSelected: false, price: 300 },
    { id: 91, isBooked: false, isSelected: false, price: 300 },
    { id: 90, isBooked: false, isSelected: false, price: 300 },
    { id: 89, isBooked: false, isSelected: false, price: 300 },
    { id: 88, isBooked: false, isSelected: false, price: 300 },
    { id: 87, isBooked: false, isSelected: false, price: 300 },
    { id: 86, isBooked: false, isSelected: false, price: 300 },
    { id: 85, isBooked: false, isSelected: false, price: 300 },
    { id: 84, isBooked: false, isSelected: false, price: 300 },
    { id: 83, isBooked: false, isSelected: false, price: 300 },
    { id: 82, isBooked: false, isSelected: false, price: 300 },
    { id: 81, isBooked: false, isSelected: false, price: 300 },
    { id: 80, isBooked: false, isSelected: false, price: 300 },
    { id: 79, isBooked: false, isSelected: false, price: 300 },
    { id: 78, isBooked: false, isSelected: false, price: 300 },
    { id: 77, isBooked: false, isSelected: false, price: 300 },
    { id: 76, isBooked: false, isSelected: false, price: 300 },
    { id: 75, isBooked: false, isSelected: false, price: 300 },
    { id: 74, isBooked: false, isSelected: false, price: 300 },
    { id: 73, isBooked: false, isSelected: false, price: 300 },
    { id: 72, isBooked: false, isSelected: false, price: 300 },
    { id: 71, isBooked: false, isSelected: false, price: 300 },
    { id: 70, isBooked: false, isSelected: false, price: 300 },
    { id: 69, isBooked: false, isSelected: false, price: 300 },
    { id: 68, isBooked: false, isSelected: false, price: 300 },
    { id: 67, isBooked: false, isSelected: false, price: 300 },
    { id: 66, isBooked: false, isSelected: false, price: 300 },
    { id: 65, isBooked: false, isSelected: false, price: 300 },
    { id: 64, isBooked: false, isSelected: false, price: 300 },
    { id: 63, isBooked: false, isSelected: false, price: 300 },
    { id: 62, isBooked: false, isSelected: false, price: 300 },
    { id: 61, isBooked: false, isSelected: false, price: 300 },
    { id: 60, isBooked: false, isSelected: false, price: 300 },
    { id: 59, isBooked: false, isSelected: false, price: 300 },
    { id: 58, isBooked: false, isSelected: false, price: 300 },
    { id: 57, isBooked: false, isSelected: false, price: 300 },
    { id: 56, isBooked: false, isSelected: false, price: 300 },
    { id: 55, isBooked: false, isSelected: false, price: 300 },
    { id: 54, isBooked: false, isSelected: false, price: 300 },
    { id: 53, isBooked: false, isSelected: false, price: 300 },
    { id: 52, isBooked: false, isSelected: false, price: 300 },
    { id: 51, isBooked: false, isSelected: false, price: 300 },
    { id: 50, isBooked: false, isSelected: false, price: 300 },
    { id: 49, isBooked: false, isSelected: false, price: 300 },
    { id: 48, isBooked: false, isSelected: false, price: 300 },
    { id: 47, isBooked: false, isSelected: false, price: 300 },
    { id: 46, isBooked: false, isSelected: false, price: 300 },
    { id: 45, isBooked: false, isSelected: false, price: 300 },
    { id: 44, isBooked: false, isSelected: false, price: 300 },
    { id: 43, isBooked: false, isSelected: false, price: 300 },
    { id: 42, isBooked: false, isSelected: false, price: 300 },
    { id: 41, isBooked: false, isSelected: false, price: 300 },
    { id: 40, isBooked: false, isSelected: false, price: 300 },
    { id: 39, isBooked: false, isSelected: false, price: 300 },
    { id: 38, isBooked: false, isSelected: false, price: 300 },
    { id: 37, isBooked: false, isSelected: false, price: 300 },
    { id: 36, isBooked: false, isSelected: false, price: 300 },
    { id: 35, isBooked: false, isSelected: false, price: 300 },
    { id: 34, isBooked: false, isSelected: false, price: 300 },
    { id: 33, isBooked: false, isSelected: false, price: 300 },
    { id: 32, isBooked: false, isSelected: false, price: 300 },
    { id: 31, isBooked: false, isSelected: false, price: 300 },
    { id: 30, isBooked: false, isSelected: false, price: 300 },
    { id: 29, isBooked: false, isSelected: false, price: 300 },
    { id: 28, isBooked: false, isSelected: false, price: 300 },
    { id: 27, isBooked: false, isSelected: false, price: 300 },
    { id: 26, isBooked: false, isSelected: false, price: 300 },
    { id: 25, isBooked: false, isSelected: false, price: 300 },
    { id: 24, isBooked: false, isSelected: false, price: 300 },
    { id: 23, isBooked: false, isSelected: false, price: 300 },
    { id: 22, isBooked: false, isSelected: false, price: 300 },
    { id: 21, isBooked: false, isSelected: false, price: 300 },
    { id: 20, isBooked: false, isSelected: false, price: 300 },
    { id: 19, isBooked: false, isSelected: false, price: 300 },
    { id: 18, isBooked: false, isSelected: false, price: 300 },
    { id: 17, isBooked: false, isSelected: false, price: 300 },
    { id: 16, isBooked: false, isSelected: false, price: 300 },
    { id: 15, isBooked: false, isSelected: false, price: 300 },
    { id: 14, isBooked: false, isSelected: false, price: 300 },
    { id: 13, isBooked: false, isSelected: false, price: 300 },
    { id: 12, isBooked: false, isSelected: false, price: 300 },
    { id: 11, isBooked: false, isSelected: false, price: 300 },
    { id: 10, isBooked: false, isSelected: false, price: 300 },
    { id: 9, isBooked: false, isSelected: false, price: 300 },
    { id: 8, isBooked: false, isSelected: false, price: 300 },
    { id: 7, isBooked: true, isSelected: false, price: 300 },
    { id: 6, isBooked: false, isSelected: false, price: 300 },
    { id: 5, isBooked: false, isSelected: false, price: 300 },
    { id: 4, isBooked: false, isSelected: false, price: 300 },
    { id: 3, isBooked: false, isSelected: false, price: 300 },
    { id: 2, isBooked: false, isSelected: false, price: 300 },
    { id: 1, isBooked: false, isSelected: false, price: 300 },
  ]);
  const handleSeatClick = (id) => {
    setSeats(
      seats.map((seat) =>
        seat.id === id ? { ...seat, isSelected: !seat.isSelected } : seat
      )
    );
  };

  const calculateTotalCost = () => {
    const selectedSeats = seats.filter((seat) => seat.isSelected);
    return selectedSeats.reduce((total, seat) => (total += seat.price), 0);
  };

  const handleBuyNow = async () => {
    const selectedSeats = seats.filter((seat) => seat.isSelected);

    if (selectedSeats.length === 0) {
      alert("No seats selected.");
      return;
    }
    const stripe = await stripePromise;
    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: selectedSeats.map((seat) => ({
          id: seat.id,
          price: seat.price,
        })),
      }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="App">
      <Navbar />

      <SeatGrid seats={seats} onSeatClick={handleSeatClick} />

      <div className="screen">
        <svg
          width="300"
          height="21"
          viewBox="0 0 300 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="nowshowing-svg"
        >
          <path
            d="M10 9C10 9 56 0 150 0C244 0 290 9 290 9L300 21C300 21 246 14 150 14C54 14 0 21 0 21L10 9Z"
            fill="url(#paint0_linear_780_4378)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_780_4378"
              x1="147.916"
              y1="2.5"
              x2="147.916"
              y2="23.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00aad3" />
              <stop
                offset="0.0833333"
                stop-color="#00aad3"
                stop-opacity="0.94"
              />
              <stop
                offset="0.682292"
                stop-color="#212027"
                stop-opacity="0.54"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Footer totalCost={calculateTotalCost()} onBuyNow={handleBuyNow} />
    </div>
  );
};

export default App;
