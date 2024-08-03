import { Checkbox, message } from "antd";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { PasswordInput, TextInput } from "./shared/CustomInput";
import { SubmitButton } from "./shared/CustomButton";
import IconUser from "./IconComponents/IconUser";
import IconLock from "./IconComponents/IconLock";
import { useLoginMutation } from "../redux/api/appApi";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../model";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const [login, { isLoading, isSuccess, isError, error, data }] =
    useLoginMutation();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData();

    if (!isValidEmail.test(username)) {
      message.error("Please enter a valid email address");
      return;
    }

    if (passwordRegex.test(password)) {
      message.error(
        " Password must include both special characters and numbers and at least 8 characters"
      );
      return;
    }

    formData.append("usr", username);
    formData.append("pwd", password);

    await login(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Login Successful");
      sessionStorage.setItem("username", data?.full_name);
      navigate("/app");
    } else if (isError) {
      message.error(
        (error as ErrorMessage).data.message || "Incorrect Username or Password"
      );
    }
  }, [isError, isSuccess, error, navigate, data]);
  return (
    <>
      <form
        action=""
        className="flex flex-col gap-3 w-[350px] mt-4"
        onSubmit={handleLogin}
      >
        <TextInput
          value={username}
          type="email"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          label="Username"
          prefix={<IconUser />}
        />
        <PasswordInput
          label="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          isForgotPassword
          prefix={<IconLock />}
        />
        <Checkbox>Remember me</Checkbox>
        <SubmitButton
          disabled={!(username && password) || isLoading}
          title={isLoading ? "Loading" : "Login"}
          onClick={handleLogin}
        />
      </form>
    </>
  );
};

export default React.memo(LoginForm);
