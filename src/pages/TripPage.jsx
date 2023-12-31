import { useEffect, useState } from "react";
import useRouter from "../hooks/useRouter ";
// import trips from "../assets/data/trips.json";
import React from "react";
import { Modal } from "../components/Modal";
import { useSelector } from "react-redux";

function TripPage({ createNewBooking }) {
  const { query, navigate } = useRouter();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const trip = useSelector((state) => state.trips.trip);

  // const trip = trips.find((el) => el.id === query.id);

  useEffect(() => {
    if (!trip) {
      navigate("/");
    }
  }, [navigate, trip]);

  return (
    <>
      <main className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <div className="trip">
          <img
            data-test-id="trip-details-image"
            src={trip.image}
            className="trip__img"
            alt="trip"
          />
          <div className="trip__content">
            <div className="trip-info">
              <h3
                data-test-id="trip-details-title"
                className="trip-info__title"
              >
                {trip.title}
              </h3>
              <div className="trip-info__content">
                <span
                  data-test-id="trip-details-duration"
                  className="trip-info__duration"
                >
                  <strong>{trip.duration}</strong> days
                </span>
                <span
                  data-test-id="trip-details-level"
                  className="trip-info__level"
                >
                  {trip.level}
                </span>
              </div>
            </div>
            <div
              data-test-id="trip-details-description"
              className="trip__description"
            >
              {trip.description}
            </div>
            <div className="trip-price">
              <span>Price</span>
              <strong
                data-test-id="trip-details-price-value"
                className="trip-price__value"
              >
                {trip.price} $
              </strong>
            </div>
            <button
              data-test-id="trip-details-button"
              className="trip__button button"
              onClick={() => handleModalOpen()}
            >
              Book a trip
            </button>
          </div>
        </div>
      </main>

      {modalIsOpen && (
        <Modal
          handleModalClose={handleModalClose}
          trip={trip}
          createNewBooking={createNewBooking}
        />
      )}
    </>
  );
}

export default TripPage;
