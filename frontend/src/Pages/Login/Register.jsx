import Logo from "../../Components/Logo/Logo";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { createUser } from "../../features/shopingCart/userSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formInput, setFormInput] = useState({
    fName: "",
    lName: "",
    uName: "",
    mail: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    password: "",
  });

  const addNewUser = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const confirmPassword = formData.get("confirmPassword");

    if (formInput.password !== confirmPassword) {
      setFormError({ password: "Password not matched" });
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/user/newUser`,
        formInput
      );
      const result = await response.data;
      addNewUser(createUser(result));
      navigate("/");
    } catch (error) {
      console.error("error fetching data:", error.message);
    }
  };

  return (
    <article className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-white">
      <header className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="my-4 text-center">
          <Logo sizeImg={"6"} sizeText={"lg"} />
          <h2 className="pt-4">Register</h2>
        </div>

        {/*Content */}
        <section className="bg-white border rounded-md shadow-md w-full p-4 dark:bg-gray-800 dark:border-gray-900">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fName" className="pl-0.5">
              First Name:
            </label>
            <input
              id="fName"
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2 text-gray-900"
              name="fName"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            <label htmlFor="lName" className="pl-0.5">
              Last Name:
            </label>
            <input
              id="lName"
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2 text-gray-900"
              name="lName"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
            <label htmlFor="uName" className="pl-0.5">
              User Name:
            </label>
            <input
              id="uName"
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2 text-gray-900"
              name="uName"
              placeholder="User Name"
              onChange={handleChange}
              required
            />
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
            <p className="text-red-700">{formError.password}</p>
            <label htmlFor="confirmPassword" className="pl-0.5">
              Confirm Password:
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2 text-gray-900"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
            <p className="text-red-700">{formError.password}</p>
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
          <p>Already have an account?</p>
          <Link
            to={`/SignIn`}
            className="text-blue-700 no-underline hover:underline"
          >
            Log in
          </Link>
        </div>
      </header>
    </article>
  );
}

export default Register;
