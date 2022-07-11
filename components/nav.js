import Image from "next/image"
import Link from "next/link"
export default function nav() {
  return (
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <Link href="/"><a>
          <Image alt="" width="140" height="60" className="w-40 h-16 text-white p-2 " src= {process.env.assetPrefix + "/TG logo-01.png"}/>
        </a></Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link href="/about">
      <a className="mr-4">About</a>
    </Link>
    <Link href="/scope-of-supply">
      <a className="mr-4">Scope</a>
    </Link>
    <Link href="/#contact">
      <a>Contact</a>
    </Link> </nav>
       <Link href="mailto:sales@tidalgroups.com" ><button className="inline-flex items-center bg-indigo-600 text-white hover:bg-indigo-600 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">Get Quote
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button></Link>
   
        </div>
  )
}
