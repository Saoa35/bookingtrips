import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import LogIn from "./pages/LogIn";
import Bookings from "./pages/Bookings";
import { Footer } from "./components/Footer";
import { useState } from "react";
import TripPage from "./pages/TripPage";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [tripId, setTripId] = useState(null);

  const navigate = useNavigate();

  console.log(tripId);

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
              <Home setTripId={setTripId} />
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
                userName,
                email,
                password,
                setUserName,
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
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/trip/:tripId " element={<TripPage tripId={tripId} />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
