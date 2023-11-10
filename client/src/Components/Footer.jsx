import logo from '../assets/images/site-logo.png'
export default function Footer() {
  return (

<footer class="bg-slate-200 rounded-lg shadow dark:bg-gray-900 max-sm:text-center">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex justify-center mb-4 sm:mb-0">
                <img src={logo} width={50} class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BarGameShop</span>
            </a>
            <ul class="flex flex-wrap justify-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/about" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="/contact" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700"/>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">BarCohen™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}
