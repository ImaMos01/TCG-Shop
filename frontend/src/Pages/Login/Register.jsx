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
            <label htmlFor="fullname" className="pl-0.5">
              Full Name:
            </label>
            <input
              id="fullname"
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2"
              name="fullName"
              placeholder="Full Name"
              required
            />
            <label htmlFor="fullname" className="pl-0.5">
              User Name:
            </label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2"
              name="userName"
              placeholder="User Name"
              required
            />
            <label htmlFor="fullname" className="pl-0.5">
              Password:
            </label>
            <input
              type="password"
              className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2"
              name="password"
              placeholder="Password"
              required
            />
            <label htmlFor="fullname" className="pl-0.5">
              Confirm Password:
            </label>
            <input
              type="password"
              className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white my-1 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-700"
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
