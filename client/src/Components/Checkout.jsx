import Helmet from "./Helmet";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <section>
        <div className="w-screen m-auto text-center flex flex-col items-center justify-center"> 
        <h1 className="text-center w-64 p-3 m-5 font-bold text-3xl bg-blue-600 rounded-2xl">Checkout</h1>
          <div className="w-[800px] flex max-md:flex-col justify-around">
            <div className="flex flex-col">
              <h6 className="mb-2 font-bold">Billing Indivation:</h6>
              <div className="billing-div">
                <div className="div-group">
                  <input className="w-80 border-2 mb-2" type="text" placeholder="Enter your name" />
                </div>

                <div className="div-group">
                  <input className="w-80 border-2 mb-2" type="email" placeholder="Enter your email" />
                </div>

                <div className="div-group">
                  <input className="w-80 border-2 mb-2" type="number" placeholder="Phone number" />
                </div>

                <div className="div-group">
                  <input className="w-80 border-2 mb-2" type="text" placeholder="Street address" />
                </div>

                <div className="div-group">
                  <input className="w-80 border-2 mb-2" type="text" placeholder="City" />
                </div>

                <div className="div-group">
                  <input className="w-80 border-2 mb-2" type="text" placeholder="Postal code" />
                </div>

                <div className="div-group">
                  <input className="w-80 border-2 mb-5" type="text" placeholder="Country" />
                </div>
              </div>
            </div>

            <div className="w-1/3 max-md:mb-5 max-md:m-auto flex flex-col justify-center">
              <div className="checkout-cart bg-blue-700 text-white border-2 rounded-lg">
                <h6 className="flex justify-around my-3">
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6 className="flex justify-around mb-3">
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6 className="flex justify-around mb-3">
                  <span>
                    Shipping: <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4 className="flex justify-around mb-3">
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <div className="btn flex justify-center my-3">
                <button className="buy-btn w-5/6 rounded-md bg-white text-blue-700">
                  Place an order
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Checkout;
