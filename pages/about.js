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
                <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
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
                    <span className="relative">The</span>
                  </span>
                  things to <br className="hidden md:block" />
                  know
                  <span className="relative px-1">
                    <div className="absolute inset-x-0 bottom-0 h-4 transform -skew-x-12 bg--800"></div>
                    <span className="relative inline-block text-indigo-800">
                      About us.
                    </span>
                  </span>
                </h2>
              </div>
              <div className="lg:w-1/2 md:ml-16">
                <p className="font-sans font-medium text-3xl">
                  Customer satisfaction is essential and
                  <span className="text-indigo-800"> hardwork</span> is the key
                  ingredient
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans font-bold leading-none tracking-tight text-gray-900 text-5xl md:mx-auto">
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
                <span className="relative">The</span>
              </span>
              journey of <br />
              <span className="text-purple-700">Tidal</span> Groups
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              we have big this canvas in front of us, we wish to paint it with
              great colours and perspectives.
            </p>
          </div>
          <div className="grid gap-8 row-gap-12 lg:grid-cols-2 mt-10">
            <div className="max-w-md sm:mx-auto sm:text-center">
              <h6 className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-white uppercase rounded-full bg-purple-700">
                Our today
              </h6>
              <p className="mb-3 text-lg font-light text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium rem aperiam, eaque ipsa quae. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque.
              </p>
            </div>
            <div className="max-w-md sm:mx-auto sm:text-center">
              <h6 className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-white uppercase rounded-full bg-purple-700">
                Our tomorrow
              </h6>
              <p className="mb-3 text-lg font-light text-gray-900">
                Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                suscipit leo. Carpe diem vulputate est nec commodo rutrum.
                Pellentesque mattis convallis nisi eu and I aint stoppin until
                the swear jars full.
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
                Our growth
                <br className="hidden md:block" />
                towards
                <span className="relative inline-block px-2">
                  <div className="absolute inset-0 transform -skew-x-12 bg-purple-700"></div>
                  <span className="relative text-white">The success</span>
                </span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-base text-gray-700 font-light text-xl">
                Our industrial experties, transparent deals, fast delivery,
                customer based approach and most importantly a zero defect range
                of products has assisted us to the success we target to acheive
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:mt-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-white uppercase rounded-full bg-purple-700">
              Core Team
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
              <span className="relative">Welcome</span>
            </span>
            our talented team of professionals
          </h2>
          <p className="text-base text-white md:text-xl">
            we are the few you will be in touch with through out the process
            from start to end
          </p>
        </div>
        <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg lg:ml-36">
          <div className="grid sm:grid-cols-3">
            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Person"
              />
            </div>
            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">Oliver Aguilerra</p>
              <p className="mb-4 text-xs text-gray-800">Product Manager</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800">
                Vincent Van Gogh's most popular painting, The Starry Night.
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3">
            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
            </div>
            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">Marta Clermont</p>
              <p className="mb-4 text-xs text-gray-800">Design Team Lead</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800">
                Amet I love liquorice jujubes pudding croissant I love pudding.
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3">
            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
            </div>
            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">Alice Melbourne</p>
              <p className="mb-4 text-xs text-gray-800">Human Resources</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800">
                Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing
                elit.
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3">
            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
            </div>
            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">John Doe</p>
              <p className="mb-4 text-xs text-gray-800">Good guy</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800">
                Bacon ipsum dolor sit amet salami jowl corned beef, andouille
                flank.
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
}
