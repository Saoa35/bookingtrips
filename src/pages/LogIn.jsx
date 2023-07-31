import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "../components/inputs/PasswordInout";
import { EmailInput } from "../components/inputs/EmailInput";
import { SubmitButton } from "../components/SubmitButton";
import { useSelector } from "react-redux";

function LogIn() {
  const navigate = useNavigate();

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length > 3 && password.length < 20 && email.includes("@")) {
      // setIsAuth(true);
      navigate("/");
    } else {
      // setIsAuth(false);
    }
  };
  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-in-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="sign-in-form__title">Sign In</h2>
        <EmailInput />
        <PasswordInput />
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
