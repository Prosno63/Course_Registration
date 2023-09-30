

const Navbar = () => {
    return (
        <div>


            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="w-full sticky z-20 flex flex-wrap items-center justify-around mx-auto p-4 bg-slate-100">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black">HeroEra</span>
                    </a>
                    <div>
                        <h1 className="text-black font-bold text-2xl" >Course Registration </h1>
                    </div>
                    <div className="flex items-center md:order-2">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/0Yy95cG/Rectangle-2-2.png" alt="user photo" />
                        </button>


                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">

                        </div>


                    </div>

                </div>
            </nav>


        </div>
    );
};

export default Navbar;