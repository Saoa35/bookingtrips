import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import LogIn from "./pages/LogIn";
import Bookings from "./pages/Bookings";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Registration />} />
        <Route path="/sign-in" element={<LogIn />} />
        <Route path="/bookings" element={<Bookings />} />
        {/* <Route path="/trip/:tripId " element={<LogIn />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
