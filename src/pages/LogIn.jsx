import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "../components/inputs/PasswordInout";
import { EmailInput } from "../components/inputs/EmailInput";
import { SubmitButton } from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginUser } from "../redux/slices/userSlice";

function LogIn() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));

    try {
    } catch (error) {
      console.log(error);
    }

    // if (password.length > 3 && password.length < 20 && email.includes("@")) {
    // setIsAuth(true);
    //   navigate("/");
    // } else {
    // setIsAuth(false);
    // }
  };

  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-in-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="sign-in-form__title">Sign In</h2>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <SubmitButton>Sign In</SubmitButton>
      </form>
      <span>
        Don't have an account?
        <Link
          to="/sign-up"
          data-test-id="auth-sign-up-link"
          className="sign-in-form__link"
        >
          Sign Up
        </Link>
      </span>
    </main>
  );
}

export default LogIn;
