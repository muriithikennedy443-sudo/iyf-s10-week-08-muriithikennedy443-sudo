function Input({ name, value, onChange, placeholder, type = "text" }) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
export default Input;