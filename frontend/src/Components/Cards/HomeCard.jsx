import PropTypes from "prop-types";

function HomeCard({ url, title, description }) {
  /*
  Card template to put information about the categories

  Args:
    url = URL of the image
    title = Title of the category
    description = Short description about the category
   
  Return: 
    Card item where link to a page
  */

  return (
    <article className="max-w-md rounded-xl overflow-hidden shadow-lg my-2 border border-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
      <img className="w-full" src={url} alt="sunset" />

      {/*Cntent */}
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-center">{title}</h3>
        <p className="text-black text-base">{description}</p>
      </div>
    </article>
  );
}
HomeCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
export default HomeCard;
