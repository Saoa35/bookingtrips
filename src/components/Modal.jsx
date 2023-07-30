import { useState } from "react";

export const Modal = ({ handleModalClose, trip }) => {
  const [bookDate, setBookDate] = useState("");
  const [guestsQuantity, setGuestsQuantity] = useState("1");

  let totalPrice = trip.price * guestsQuantity;

  return (
    <div className="modal">
      <div data-test-id="book-trip-popup" className="book-trip-popup">
        <button
          onClick={() => handleModalClose()}
          data-test-id="book-trip-popup-close"
          className="book-trip-popup__close"
        >
          ×
        </button>
        <form className="book-trip-popup__form" autoComplete="off">
          <div className="trip-info">
            <h3
              data-test-id="book-trip-popup-title"
              className="trip-info__title"
            >
              {trip.title}
            </h3>
            <div className="trip-info__content">
              <span
                data-test-id="book-trip-popup-duration"
                className="trip-info__duration"
              >
                <strong>{trip.duration}</strong> days
              </span>
              <span
                data-test-id="book-trip-popup-level"
                className="trip-info__level"
              >
                {trip.level}
              </span>
            </div>
          </div>
          <label className="input">
            <span className="input__heading">Date</span>
            <input
              data-test-id="book-trip-popup-date"
              name="date"
              type="date"
              value={bookDate}
              onChange={(e) => setBookDate(e.target.value)}
              required
            />
          </label>
          <label className="input">
            <span className="input__heading">Number of guests</span>
            <input
              data-test-id="book-trip-popup-guests"
              name="guests"
              type="number"
              min="1"
              max="10"
              value={guestsQuantity}
              onChange={(e) => setGuestsQuantity(e.target.value)}
              required
            />
          </label>
          <span className="book-trip-popup__total">
            Total:
            <output
              data-test-id="book-trip-popup-total-value"
              className="book-trip-popup__total-value"
            >
              {totalPrice}$
            </output>
          </span>
          <button
            data-test-id="book-trip-popup-submit"
            className="button"
            type="submit"
          >
            Book a trip
          </button>
        </form>
      </div>
    </div>
  );
};
