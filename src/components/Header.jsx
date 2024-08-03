const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Building digital
              <br />
              <span className="text-pink-500">products & brands</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              I am a Digital Product Designer and Creative Designer in Dhaka.
              <br />
              I specialize in UX/UI Design, Responsive Web & Mobile Design,
              <br />
              Front-end Development, and more
            </p>
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300">
              Let's talk 👋
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/path-to-your-image.jpg"
              alt="Designer"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
