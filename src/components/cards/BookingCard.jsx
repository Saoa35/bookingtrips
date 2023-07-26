export const BookingCard = ({ title, guests, date, totalPrice }) => {
  const reformatDate = (dateString) => {
    const [datePart] = dateString.split("T");
    const [year, month, day] = datePart.split("-");
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };

  return (
    <li data-test-id="booking" className="booking">
      <h3 data-test-id="booking-title" className="booking__title">
        {title}
      </h3>
      <span data-test-id="booking-guests" className="booking__guests">
        {guests} guests
      </span>
      <span data-test-id="booking-date" className="booking__date">
        {reformatDate(date)}
      </span>
      <span data-test-id="booking-total" className="booking__total">
        {totalPrice} $
      </span>
      <button
        data-test-id="booking-cancel"
        className="booking__cancel"
        title="Cancel booking"
      >
        <span className="visually-hidden">Cancel booking</span>×
      </button>
    </li>
  );
};
