import trips from "../assets/data/trips.json";

function TripPage({ tripId }) {
  const trip = trips.find((el) => el.id === tripId);

  console.log(trip);

  return (
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
            <h3 data-test-id="trip-details-title" className="trip-info__title">
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
          >
            Book a trip
          </button>
        </div>
      </div>
    </main>
  );
}

export default TripPage;
