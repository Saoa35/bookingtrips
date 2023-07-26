import bookings from "../assets/data/bookings.json";
import { BookingCard } from "../components/cards/BookingCard";

function Bookings() {
  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookings && bookings.map((el) => <BookingCard key={el.id} {...el} />)}
      </ul>
    </main>
  );
}

export default Bookings;
