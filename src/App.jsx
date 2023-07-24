import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Registration />} />
        <Route path="/sign-in" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
