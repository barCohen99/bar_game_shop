import { Link } from "react-router-dom";
import Helmet from "./Helmet";

export default function About() {

  return (
    <Helmet title="About">
    <div className= 'background-container h-[440px] flex justify-center bg-slate-400'>
        <div className="mt-12 h-3/4 text-center bg-green-500 border-2 rounded-3xl">
            <h1 className="my-5 font-bold">About The Game Shop</h1>
            <p className="mb-5">Hey, my name is Bar Cohen and I am 24 from Hod-Hasharon,</p>
            <p className="mb-5 mx-5"> I import video games from all around the world and sell them online via various shopping methods,</p>
            <p className="mb-5">I also sell video games in a shop inside a mall located in Tel-Aviv, Dizengoff St. 50.</p>
            <p className="mb-5">Feel comfortable to 
            <Link to= "/contact">
              <button className="border-b-2 border-green-500 rounded-3xl bg-green-600 text-white ">contact me</button>
            </Link> if you have any questions!</p>
        </div>
    </div>
    </Helmet>
  )
}
