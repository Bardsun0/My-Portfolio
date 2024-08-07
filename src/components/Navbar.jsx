const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-[80px] w-[140px]" />
          </div>
          <div className="flex items-center space-x-8 font-medium">
            <a
              href="#"
              className="text-primary hover:text-accent transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-primary hover:text-accent transition duration-300"
            >
              Works
            </a>
            <a
              href="#"
              className="text-primary hover:text-accent transition duration-300"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-primary hover:text-accent transition duration-300"
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
