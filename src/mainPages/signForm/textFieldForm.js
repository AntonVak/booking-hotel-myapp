const TextFieldForm = ({ label, type, name, value, onChange, error }) => {
  const getInputClass = () => {
    return "form-control" + (error ? " is-invalid" : "")
  }
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        name={name}
        // autoComplete={autoComplete}
        className={getInputClass()}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextFieldForm;
