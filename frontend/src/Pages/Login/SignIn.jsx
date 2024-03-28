function SignIn() {
  return (
    <article className="min-h-screen flex flex-col">
      <header className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <img src="" alt="logo" />
        <section className="bg-red-400 shadow-md w-full">
          <form>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullName"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="userName"
              placeholder="User Name"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </form>
        </section>
      </header>
    </article>
  );
}

export default SignIn;
