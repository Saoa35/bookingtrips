import { Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "./components/common/Header";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import LogIn from "./pages/LogIn";
import Bookings from "./pages/Bookings";
import { Footer } from "./components/common/Footer";
import { useState } from "react";
import TripPage from "./pages/TripPage";
import bookings from "./assets/data/bookings.json";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const [bookingList, setBookingList] = useState(bookings);

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

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length > 3 && password.length < 20 && email.includes("@")) {
      setIsAuth(true);
      navigate("/");
    } else {
      setIsAuth(false);
    }
  };

  return (
    <>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />

      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
              <Home />
            ) : (
              <LogIn
                {...{ email, password, setEmail, setPassword, handleSubmit }}
              />
            )
          }
        />
        <Route
          path="/sign-up"
          element={
            <Registration
              {...{
                email,
                password,
                setEmail,
                setPassword,
                handleSubmit,
              }}
            />
          }
        />
        <Route
          path="/sign-in"
          element={
            <LogIn
              {...{ email, password, setEmail, setPassword, handleSubmit }}
            />
          }
        />
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
