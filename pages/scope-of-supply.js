export default function ScopeOfSupply() {
  return (
    <div>
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tidal Groups</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 text-gray-600 flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center bg-purple-500 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-700 rounded text-base mt-4 md:mt-0">
            Get a quote
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <section className="py-5">
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 md:w-2/4">
            <div className="rounded-lg shadow-lg flex flex-row">
              <img
                className="bg-gray-100 rounded-l-lg h-48 sm:h-auto w-48 sm:w-48 border-8 border-white p-5"
                src="assets/motorcycle.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-medium text-lg mb-2">
                  Mototcycle
                </h1>
                <div className="flex inline-flex px-2">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./europe.png"
                    alt=""
                  />
                  <img
                    className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <img
                    className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    src="./assets/japan.png"
                    alt=""
                  />
                  <img
                    className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    src="./assets/korea.png"
                    alt=""
                  />
                </div>
                <h1 className="text-black font-sans font-medium text-lg mt-2">
                  Brand
                </h1>
                <div className="grid mx-auto gap-1 sm:grid-cols-4 lg:grid-cols-5">
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/yamaha.png"
                    alt=""
                  />
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/vercel.svg"
                    alt=""
                  />
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/scania.png"
                    alt=""
                  />
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/cat.png"
                    alt=""
                  />
                  <img
                    className="h-7 -ml-5 mt-2"
                    src="./assets/more.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-2">
                <button className="font-bold inline-flex w-20 items-center h-6 bg-purple-500 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-700 rounded text-sm">
                  Quote
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 flex item-center justify-center">
          <div className="w-4/5 md:w-2/4">
            <div className="rounded-lg shadow-2xl flex flex-row">
              <img
                className="bg-gray-100 rounded-l-lg h-48 sm:h-auto w-48 sm:w-48 border-8 border-white p-5"
                src="assets/construction.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-medium text-lg mb-2">
                  Heavy lifters
                </h1>
                <div className="flex">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./assets/europe.png"
                    alt=""
                  />
                  <img
                    className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    src="./assets/china.png"
                    alt=""
                  />
                  <img
                    className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    src="./assets/japan.png"
                    alt=""
                  />
                  <img
                    className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    src="./assets/korea.png"
                    alt=""
                  />
                </div>
                <h1 className="text-black font-sans font-medium text-lg mt-2">
                  Brand
                </h1>
                <div className="grid mx-auto sm:grid-cols-4 lg:grid-cols-5">
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/yamaha.png"
                    alt=""
                  />
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/vercel.svg"
                    alt=""
                  />
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/yamaha.png"
                    alt=""
                  />
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/vercel.svg"
                    alt=""
                  />
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/vercel.svg"
                    alt=""
                  />
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/yamaha.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-2">
                <button className="font-bold inline-flex w-20 items-center h-6 bg-purple-500 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-700 rounded text-sm">
                  Quote
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 flex item-center justify-center">
          <div className="w-4/5 md:w-2/4">
            <div className="rounded-lg shadow-2xl flex flex-row">
              <img
                className="bg-gray-100 rounded-l-lg h-48 sm:h-auto w-48 sm:w-48 border-8 border-white p-5"
                src="assets/pump.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-medium text-lg mb-2">
                  Pumping system
                </h1>
                <div className="flex">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./assets/europe.png"
                    alt=""
                  />
                  <img
                    className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    src="./assets/china.png"
                    alt=""
                  />
                  <img
                    className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    src="./assets/japan.png"
                    alt=""
                  />
                  <img
                    className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    src="./assets/korea.png"
                    alt=""
                  />
                </div>
                <h1 className="text-black font-sans font-medium text-lg mt-2">
                  Brand
                </h1>
                <div className="grid mx-auto sm:grid-cols-4 lg:grid-cols-5">
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/yamaha.png"
                    alt=""
                  />
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/vercel.svg"
                    alt=""
                  />
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/yamaha.png"
                    alt=""
                  />
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/vercel.svg"
                    alt=""
                  />
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/vercel.svg"
                    alt=""
                  />
                  <img
                    className="h-4 px-2 mt-3"
                    src="./assets/yamaha.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-2">
                <button className="font-bold inline-flex w-20 items-center h-6 bg-purple-500 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-700 rounded text-sm">
                  Quote
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
