import Image from "next/image"
export default function nav() {
  return (
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image width="140" height="60" className="w-40 h-16 text-white p-2 " src="/TG logo-01.png"/>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a href="/about" className="mr-5 hover:text-gray-900">About</a>
          <a href="/scope-of-supply" className="mr-5 hover:text-gray-900">Scope</a>
          <a href="/#contact" className="mr-5 hover:text-gray-900">Contact</a>
        </nav>
        <button className="inline-flex items-center bg-indigo-500 text-white hover:bg-indigo-600 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">Get Quote
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
   
        </div>
  )
}
