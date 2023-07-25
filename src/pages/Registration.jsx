import { Link } from "react-router-dom";
import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInout";
import { SubmitButton } from "../components/SubmitButton";
import { UserNameInput } from "../components/UserNameInput";

function Registration() {
  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autoComplete="off">
        <h2 className="sign-up-form__title">Sign Up</h2>
        <UserNameInput />
        <EmailInput />
        <PasswordInput />
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
