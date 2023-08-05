export const PasswordInput = ({ password, setPassword }) => {
  return (
    <label className="input">
      <span className="input__heading">Password</span>
      <input
        data-test-id="auth-password"
        name="password"
        type="password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </label>
  );
};
