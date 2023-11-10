import {Link} from "react-router-dom"
import {motion} from "framer-motion";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({item}) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );

    toast.success("Product added successfully");
  };


  return (
    <div className="flex flex-col justify-center">
    <div className="relative m-3 flex flex-wrap mx-auto justify-center">
      <motion.div whileHover={{scale: 1.1}} className="relative h-[308px] w-[220px] flex flex-col justify-around bg-white shadow-md rounded-3xl p-2 mx-2 my-3'kn">
        <div className="overflow-x-hidden rounded-2xl relative">
          <Link to={`/shop/${item.id}`}>
            <img className="h-40 rounded-2xl w-full object-cover"
            src={item.imgUrl}/>
          </Link>
        </div>
        <div className="mt-4 pl-2 mb-2 flex justify-between ">
          <div>
            <p className="text-lg font-semibold text-gray-900 mb-0">
            <Link to={`/shop/${item.id}`}>
              {item.productName}
            </Link>
            </p>
            <div className="text-md text-gray-800 mt-0">
              {item.stock > 0 
              ?  (item.fullPrice != null ?
                (
                  <p><del>${item.fullPrice}</del> ${item.price}</p>
                ):
                (
                  <p>${item.price}</p>
                ))
              : <h6>Out of Stock</h6>}
            
           </div>
          </div>
          <div className= "flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
          <p className={ `bg-slate-300 rounded-full p-2 cursor-pointer group ${item.stock == 0 && 'hidden'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className= "h-6 w-6 group-hover:opacity-50 opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              onClick={addToCart}
             >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </p>
          </div>
        </div>
      </motion.div>
    </div>
   </div>
  );
};

export default ProductCard;