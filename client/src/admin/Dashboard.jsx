import { Link } from "react-router-dom";
import useGetData from "../custom-hooks/useGetData";

const Dashboard = () => {
  const { data: products } = useGetData("products");

  return (
    <div className="admin-tools-container w-screen m-auto flex flex-col items-center">
       <h1 className="text-center w-64 p-3 m-5 font-bold text-3xl bg-green-400 rounded-2xl">
          Dashboard
        </h1>
      <div className="dashboard-container mt-5 flex justify-center text-center p-2 border-2 border-slate-400 rounded-2xl">
        <div className="revenue-boxv">
          <h5 className="p-1 bg-slate-300 rounded-lg">Total Sales</h5>
          <span>x</span>
        </div>
        <div className="order-box mx-10">
          <h5 className="p-1 bg-slate-300 rounded-lg">Orders</h5>
          <span>x</span>
        </div>
        <div className="products-box">
          <h5 className="p-1 bg-slate-300 rounded-lg">Total Products</h5>
          <span>{products.length}</span>
        </div>
      </div>
      <div className="admin-nav-container w-64 flex justify-around my-10">
        <Link to="add-product">
        <button className="p-2 rounded-lg bg-orange-500 text-white">Add Product</button>
        </Link>
        <Link to="all-products">
        <button className="p-2 rounded-lg bg-blue-500 text-white">All Products</button>
        </Link>
        </div>
    </div>
  );
};

export default Dashboard;
