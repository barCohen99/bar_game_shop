import { useState, useEffect } from "react";
import Helmet from "../Helmet";
// import products from "../../assets/data/products";
import ProductsList from "../UI/ProductsList";
import useGetData from "../../custom-hooks/useGetData";

const Shop = () => {
  const { data: products, loading } = useGetData("products");
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    if (products) {
      setProductsData(
        products.sort((a, b) => a.category.localeCompare(b.category))
      );
    }
  }, [products]);

  const handleCategoryFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue == "Filter By Category") {
      setProductsData(products);
    }
    if (filterValue == "Playstation") {
      const filterdProducts = products.filter(
        (item) => item.category === "Playstation"
      );
      setProductsData(filterdProducts);
    }
    if (filterValue == "Xbox") {
      const filterdProducts = products.filter(
        (item) => item.category === "Xbox"
      );
      setProductsData(filterdProducts);
    }
    if (filterValue == "Nintendo") {
      const filterdProducts = products.filter(
        (item) => item.category === "Nintendo"
      );
      setProductsData(filterdProducts);
    }
  };

  const handleSortFilter = (e) => {
    console.log("Sorting option selected:", e.target.value);
    const sortValue = e.target.value;

    if (sortValue === "New Games") {
      setProductsData((prevProducts) => {
        const sortedProducts = [...prevProducts].sort(
          (a, b) => b.release_year - a.release_year
        );
        return sortedProducts;
      });
    }
    if (sortValue === "Old Games") {
      setProductsData((prevProducts) => {
        const sortedProducts = [...prevProducts].sort(
          (a, b) => a.release_year - b.release_year
        );
        return sortedProducts;
      });
    }
    if (sortValue === "Low Budget") {
      setProductsData((prevProducts) => {
        const sortedProducts = [...prevProducts].sort(
          (a, b) => a.price - b.price
        );
        return sortedProducts;
      });
    }
    if (sortValue === "High Budget") {
      setProductsData((prevProducts) => {
        const sortedProducts = [...prevProducts].sort(
          (a, b) => b.price - a.price
        );
        return sortedProducts;
      });
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <section className="flex max-sm:flex-col max-sm:items-center justify-center bg-slate-500">
        <div className="filter__widget flex items-center">
          <select
            className="w-[120px] max-sm:w-[250px] mx-5 rounded-xl max-sm:mt-3 text-center"
            onChange={handleSortFilter}
          >
            <option value="New Games">New Games</option>
            <option value="Old Games">Old Games</option>
            <option value="Low Budget">Low Budget</option>
            <option value="High Budget">High Budget</option>
          </select>
        </div>
        <div className="search__box flex items-center">
          <input
            type="text"
            className="text-center max-sm:w-[250px] rounded-xl max-sm:my-3 my-5"
            placeholder="Search a game..."
            onChange={handleSearch}
          />
        </div>
        <div className="filter__widget flex items-center">
          <select
            className="w-[150px] max-sm:w-[250px] mx-5 rounded-xl max-sm:mb-3 text-center"
            onChange={handleCategoryFilter}
          >
            <option>Filter By Category</option>
            <option value="Playstation">Playstation</option>
            <option value="Xbox">Xbox</option>
            <option value="Nintendo">Nintendo</option>
          </select>
        </div>
      </section>

      <section className="flex justify-center text-center bg-red-400">
        {loading ? (
          <h4 className="py-5 text-center fw-bold ">Loading.....</h4>
        ) : productsData.length === 0 ? (
          <h1 className="">No products are found!</h1>
        ) : (
          <div className="container w-[1000px] flex flex-wrap justify-center">
            <ProductsList data={productsData} />
          </div>
        )}
      </section>
    </Helmet>
  );
};

export default Shop;
