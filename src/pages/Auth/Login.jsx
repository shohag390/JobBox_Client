import logo from "../../assets/images/top_logo.png";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
  };

  return (
    <section className="h-screen w-full px-5 md:px-12 lg:px-37 2xl:px-50 bg-[#ffffff] flex items-center justify-center">
      <div className="h-[70vh] w-full md:w-[46%] lg:w-[36%] 2xl:w-[30%] bg-[#f3f3f3] flex justify-center rounded-xl relative border border-[#e2e2e2]">
        <div className="h-[30vh] w-[90%] absolute bg-[#05264e] -top-8 rounded-xl p-5 flex justify-center">
          <div className="flex flex-col items-center justify-center gap-1 text-[#ffffff]">
            <img className="h-20" src={logo} alt="logo" />
            <h4 className="text-[20px] font-bold">Job Box</h4>
            <h4>Welcome Back!</h4>
            <p>Sign in to continue your career journey.</p>
          </div>
        </div>
        <form
          onSubmit={handleLogin}
          className="absolute px-7 w-full top-[30vh] flex flex-col gap-5"
        >
          <input
            className="w-full bg-[#ffffff] py-3 px-4 border border-[#e2e2e2] outline-none rounded-md"
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <input
            className="w-full bg-[#ffffff] py-3 px-4 border border-[#e2e2e2] outline-none rounded-md"
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
