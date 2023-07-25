// import styles from "./.scss";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useEffect, useState } from "react";
import TextFieldForm from "./textFieldForm";
import validator from "../../utils/validator";
import { useForm } from "react-hook-form";

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
const regexp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16).matches(regexp, "password is not valid").required(),
  })
  .required()


const Login = () => {
  const { register, handleSubmit, formState:{errors} } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),

  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3 className="mb-4">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextFieldForm {...register("email")} type="text" label="E-mail" />
            <p>{errors.email?.message}</p>

            <TextFieldForm {...register("password")} type="password" label="Password" />
            <p>{errors.password?.message}</p>
            <button type="submit" className="btn btn-primary w-100 mx-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
