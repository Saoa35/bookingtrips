export const SubmitButton = ({ children }) => {
  return (
    <button data-test-id="auth-submit" className="button" type="submit">
      {children}
    </button>
  );
};
