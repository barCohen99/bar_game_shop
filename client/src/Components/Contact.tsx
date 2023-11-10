import Helmet from "./Helmet"

export default function Contact() {
  return (
    <Helmet title="Contact">
    <div className= 'background-container h-[440px] flex justify-center bg-slate-400'>
      <div className="mt-12 h-[250px] text-center  border-2 rounded-3xl bg-blue-500">
        <h1 className="my-5 font-bold">Contact The Game Shop</h1>
        <p className="mb-5 mx-5">The shop is located in Israel, Tel-Aviv, Dizengoff St. 50</p>
        <p className="mb-5">Contact me:</p>
        <p className="mb-5">Phone number: +972542934129</p>
        <p className="mb-5">Email: bar0.0cohen@gmail.com</p>
      </div>
    </div>
    </Helmet>
  )
}
