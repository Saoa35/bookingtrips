import { Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import LogIn from "./pages/LogIn";
import Bookings from "./pages/Bookings";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAuth) {
      navigate("/");
    }
  };

  useEffect(() => {
    if (password.length > 3 && password.length < 20 && email.includes("@")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [email, setIsAuth, password]);

  return (
    <>
      <Header />

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
        <Route path="/sign-in" element={<LogIn />} />
        <Route path="/bookings" element={<Bookings />} />
        {/* <Route path="/trip/:tripId " element={<LogIn />} /> */}
        {/* <Route path="*" element={isAuth ? <Home /> : <LogIn />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
