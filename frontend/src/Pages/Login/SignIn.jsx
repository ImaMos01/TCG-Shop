import Logo from "../../Components/Logo/Logo";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { createUser } from "../../features/shopingCart/userSlice";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [formInput, setFormInput] = useState({
    mail: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    message: "",
  });
  const addUser = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8080/user/login`,
        formInput
      );
      const result = await response.data;

      addUser(createUser(result));
      navigate("/");
    } catch (error) {
      setFormError({ message: "invalid e-mail or password" });
      console.error("error fetching data:", error.message);
    }
  };

  return (
    <article className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-white">
      <header className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="my-4 text-center">
          <Logo sizeImg={"6"} sizeText={"lg"} />
          <h2 className="pt-4">Sign In</h2>
        </div>

        {/*Content */}
        <section className="bg-white border rounded-md shadow-md w-full p-4 dark:bg-gray-800 dark:border-gray-900">
          <form onSubmit={handleSubmit}>
            <label htmlFor="mail" className="pl-0.5">
              E-mail:
            </label>
            <input
              id="mail"
              type="email"
              className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2 text-gray-900"
              name="mail"
              placeholder="E-mail Address"
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className="pl-0.5">
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2 text-gray-900"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <p className="text-red-700">{formError.message}</p>
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white my-1 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-700"
              aria-label="Register button"
            >
              Sign In
            </button>
          </form>
        </section>
        <div className="text-grey-dark mt-4 flex flex-row gap-2">
          <p>Not have an account?</p>
          <Link
            to={`/Register`}
            className="text-blue-700 no-underline hover:underline"
          >
            Create an Account
          </Link>
        </div>
      </header>
    </article>
  );
}

export default SignIn;
