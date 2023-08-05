import { Link, useNavigate } from "react-router-dom";
import { EmailInput } from "../components/inputs/EmailInput";
import { PasswordInput } from "../components/inputs/PasswordInout";
import { SubmitButton } from "../components/SubmitButton";
import { UserNameInput } from "../components/inputs/UserNameInput";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../redux/slices/userSlice";

function Registration() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(registerUser({ fullName, email, password }));
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }

    // if (password.length > 3 && password.length < 20 && email.includes("@")) {
    // setIsAuth(true);
    // navigate("/");
    // }
    // } else {
    // setIsAuth(false);
    // }
  };

  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="sign-up-form__title">Sign Up</h2>
        <UserNameInput name={fullName} setName={setName} />
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <SubmitButton>Sign Up</SubmitButton>
      </form>
      <span>
        Already have an account?
        <Link
          to="/sign-in"
          data-test-id="auth-sign-in-link"
          className="sign-up-form__link"
        >
          Sign In
        </Link>
      </span>
    </main>
  );
}

export default Registration;
