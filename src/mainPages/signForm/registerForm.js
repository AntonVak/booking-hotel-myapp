import { useEffect, useState } from "react";
import TextFieldForm from "./textFieldForm";
import validator from "../../utils/validator";
import { useSelector } from "react-redux";
import SelectField from "./selectField";

const RegisterForm = () => {
  const hotels = useSelector((state) => state.hotels.hotels);
  const [data, setData] = useState({ email: "", password: "", city: "" });
  const [errors, setError] = useState({});
  if (hotels) {
    // console.log(hotels);
  }
//   useEffect(() => {
//     console.log(hotels);
//   }, [hotels]);

  //handleChange - метод для получения данных для всех полей
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      //возврат обьекта с предыдущим состоянием
      ...prevState,
      //обращаемся к target.name и присваеваем значение- target.value
      [target.name]: target.value,
    }));
    // console.log(data);
  };

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен некорректно",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одно число",
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
    },
    city:{
        isRequired: {
            message: "Город обязателен для заполнения",
          },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    //проверяем все поля
    setError(errors);
    return Object.keys(errors).length === 0;
  };
  const isValidButton = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    // console.log(handleSubmit);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3 className="mb-4">Register</h3>
          <form onSubmit={handleSubmit}>
            <TextFieldForm
              type="text"
              label="E-mail"
              name="email"
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
            <TextFieldForm
              type="password"
              label="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              error={errors.password}
            />
            <SelectField 
                label="Choose your city"
                defaultOption="Choose..."
                onChange={handleChange}
                value={data.city}
                option={hotels}
                error={errors.city}

            />
            {/* <div className="mb-4">
              <label htmlFor="validationCustom04" className="form-label">
                State
              </label>
              <select
                className="form-select"
                name="city"
                value={data.city}
                id="validationCustom04"
                onChange={handleChange}
              >
                <option  disabled value="">
                  Choose...
                </option>
                {hotels &&
                  hotels.map((hotel) => (
                    <option
                      value={hotel.id}
                      key={hotel.id}
                    >
                      {hotel.city}
                    </option>
                  ))}
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div> */}

            <button
              type="submit"
              disabled={!isValidButton}
              className="btn btn-primary w-100 mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
