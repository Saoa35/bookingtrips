import { useDispatch, useSelector } from "react-redux";
import { Filtration } from "../components/Filtration";
import { TripCard } from "../components/cards/TripCard";
import { useEffect, useState } from "react";
import { getAllTrips } from "../redux/slices/tripsSlice";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");

  const dispatch = useDispatch();

  const trips = useSelector((state) => state.trips.trips); //==========================
  const { status, error } = useSelector((state) => state.trips); //=======================

  useEffect(() => {
    dispatch(getAllTrips());
  }, [dispatch]);

  const tripSearch = (searchValue, tripName) =>
    tripName.title.toLowerCase().includes(searchValue.toLowerCase());

  function filterDuration(param, trip) {
    switch (param) {
      case "0_x_5":
        return trip.duration <= 5;
      case "5_x_10":
        return trip.duration > 5 && trip.duration <= 10;
      case "10_x":
        return trip.duration > 10;
      default:
        return true;
    }
  }

  function filterLevel(param, trip) {
    switch (param) {
      case "easy":
        return trip.level === "easy";
      case "moderate":
        return trip.level === "moderate";
      case "difficult":
        return trip.level === "difficult";
      default:
        return true;
    }
  }

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      {status === "loading" ? (
        <div className="nav-header__inner">
          <div className="loader"></div>
        </div>
      ) : error ? (
        <h2 className="nav-header__inner">🫣 An error ocured: {error}</h2>
      ) : (
        <>
          <Filtration
            {...{
              setSearchInput,
              searchInput,
              duration,
              setDuration,
              level,
              setLevel,
            }}
          />
          <section className="trips">
            <h2 className="visually-hidden">Trips List</h2>
            <ul className="trip-list">
              {trips
                ?.filter((el) => tripSearch(searchInput, el))
                .filter((el) => filterDuration(duration, el))
                .filter((el) => filterLevel(level, el))
                .map((el) => (
                  <TripCard key={el.id} {...el} />
                ))}
            </ul>
          </section>
        </>
      )}
    </main>
  );
}

export default Home;
