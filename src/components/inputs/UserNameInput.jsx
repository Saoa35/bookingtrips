export const UserNameInput = ({ userName, setUserName }) => {
  return (
    <label className="input">
      <span className="input__heading">Full name</span>
      <input
        data-test-id="auth-full-name"
        name="full-name"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
    </label>
  );
};
