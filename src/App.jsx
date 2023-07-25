import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import LogIn from "./pages/LogIn";
import Bookings from "./pages/Bookings";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
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
              }}
            />
          }
        />
        <Route
          path="/sign-in"
          element={<LogIn {...{ email, password, setEmail, setPassword }} />}
        />
        <Route path="/bookings" element={<Bookings />} />
        {/* <Route path="/trip/:tripId " element={<LogIn />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
