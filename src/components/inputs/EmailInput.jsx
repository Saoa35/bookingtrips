export const EmailInput = ({ email, setEmail }) => {
  return (
    <label className="input">
      <span className="input__heading">Email</span>
      <input
        data-test-id="auth-email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </label>
  );
};
