import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import ProductsList from "./UI/ProductsList";
import products from "../assets/data/products";
import Helmet from "./Helmet";


// import { db } from "../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import useGetData from "../custom-hooks/useGetData";

const ProductDetails = () => {
//   const [tab, setTab] = useState("desc");
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = product.find((item)=> item.id === id);
//   const { data: products } = useGetData("products");
const {
    imgUrl,
    productName,
    price,
    // description,
    shortDesc,
    category,
  } = product;

//   useEffect(() => {
//     const getProduct = async () => {
//       const docRef = doc(db, "products", id);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         setProduct(docSnap.data());
//       } else {
//         console.log("no product!");
//       }
//     };

//     getProduct();
//   }, [id]);
//   const relatedProducts = products.filter(item => item.category === category);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Product added successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>

      <section className="pt-0">
        <div className="container">
          <div className="flex">
            <div className="flex flex-col">
              <img src={imgUrl} alt="" />
            </div>
            <div className="flex flex-col">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="flex items-center gap-5">
                  <span className="product__price">${price}</span>
                  <span>Category: {category}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}>
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container">
          <div className="flex">
            <div className="flex flex-col">
              <div className="tab__wrapper flex items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
              

                    <div className="review__form">
                      <h4>Leave your experience</h4>
                

                      

                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className="buy__btn"
                        >
                          Submit
                        </motion.button>
                    </div>
              )}
            </div>

            <div className="flex flex-col">
              <h2 className="related__title">You might also like</h2>
            </div>
            <ProductsList data={relatedProducts} />
          </div>
        </div>
      </section> */}
    </Helmet>
  );
};

export default ProductDetails;