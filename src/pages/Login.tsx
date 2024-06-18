import LoginForm from "../components/LoginForm";
const Login = () => {
  return (
    <div className="flex h-screen flex-col justify-evenly overflow-y-auto bg-white">
      <p className="text-center text-7xl font-bold italic tracking-widest">Arva</p>
      <LoginForm />
    </div>
  );
};

export default Login;
