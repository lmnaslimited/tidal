export default function AboutUs() {
  return (
    <div>
      <section className="relative">
        <img className="absolute inset-0 object-cover w-full h-full" alt="" />
        <div className="relative bg-opacity-50 bg-blue-200">
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
            </svg>
          </div>
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
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
              <div className="lg:w-1/2">
                <h2 className="max-w-lg mb-6 font-sans text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-18 z-0 hidden w-32 -mt-8 -ml-20 text-black lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7"></circle>
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                        width="52"
                        height="24"
                      ></rect>
                    </svg>
                    <span className="relative mr-2">The</span>
                  </span>
                   <br className="hidden md:block" />
                   things to know
                  <span className="relative px-1">
                    <div className="absolute inset-x-0 bottom-0 h-4 transform -skew-x-12 bg--800"></div>
                    <span className="relative inline-block text-indigo-800">
                      About us.
                    </span>
                  </span>
                </h2>
              </div>
              <div className="lg:w-1/2 md:ml-16">
                <p className="font-sans font-medium text-2xl lg:text-2xl">
                We provide Services on board of Marine Equipment & ship spare parts all around the world with 
               <span className="text-indigo-800"> 100% Customer satisfication </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans font-bold leading-none tracking-tight text-gray-900 text-3xl md:text-5xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 sm:block"
                >
                  <defs>
                    <pattern
                      id="bebc38d1-bf72-4c77-a073-f0fe5abe0753"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#bebc38d1-bf72-4c77-a073-f0fe5abe0753)"
                    width="52"
                    height="24"
                  ></rect>
                </svg>
                <span className="relative mr-2">The</span>
              </span>
              journey of <br />
              <span className="text-purple-700">Tidal</span> Groups
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            We ensure in the simplest way the export of Marine Equipments through Logistics even in the most difficult situations that a ship will face.
We will be the bridge between the customer satisfaction and logistics movements. 

            </p>
          </div>
          <div className="grid gap-8 row-gap-12 lg:grid-cols-2 mt-10">
            <div className="max-w-md sm:mx-auto sm:text-center">
              <h6 className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-white uppercase rounded-full bg-purple-700">
                MISSION
              </h6>
              <p className="mb-3 text-lg font-semibold text-gray-900">
              We will ship the Marine Equipments & ship spare to each and every part of the world.
              The commitment guarantee we offer our clients is based on the strength of our company.

              </p>
            </div>
            <div className="max-w-md sm:mx-auto sm:text-center">
              <h6 className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-white uppercase rounded-full bg-purple-700">
               VISION
              </h6>
              <p className="mb-3 text-lg font-semibold text-gray-900">
              "Company products we will Travel all around the Sea"
             "Company we will conquer the ocean "
            "BY 2025 Company will be the father of Ocean Logistics Network"
 
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-20 px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="p-8 rounded shadow-lg sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font- text-xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
               OUR COMPANY
                <span className="relative inline-block px-2">
                  <div className="absolute inset-0 transform -skew-x-12 bg-purple-700"></div>
                  <span className="relative text-white">GOAL</span>
                </span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-base text-gray-700 font-semibold text-xl">
              We are coming to a new generation that B2B or B2C opinion consume away.
              The new Ideology is the H2H, Human to Human and I believe on this, "WHat and How you offer to humanity, to our Earth?".
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:mt-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-white uppercase rounded-full bg-purple-700">
              Core Values
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                  width="52"
                  height="24"
                ></rect>
              </svg>
              <span className="relative mr-2">Core values</span>
            </span>
            of our company
          </h2>
          <p className="text-base text-white md:text-xl">
            we are the few you will be in touch with through out the process
            from start to end
          </p>
        </div>
        <div className="grid gap-10 mx-auto  lg:grid-cols-2 lg:max-w-screen-lg lg:ml-36">
          <div className="grid sm:grid-cols-3">
  
            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
            <img
                className=" object-cover border-2 border-gray-200 bg-gray-200 w-full h-full rounded"
                src="/about/identify-1200x800.png"
                alt="Person"
              />
            </div>
            <div className="flex flex-col border-8 border-gray-200 justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">IDENTIFYING</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800">
              We are a trusted name in the marine industry and deal in Japanese, Korean and European spare parts
              </p>
             
            </div>
          </div>
          <div className="grid sm:grid-cols-3">
          
            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
              <img
                className="absolute object-cover bg-gray-200 w-full h-full rounded"
                src="/about/approach-1200x800.png"
                alt="Person"
              />
              
            </div>
            <div className="flex flex-col border-8 border-gray-200 justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">APPROACHING</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800">
              Our technically trained and competitive workforce strive to not only meet but exceed customers’ expectations.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3">
          
            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
              <img
                className="absolute object-cover bg-gray-200 w-full h-full rounded"
                src="/about/recognize-1200x800.png"
                alt="Person"
              />
              
            </div>
            <div className="flex flex-col border-8 border-gray-200 justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">RECOGNIZING</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800">
              We are one of the most reliable suppliers, successfully serving our customers worldwide for years.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3">
          
            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
              <img
                className="absolute object-cover w-full bg-gray-200 h-full rounded"
                src="/about/customer.png"
                alt="Person"
              />
            
            </div>
            <div className="flex flex-col border-8 border-gray-200 justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">CUSTOMER SATISFICATION</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800">
               we have a 100% client satisfaction, customer satisfication is prior to our company
              </p>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
}
