import { Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "./components/common/Header";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import LogIn from "./pages/LogIn";
import Bookings from "./pages/Bookings";
import { Footer } from "./components/common/Footer";
import { useEffect, useState } from "react";
import TripPage from "./pages/TripPage";
import bookings from "./assets/data/bookings.json";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth, getUser } from "./redux/slices/userSlice";

function App() {
  const isAuth = useSelector(checkAuth);

  const navigate = useNavigate();

  // const dispatch = useDispatch();

  const [bookingList, setBookingList] = useState(bookings);

  // dispatch(getUser());

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    } else {
      navigate("/sign-in");
    }
  }, [isAuth, navigate]);

  const createNewBooking = (
    booking,
    modalTripTitle,
    modalGuests,
    modalTotalPrice,
    modalDate,
    modalId
  ) => {
    booking.trip.title = modalTripTitle;
    booking.guests = modalGuests;
    booking.totalPrice = modalTotalPrice;
    booking.date = modalDate;
    booking.id = modalId;

    setBookingList([...bookingList, booking]);
  };

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={isAuth ? <Home /> : <LogIn />} />
        <Route path="/sign-up" element={<Registration />} />
        <Route path="/sign-in" element={<LogIn />} />
        <Route
          path="/bookings"
          element={
            <Bookings
              bookingList={bookingList}
              setBookingList={setBookingList}
            />
          }
        />
        <Route
          path="/trip/:id"
          element={<TripPage createNewBooking={createNewBooking} />}
        />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
