import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Helmet from "./Helmet";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const Tr = ({ item }) => {
    const dispatch = useDispatch();
  
    const deleteProduct = () => {
      dispatch(cartActions.deleteItem(item.id));
    };
  
    return (
      <tr className="border-t-2 text-center">
        <td>
          <img src={item.imgUrl} alt="" width={80} height={80} className="object-contain" />
        </td>
        <td>{item.productName}</td>
        <td>${item.price}</td>
        <td><p className="ml-1">{item.quantity}pcs</p></td>
        <td>
          <i
            onClick={deleteProduct}
            className="ri-delete-bin-line cursor-pointer rounded-sm bg-red-600 text-white"
          ></i>
        </td>
      </tr>
    );
  };

  return (
    <Helmet title="Cart">
      <div className="container mb-10 m-auto w-screen flex flex-col items-center">
        <h1 className="text-center w-64 p-3 m-5 font-bold text-3xl bg-blue-600 rounded-2xl">Cart</h1>
      <section className="flex max-sm:flex-col justify-around">
              {cartItems.length === 0 ? (
                <h2 className="p-3 mb-5 text-center bg-white rounded-2xl">No item added to the cart!</h2> 
              ) : (
                <table className="table border-2 sm:w-3/4">
                  <thead className="bg-slate-500">
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
              {cartItems.length === 0 ? <button className="p-3 ml-3 mb-5 bg-red-400 border-b-2 border-black rounded-2xl"><Link to="/shop">start shopping</Link></button> :
              <div className="right-containe sm:w-1/2 max-sm:mt-5 mx-5 flex flex-col justify-center items-center text-center border-4 border-blue-600 rounded-lg">
                <h6 className="w-40 mt-2 p-2 font-bold items-center justify-between bg-slate-400 rounded-2xl">
                  Subtotal 
                  <span className=""> ${totalAmount}</span>
                </h6>
              <p className="fs-6 my-4">
                taxes and shipping will calculate in checkout
              </p>
              <div>
                <button className="buy__btn mb-2 w-20 border-b-2 border-slate-500 rounded-xl bg-green-200">
                  <Link to="/checkout">Checkout</Link>
                </button>
                <button className="buy__btn w-40 border-b-2 ml-2 border-slate-500 rounded-xl bg-red-400">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
              </div>
              }
      </section>
      </div>
    </Helmet>
  );
};



export default Cart;