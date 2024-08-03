const Navbar = () => {
  return (
    <nav className="w-full h-16 md:h-20 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <img
              src="/path-to-your-logo.png"
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="font-semibold text-gray-500 text-lg">
              brand.co
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition duration-300"
            >
              Works
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition duration-300"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
