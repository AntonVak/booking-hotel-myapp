// import styles from "./.scss";

import { useEffect, useState } from "react";
import TextFieldForm from "./textFieldForm";
import validator from "../../utils/validator";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setError] = useState({});

  //handleChange - метод для получения данных для всех полей
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      //возврат обьекта с предыдущим состоянием
      ...prevState,
      //обращаемся к target.name и присваеваем значение- target.value
      [target.name]: target.value,
    }));
    
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
          <h3 className="mb-4">Login</h3>
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

export default Login;
