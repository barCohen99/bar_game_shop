import {Link} from "react-router-dom";
import homeLogo from "../assets/images/open-page-logo.png";
import xboxLogo from "../assets/images/xbox-logo.png";
import psLogo from "../assets/images/ps-logo.png";
import ntLogo from "../assets/images/nt-logo.webp";
import Form from "./HomeForm";
import ProductsList from "./UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";
import Helmet from "./Helmet";

export default function Home() {
  const { data: products} = useGetData("products");
  const saleProducts = products.filter((item:any) => item.fullPrice != null);
  return (
    <Helmet title="Home">
      <div
        className="upper-container w-screen mb-5 text-center bg-slate-400" style={{ height: "350px" }}>
        <div className="img-container w-screen h-auto flex justify-center">
          <div className="flex flex-col justify-around">
            <Link to="/shop" className="hover:bg-slate-200 p-2 rounded-3xl max-sm:hidden"><img src={psLogo} alt="logo" width={95} /></Link>
            <Link to="/shop" className="hover:bg-slate-200 p-2 rounded-3xl max-sm:hidden"><img className="ml-2" src={ntLogo} alt="logo" width={75} /></Link>
          </div>
          <img src={homeLogo} alt="logo" height={300} width={300} />
          <div className="flex flex-col justify-center">
          <Link to="/shop" className="hover:bg-slate-200 p-2 rounded-full max-sm:hidden"><img src={xboxLogo} alt="logo" width={75} /></Link>
          </div>
        </div>
        <Form />
      </div>
        <div className="mid-container w-screen h-auto mb-5 flex justify-center max-md:flex-col items-center ">
          <div className="left-card w-60 mx-3 flex justify-center items-center border-2 rounded-lg bg-green-100">
            <div className="left-side w-3/4 ">
              <h5 className="text-lg font-medium">Cheapest Games!</h5>
              <p>prices will be compared</p>
            </div>
            <div className="right-side ">logo</div>
          </div>
          <div className="mid-card w-60 mx-3 max-md:my-5 flex justify-center items-center border-2 rounded-lg bg-green-100">
            <div className="left-side w-3/4">
              <h5 className="text-lg font-medium">Home Delivery!</h5>
              <p>~or close post office~</p>
            </div>
            <div className="right-side">logo</div>
          </div>
          <div className="right-card w-60 mx-3 flex justify-center items-center border-2 rounded-lg bg-green-100">
            <div className="left-side w-3/4">
              <h5 className="text-lg font-medium">Smart payments!</h5>
              <p>secure payment system</p>
            </div>
            <div className="right-side">logo</div>
          </div>
        </div>
      <div className="lower-container w-screen flex flex-col items-center text-center bg-red-400">
        <div className="header-box w-[250px] pt-8 m-auto">
        <header className=" bg-white border-4 border-solid rounded-xl border-yellow-400">
          <h2 className="text-xl font-semibold">Recomended Games</h2>
          <p>My favorite games on sale!</p>
        </header>
        </div>
        <div className="container w-[1000px] my-5 flex sm:flex-wrap max-sm:flex-col justify-center">
          <ProductsList data={saleProducts}/>
        </div>
      </div>
    </Helmet>
  );
}
