function Button({ text = "Click me", variant = "primary", onClick, disabled = false }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
export default Button;