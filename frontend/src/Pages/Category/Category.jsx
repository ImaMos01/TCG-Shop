import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ItemCard from "../../Components/Cards/ItemCard";

function Category() {
  return (
    <>
      <Navbar />
      <section className="w-full max-w-2xl lg:max-w-4xl mx-auto pt-60 pb-4 md:pt-40 lg:pt-32 px-5 border border-black">
        <h2 className="text-2xl pb-4">Category</h2>

        <div className="border rounded-lg border-black mb-3 p-2">
          <p className="text-sm pl-2 italic">20 Products found</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Category;
