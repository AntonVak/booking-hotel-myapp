const SelectField = ({
  label,
  defaultOption,
  option,
  value,
  onChange,
  error
}) => {
  const getInputClass = () => {
    return "form-select" + (error ? " is-invalid" : "");
  };

  return (
    <div className="mb-4">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <select
        className={getInputClass}
        name="city"
        value={value}
        id="validationCustom04"
        onChange={onChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {option &&
          option.map((hotel) => (
            <option value={hotel.id} key={hotel.id}>
              {hotel.city}
            </option>
          ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectField;
