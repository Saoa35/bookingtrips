import { Link, useNavigate } from "react-router-dom";
import { EmailInput } from "../components/inputs/EmailInput";
import { PasswordInput } from "../components/inputs/PasswordInout";
import { SubmitButton } from "../components/SubmitButton";
import { UserNameInput } from "../components/inputs/UserNameInput";
import { useSelector } from "react-redux";

function Registration() {
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
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
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
