import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.search.value;
    navigate(`/Search/${input}`);
  };
  return (
    <form className="flex items-center w-1/2 mx-auto" onSubmit={handleSubmit}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative w-full ">
        <input
          type="search"
          id="search"
          className="p-2.5 w-full z-20 text-sm text-gray-900 rounded-xl border-e-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          className="absolute top-0 end-0 p-2 h-full text-white bg-orange-500 rounded-e-lg border border-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300"
          aria-label="submit search"
        >
          <LuSearch className="size-5" />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
