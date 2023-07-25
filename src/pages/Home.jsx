import { Filtration } from "../components/Filtration";
import { TripCard } from "../components/TripCard";
import trips from "../assets/data/trips.json";
import { useState } from "react";

function Home() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filtration setSearchInput={setSearchInput} searchInput={searchInput} />
      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <ul className="trip-list">
          {trips &&
            trips
              // .filter((el) => el.title === searchInput)
              .map((el) => <TripCard key={el.id} {...el} />)}
        </ul>
      </section>
    </main>
  );
}

export default Home;
