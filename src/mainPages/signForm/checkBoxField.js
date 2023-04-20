

const CheckBoxField = ({children, name, value, onChange}) => {
    const handleChange = () => {
        onChange({name: name, value: !value})
    }
  return (
    <div className="form-check mb-4">
      <input
        className="form-check-input"
        type="checkbox"
        onChange={handleChange}
        value=""
        id={name}
        checked={value}
      />
      <label className="form-check-label" htmlFor={name}>
        {children}
      </label>
    </div>
  );
};

export default CheckBoxField;
