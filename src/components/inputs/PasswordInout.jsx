export const PasswordInput = () => {
  return (
    <label className="input">
      <span className="input__heading">Password</span>
      <input
        data-test-id="auth-password"
        name="password"
        type="password"
        autoComplete="new-password"
        required
      />
    </label>
  );
};
