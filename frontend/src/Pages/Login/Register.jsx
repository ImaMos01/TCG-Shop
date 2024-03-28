import Logo from "../../Components/Logo/Logo";

function Register() {
  return (
    <article className="min-h-screen flex flex-col bg-gray-100">
      <header className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="my-4 text-center">
          <Logo sizeImg={"12"} sizeText={"lg"} />
          <h2>Register</h2>
        </div>
        {/*Content */}
        <section className="bg-white border rounded-md shadow-md w-full p-4">
          <form>
            <input
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="fullName"
              placeholder="Full Name"
              required
            />
            <input
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="userName"
              placeholder="User Name"
              required
            />
            <input
              type="password"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              required
            />
            <input
              type="password"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-200 text-white hover:bg-green-dark focus:outline-none my-1"
              aria-label="Register button"
            >
              Create Account
            </button>
          </form>
        </section>
        <div className="text-grey-dark mt-4 flex flex-row gap-2">
          Already have an account?
          <p className="no-underline border-b border-blue text-blue">Log in</p>
        </div>
      </header>
    </article>
  );
}

export default Register;
