import { Link } from "react-router-dom";
import { PasswordInput } from "../components/PasswordInout";
import { EmailInput } from "../components/EmailInput";
import { SubmitButton } from "../components/SubmitButton";

function LogIn() {
  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-in-form" autoComplete="off">
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
