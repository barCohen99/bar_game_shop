import { useState } from "react";
import { toast } from "react-toastify";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState();
  const [enterFullPrice, setEnterFullPrice] = useState();
  const [enterStock, setEnterStock] = useState();
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async e => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const docRef = collection(db, "products");
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterProductImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);
      await uploadTask;

      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      await addDoc(docRef, {
        productName: enterTitle,
        shortDesc: enterShortDesc,
        description: enterDescription,
        category: enterCategory,
        price: enterPrice,
        fullPrice: enterFullPrice || null,
        stock: enterStock,
        imgUrl: downloadURL,
      });
  
      setLoading(false);
      toast.success("product successfully added!");
      navigate("/dashboard/all-products");
    } catch (err) {
      setLoading(false);
      toast.error("product not added!");
    }
  };
  

  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="flex w-screen">
          <div className="flex flex-col items-center w-screen">
            {loading ? (
              <h4 className="py-5">Loading.......</h4>
            ) : (
              <>
                <h4 className="p-2 my-5 font-bold rounded-md bg-orange-500">Add Product</h4>
                <form onSubmit={addProduct} className="w-4/5 flex flex-col ">
                  <div className="form-group">
                    <h6 className="font-bold text-orange-500">Product title</h6>
                    <input
                      type="text"
                      className="w-full border-2 rounded-md p-1"
                      placeholder="Enter game name"
                      value={enterTitle}
                      onChange={e => setEnterTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <h6 className="font-bold text-orange-500">Short Description</h6>
                    <input
                      type="text"
                      className="w-full border-2 rounded-md p-1"
                      placeholder="Enter short description"
                      value={enterShortDesc}
                      onChange={e => setEnterShortDesc(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group mt-3">
                    <h6 className="font-bold text-orange-500">Description</h6>
                    <input
                      type="text"
                      className="w-full border-2 rounded-md p-1"
                      placeholder="Enter description"
                      value={enterDescription}
                      onChange={e => setEnterDescription(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                      <h6 className="font-bold text-orange-500">Platform</h6>
                      <select
                        className="w-full border-2 rounded-md p-1"
                        onChange={e => setEnterCategory(e.target.value)}
                      >
                        <option>Select platform</option>
                        <option value="Playstation">Playstation</option>
                        <option value="Xbox">Xbox</option>
                        <option value="Nintendo">Nintendo</option>
                      </select>
                    </div>

                  <div className="mt-3 sm:flex content-center justify-between">
                    <div className="form-group w-full">
                      <h6 className="font-bold text-orange-500">Price</h6>
                      <input
                        type="nuber"
                      className="w-full border-2 rounded-md p-1"
                      placeholder="$39.90"
                        value={enterPrice}
                        onChange={e => setEnterPrice(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group w-full sm:mx-2">
                      <h6 className="font-bold text-orange-500">Full Price</h6>
                      <input
                        type="all"
                      className="w-full border-2 rounded-md p-1"
                      placeholder="59.99 (Optional)"
                        value={enterFullPrice === null ? '' : enterFullPrice}
                        onChange={e => setEnterFullPrice(e.target.value || null)}
                      />
                    </div>
                    <div className="form-group w-full">
                      <h6 className="font-bold text-orange-500">Stock</h6>
                      <input
                        type="number"
                      className="w-full border-2 rounded-md p-1"
                      placeholder="Number of Copies"
                        value={enterStock}
                        onChange={e => setEnterStock(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="form-group mt-3">
                      <h6 className="font-bold text-orange-500">Product Image</h6>
                      <input
                        type="file"
                        className="w-full border-2 rounded-md p-1"
                        onChange={e => setEnterProductImg(e.target.files[0])}
                        required
                      />
                    </div>
                  </div>

                  <button className="buy__btn my-5 p-2 rounded-lg bg-blue-700 text-white font-bold" type="submit">
                    Add Product
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
        <div className="admin-nav-container w-64 flex justify-around my-10">
        <Link to="/dashboard">
        <button className="p-2 rounded-lg bg-green-500 text-white">Dashboard</button>
        </Link>
        <Link to="/dashboard/all-products">
        <button className="p-2 rounded-lg bg-blue-500 text-white">All Products</button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
