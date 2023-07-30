import { useDispatch } from "react-redux";
import { setFullName } from "../../redux/slices/userSlice";

export const UserNameInput = () => {
  const dispatch = useDispatch();

  return (
    <label className="input">
      <span className="input__heading">Full name</span>
      <input
        data-test-id="auth-full-name"
        name="full-name"
        type="text"
        onChange={(e) => dispatch(setFullName(e.target.value))}
        required
      />
    </label>
  );
};
