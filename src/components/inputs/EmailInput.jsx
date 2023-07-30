import { useDispatch } from "react-redux";
import { setEmail } from "../../redux/slices/userSlice";

export const EmailInput = () => {
  const dispatch = useDispatch();

  return (
    <label className="input">
      <span className="input__heading">Email</span>
      <input
        data-test-id="auth-email"
        name="email"
        type="email"
        onChange={(e) => dispatch(setEmail(e.target.value))}
        required
      />
    </label>
  );
};
