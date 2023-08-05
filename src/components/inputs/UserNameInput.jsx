export const UserNameInput = ({ fullName, setName }) => {
  return (
    <label className="input">
      <span className="input__heading">Full name</span>
      <input
        data-test-id="auth-full-name"
        name="full-name"
        type="text"
        value={fullName}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </label>
  );
};
