import { Filtration } from "../components/Filtration";
import { TripCard } from "../components/TripCard";
import trips from "../assets/data/trips.json";

function Home() {
  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filtration />
      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <ul className="trip-list">
          {trips && trips.map((el) => <TripCard key={el.id} {...el} />)}
        </ul>
      </section>
    </main>
  );
}

export default Home;
