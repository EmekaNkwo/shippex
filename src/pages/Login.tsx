import IconLogo from "../components/IconComponents/IconLogo";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="flex  h-screen">
      <div className="p-10">
        <IconLogo />
      </div>
      <div className="flex flex-col items-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h3 className="font-bold text-[24px]">Sign in</h3>
        <span className="text-[14px] text-[#4B5563]">
          Dont have an account?{" "}
          <span className="text-blueColor cursor-pointer">Sign up here</span>
        </span>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
