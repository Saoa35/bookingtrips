import { BookingCard } from "../components/cards/BookingCard";

function Bookings({ bookingList, setBookingList }) {
  const bookingDelete = (id) => {
    const updatedBookingList = bookingList.filter(
      (booking) => booking.id !== id
    );
    setBookingList(updatedBookingList);
  };

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookingList &&
          bookingList
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((el) => (
              <BookingCard key={el.id} {...el} bookingDelete={bookingDelete} />
            ))}
      </ul>
    </main>
  );
}

export default Bookings;
