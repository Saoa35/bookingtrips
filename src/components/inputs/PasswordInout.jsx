import { useDispatch } from "react-redux";

export const PasswordInput = ({ password, setPassword }) => {
  const dispatch = useDispatch();

  return (
    <label className="input">
      <span className="input__heading">Password</span>
      <input
        data-test-id="auth-password"
        name="password"
        type="password"
        autoComplete="new-password"
        onChange={(e) => dispatch(setPassword(e.target.value))}
        required
      />
    </label>
  );
};
