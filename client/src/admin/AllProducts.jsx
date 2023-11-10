import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import useGetData from "../custom-hooks/useGetData";

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");

  const deleteProduct = async id => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Deleted!");
  };

  return (
          <div className="flex flex-col items-center w-screen">
              <h4 className="p-2 my-10 font-bold rounded-md bg-blue-500">All Products</h4>
            <table className="table w-3/4">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Stock</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center border-2">
                {loading ? (
                  <h4 className="py-5 text-center font-bold ">Loading.....</h4>
                ) : (
                  productsData.map(item => (
                    <tr key={item.id} className="border-t-2 h-28">
                      <td>
                        <img src={item.imgUrl} width={100} className="m-auto" />
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.stock}</td>
                      <td>{item.category}</td>
                      <td>${item.price}</td>
                      <td>
                        <button
                          onClick={() => {
                            deleteProduct(item.id);
                          }}
                          className="btn p-2 rounded-lg bg-red-600 text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="admin-nav-container w-64 flex justify-around my-10">
        <Link to="/dashboard">
        <button className="p-2 rounded-lg bg-green-500 text-white">Dashboard</button>
        </Link>
        <Link to="/dashboard/add-product">
        <button className="p-2 rounded-lg bg-orange-500 text-white">Add Product</button>
        </Link>
        </div>
          </div>
  );
};

export default AllProducts;
