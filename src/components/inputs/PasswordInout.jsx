import { useDispatch } from "react-redux";
import { setPassword } from "../../redux/slices/userSlice";

export const PasswordInput = () => {
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
