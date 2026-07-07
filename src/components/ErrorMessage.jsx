function ErrorMessage({ message }) {
  return (
    <section className="section">
      <p className="status-text">{message}</p>
    </section>
  );
}

export default ErrorMessage;