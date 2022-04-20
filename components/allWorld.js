import Pattern from '../components/pattern'
export default function allWorld() {
  return (
    <section className="text-gray-600 body-font">
      <div className=" p-4 bg-sky-50">
        <div className="border border-gray-200  rounded-lg  bg-white ">
          <div className="container px-5 py-8 mx-auto flex items-center md:flex-row flex-col">
            <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">

              <h1 className="md:text-3xl text-xl font-medium title-font text-gray-900">

                Marine Spare Parts
          </h1>

              <h2 className="md:text-2xl text-lg text-indigo-500 tracking-normal font-medium title-font mb-1"><Pattern text="To Any Part of the World" /> </h2>


            </div>
            <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
             <a href="/#services"> <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span className="md:ml-4 ml-0 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">SHIPPED BY</span>
                  <span className="title-font font-medium">Trusted Partners</span>
                </span>
              </button>
              </a>
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <img src="/brand-logo-238x238.png" className='w-6 h-6'/>
                <span className="md:ml-4 ml-0 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">Supplying</span>
                  <span className="title-font font-medium">Global Brands</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}