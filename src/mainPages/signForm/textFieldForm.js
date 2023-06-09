import { useState } from "react";

const TextFieldForm = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const getInputClass = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          type={showPassword ? "text" : type}
          id={name}
          value={value}
          onChange={onChange}
          name={name}
          // autoComplete={autoComplete}
          className={getInputClass()}
        />
        {type === "password" && (
          <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={toggleShowPassword}
        >
          <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
        </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
      
    </div>
  );
};

export default TextFieldForm;
