import { Link } from "react-router-dom";
import { EmailInput } from "../components/inputs/EmailInput";
import { PasswordInput } from "../components/inputs/PasswordInout";
import { SubmitButton } from "../components/SubmitButton";
import { UserNameInput } from "../components/inputs/UserNameInput";

function Registration({
  userName,
  email,
  password,
  setUserName,
  setEmail,
  setPassword,
}) {
  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autoComplete="off">
        <h2 className="sign-up-form__title">Sign Up</h2>
        <UserNameInput {...{ userName, setUserName }} />
        <EmailInput {...{ email, setEmail }} />
        <PasswordInput {...{ password, setPassword }} />
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
