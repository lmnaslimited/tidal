import Nav from "../components/nav"
import Mainengine from "../components/mainengine"
import Generatorengine from "../components/generatorengine"
import Aircompressor from "../components/aircompressor";
import Pumps from "../components/pumps"
import Purifier from "../components/purifier";
import Turbocharger from "../components/turbocharger";
import Injectors from "../components/injectors";
import Heatexchanger from "../components/heatexchanger";
import Cranes from "../components/cranes";
import Scope_image from "../components/scope-image";
export default function ScopeOfSupply() {
  return (
    <div>
    <div className="ml-16 md:ml-0">
        <Nav />
    </div>
      <section className="py-5">
        <div id="aircompressor">
          <Aircompressor></Aircompressor>
        </div>

        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
            
               <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/air-starters-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                 Air Starters
                </h1>
                <div className="my-2  px-2">
                 <div className="flex  flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="40"  className="h-12 -mt-2" part="/Brands/tdi.svg" alt="" />
                  <Scope_image width="52" height="40"  className="h-12 -mt-2" part="/Brands/bukh.svg" alt="" />
                  <Scope_image width="52" height="40"  className="h-12 -mt-2" part="/Brands/wartsila.svg" alt="" />
                  <Scope_image width="52" height="40"  className="h-12 -mt-2" part="/Brands/gali.svg" alt="" />
                  
                </div>
                </div>
                <div className="flex flex-row">
                <Scope_image
 width="32" height="32"   className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                   <div className="flex flex-row grid gap-2 mx-4 grid-cols-5 mt-2 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/Brands/ningbo.svg" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/Brands/man.svg" alt="" />
                  
                  
                  
                </div>
                  
                </div>
                  <div className="flex flex-row">
                 
                  <Scope_image
 width="32" height="32"   className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                 
                   <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="40" height="40"  className="h-12 mt-0" part="/Brands/jrcs.svg" alt="" />
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/terasaki.svg" alt="" />
                  <Scope_image width="40" height="40"  className="h-12 " part="/Brands/line.svg" alt="" />
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/yanmar.svg" alt="" />
                  
                </div>
                </div>
                <div className="flex flex-row">
                <Scope_image
 width="32" height="32"   className="h-8 w-8 my-2 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 grid-cols-5">
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/samgong.svg" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/Brands/kte.svg" alt="" />
                  
                  
                </div>
                </div>
                </div>
               
              </div>
              <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
       
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Air-Conditioning-and-Refrigeration-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Air Conditioning and Refrigeration
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="56" height="36"  className="h-12 -mt-2" part="/Brands/johnson-controls.svg" alt="" />
                  
                </div>
                </div>
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/Brands/hudong.png" alt="" />
                  
                </div>
                </div>
                
                  <div className="flex flex-row">
                 
                  <Scope_image width="32" height="32"   className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                   <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="40"  className="h-12" part="/Brands/daikin.svg" alt="" />
                  <Scope_image width="52" height="40"  className="h-12" part="/Brands/nissin.svg" alt="" />
                  <Scope_image width="52" height="40"  className="h-12" part="/Brands/mycom.svg" alt="" />
                  <Scope_image width="52" height="40"  className="h-12" part="/Brands/mitsubishi.svg" alt="" />
                  
                </div>
                </div>
                
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                 
                   <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="40"  className="h-12" part="/Brands/dongwha.svg" alt="" />
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/h.svg" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Blowers-and-Fans-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Blowers and Fans
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="40" height="40"  className="h-12 -mt-1" part="/Brands/becker.svg" alt="" />
                 
                </div>
                </div>
                {/**<div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/Brands/hb.png" alt="" />
                  <Scope_image width="40" height="40"  className="h-12 " part="/Brands/" alt="" />
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/" alt="" />
                  
                </div>
  </div>*/}
                 
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                 
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-12" part="/Brands/osaka.svg" alt="" />
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/misuzu1.svg" alt="" />
                  
                </div>
                </div>
                
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="40"  className="h-12" part="/Brands/hyosung.svg" alt="" />
                  
                </div>
                </div>
              </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Boiler-Parts-and-Accessories-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Boiler Parts and Accessories
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="40"  className="h-12 -mt-2" part="/Brands/siemens.svg" alt="" />
                  <Scope_image width="52" height="40"  className="h-12 -mt-2" part="/Brands/saacke.svg" alt="" />
                  <Scope_image width="40" height="32"  className="h-8 " part="/Brands/kral.svg" alt="" />
                  <Scope_image width="52" height="40"  className="h-12 -mt-2" part="/Brands/weishaupt.svg" alt="" />
                  
                </div>
                </div>
                 {/**  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="40" height="40"  className="h-12 " part="/Brands/" alt="" />
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/" alt="" />
                  
                </div>
                </div>*/} 
                
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="40"  className="h-12 -mt-2" part="/Brands/miura.svg" alt="" />
                  <Scope_image width="40" height="40"  className="h-12 -mt-2" part="/Brands/sunflame.svg" alt="" />
                  <Scope_image width="36" height="32"  className="h-6" part="/Brands/azbil.svg" alt="" />
                  <Scope_image width="52" height="40"  className="h-12 -mt-2" part="/Brands/misuzu.svg" alt="" />
                  
                </div>
                </div>
                <div className="flex flex-row">
                  
                  <Scope_image width="32" height="32"   className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                 
                   <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/kangrim.svg" alt="" />
                 
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240"
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Bow-Thrusters-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Bow Thrusters
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/jrcs.svg" alt="" />
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/terasaki.svg" alt="" />
                  <Scope_image width="40" height="40"  className="h-12 " part="/Brands/line.svg" alt="" />
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/yanmar.svg" alt="" />
                  
                </div>
                </div>
                <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <h1  className="text-md font-bold ">wuhan</h1>
                   
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="40" height="40"  className="h-12 -mt-2" part="/Brands/hitachi.svg" alt="" />
                  <Scope_image width="40" height="40"  className="h-12 -mt-2" part="/Brands/kte.svg" alt="" />
                  
                </div>
                </div>
                <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="40" height="40"  className="h-12 -mt-2" part="/Brands/hanbo.svg" alt="" />
                 
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
       <div id="cranes">
        <Cranes></Cranes>
       </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Deck-Machineries-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Deck Machineries
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28" className="h-10" part="/brand/rolls-royce-logo-250x250.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/tts-logo-250x250.png" alt="" />
                 
                  
                </div>
                </div>
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 mt-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28" className="h-10" part="/brand/cssc-logo-250x250.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/jx-logo-250x250.png" alt="" />
                  
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 mt-2  grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28" className="h-10" part="/brand/mitsubishi-logo-250x250.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/kawasaki-logo-250x250.png" alt="" />
                  
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 mb-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28" className="h-10" part="/brand/dmc-logo-250x250.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/oriental-logo-250x250.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Electric-motors-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Electric motors
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <Scope_image width="32" height="32"  className="h-8" part="/brand/abb.png" alt="" />
                   
                </div>
                </div>
                 {/**   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div>*/}
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/taiyo.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/onishi-logo-250x250.png" alt="" />
                 <Scope_image width="32" height="32"  className="h-8" part="/brand/Yokogawa.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 mt-2 gap-2 grid-cols-5 lg:grid-cols-5">
                   <Scope_image width="32" height="32"  className="h-8" part="/brand/Samgong.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/hyosung.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/ssangyong.png" alt="" />
                   
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Filters-and-Strainers_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Filters and Strainers
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/boll.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/twinfilter.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/auramarine.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8 ml-2" part="/brand/donaldson.png" alt="" />
                  
                </div>
                </div>
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <Scope_image width="32" height="32"  className="h-8" part="/brand/Zibo-Yonghua.png" alt="" />
                  
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/fujifilter.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/mizuno.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/niikurakogyo.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <Scope_image width="32" height="32"  className="h-8 " part="/brand/samkun.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/jowa.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/fire-detection-safety-equipments-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Fire Detection Safety Equipments
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/autronica.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8 mt-1" part="/brand/tyco.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/kidde.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/thornsecurity.png" alt="" />
                  
                </div>
                </div>
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/nittan.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/nohmi.png" alt="" />
                  
                </div>
                </div>
                
                {/**  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <Scope_image width="40" height="40"  className="h-12 " part="/Brands/" alt="" />
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/" alt="" />
                  
                </div>
                </div>*/}
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <Scope_image width="32" height="32"  className="h-8" part="/brand/nk.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/saracom.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Flow Meters_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Flow Meters
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/aquametro.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/alfalaval.png" alt="" />
                  <Scope_image width="40" height="40"  className="h-12 " part="/brand/kral.png" alt="" />
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/vaf.png" alt="" />
                  
                </div>
                </div>
                  {/**<div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <Scope_image width="40" height="40"  className="h-12 " part="/Brands/" alt="" />
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/" alt="" />
                  
                </div>
                </div> */} 
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8  rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28" className="h-10" part="/brand/yokogawa.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/tokico.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/azbil.png" alt="" />
                 
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-2 border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/daeho.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Fresh_Water_Generators-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Fresh Water Generators
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/SPX.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/alfalaval.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8 ml-2" part="/brand/gea.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8 ml-2" part="/brand/tacmina.png" alt="" />
                  
                </div>
                </div>
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/nantongshentong.png" alt="" />
                
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <Scope_image width="32" height="32"  className="h-8" part="/brand/sasakura.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/Miura.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <Scope_image width="32" height="32"  className="h-8" part="/brand/ilseung.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/jowa.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
      <div id="injectors" >
       <Injectors></Injectors> 
        </div> 
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Galley-Equipments-final-238x238.png"
                alt=""
              />
        
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Galley Equipments
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid ml-2 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28" className="h-10" part="/brand/Aluminox.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8 ml-2" part="/brand/electrolux.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10 -ml-4" part="/brand/wesco.png" alt="" />
                  <Scope_image width="44" height="28" className="h-6 mt-2" part="/brand/metos.png" alt="" />
                  
                </div>
                </div>
                  {/** <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div>*/} 
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                   <Scope_image width="32" height="32"  className="h-8" part="/brand/Mitsubishi-logo-238x238.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28" className="h-6 mt-2" part="/brand/kangli.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div id="generatorengine">
          <Generatorengine>

          </Generatorengine>
        </div>

        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240"
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Governor-ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Governor
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/woodward.png" alt="" />
                  
                </div>
                </div>
                <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/zexel.png" alt="" />
                 
                </div>
                </div>
                {/** 
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div>
                
                
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div>*/}
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
      <div id="heatexchanger">
      <Heatexchanger></Heatexchanger>  
        </div>  
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240"
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Incinerators_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Incinerators
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/teamtec.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/atlas.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/vestas.png" alt="" />
                   
                </div>
                </div>
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="40" height="40"  className="h-12 " part="/brand/cssc-logo-250x250.png" alt="" />
                  
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/miura.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/misuzu.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/fuji-electric.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8 -ml-2" part="/brand/volcano.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-4 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/kangrim.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240"
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Inert-Gas-System_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Inert Gas System
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/hamworthy.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8 -ml-2" part="/brand/atlas.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/tmc.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/alfalaval.png" alt="" />
                  
                </div>
                </div>
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-4 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28" className="h-6" part="/brand/smc.png" alt="" />
                  
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28" className="h-10" part="/brand/hitech.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/ngk.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/misuzu.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/Hyundai-Heavy-Industries.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8 -ml-1" part="/brand/kangrim.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Level-Sensors&Thermometers_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Level Sensors and Thermometers
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/endresshauser.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/trafag.png" alt="" />
                 
                </div>
                </div>
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/shangairongde.png" alt="" />
                 
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="56" height="20" className="h-6 mt-1" part="/brand/musasino.png" alt="" />
                  <Scope_image width="56" height="20"  className="h-8" part="/brand/yohji-yamamoto.png" alt="" />
                
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/ilseung.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/jowa.png" alt="" />
                  <Scope_image width="52" height="28"  className="h-8 " part="/brand/panasia.png" alt="" />
                 
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Lifeboat-and-Davits-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Lifeboat and Davits
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/bukh.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/fassmer.png" alt="" />
                  <Scope_image width="44" height="20"  className="h-8" part="/brand/norsafe.png" alt="" />
                  <Scope_image width="44" height="20"  className="h-8" part="/brand/schneider.png" alt="" />
                  
                </div>
                </div>
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-4 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/nk.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/csic.png" alt="" />
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/wuxi_hai_hong.png" alt="" />
                 
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28" className="h-10" part="/brand/tohatsu.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/daihatsu.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/shigi.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/ihi.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-2 border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/oriental.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Magnetic-Gyro-Compasses-.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Magnetic Gyro Compasses
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/LileyandGillieBLNT.png" alt="" />
                  
                </div>
                </div>
                 {/**  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div>*/} 
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/tokimec.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/yokogawa.png" alt="" />
                 
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28" className="h-10" part="/brand/komeri.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/saracom.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
       <div id="mainengine">
        <Mainengine></Mainengine>
       </div>

        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Oil-Mist-Detectors_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Oil Mist Detectors
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/kidde.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/deckma.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/schaller.png" alt="" />
                  
                </div>
                </div>
                  {/** <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div> */}
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/daihatsu.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/meiyo.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="28"  className="h-8" part="/brand/spacevision.png" alt="" />
                   
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Oily-Bilge-Water-Seperators-2_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Oily Bilge Water Seperators-2
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/dvz.png" alt="" />
                  <Scope_image width="52" height="24" className="h-6" part="/brand/blohm+voss.png" alt="" />
                  
                </div>
                </div>
                  {/** <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div>
                 */}
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/taikokikai.png" alt="" />
                  <Scope_image width="44" height="24"  className="h-8" part="/brand/heishin.png" alt="" />
                  <Scope_image width="44" height="24"  className="h-8" part="/brand/misuzu.png" alt="" />
                  <Scope_image width="44" height="24"  className="h-8" part="/brand/sasakura.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/jowa.png" alt="" />
                 
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Oily-Bilge-Water-Seperators_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Oily Bilge Water Seperators
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/dvz.png" alt="" />
                  <Scope_image width="52" height="24" className="h-6" part="/brand/blohm+voss.png" alt="" />
                 
                </div>
                </div>
                  {/** <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div>
                 */}
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/taikokikai.png" alt="" />
                  <Scope_image width="44" height="24"  className="h-8" part="/brand/heishin.png" alt="" />
                  <Scope_image width="44" height="24"  className="h-8" part="/brand/misuzu.png" alt="" />
                  <Scope_image width="44" height="24"  className="h-8" part="/brand/sasakura.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/jowa.png" alt="" />
                 
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
             
           
             
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Polished_ship_propeller_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Polished Ship Propeller
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="20"  className="h-8" part="/brand/wartsila.png" alt="" />
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/marellimotori.png" alt="" />
                  <Scope_image width="52" height="24" className="h-10" part="/brand/mmg.png" alt="" />
                  
                </div>
                </div>
                  {/**  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div>*/}
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/nakashima.png" alt="" />
                 
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="60" height="28"  className="h-8" part="/brand/sillametal.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Pressure-Control-Valves_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Pressure Control Valves
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/danfoss.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/spiraxsarco.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/spx.png" alt="" />
                  
                </div>
                </div>
                  {/** <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div> */}
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/nakakita.png" alt="" />
                 
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/control.png" alt="" />
                 
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>

      <div id="pumps">
        <Pumps></Pumps>
      </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/pump-2_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                pump-2
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/desmi.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/azcue.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/grundfos.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8 ml-2" part="/brand/ALLWEILER.png" alt="" />
                  
                </div>
                </div>
                  {/**  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border mt-4 border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div>
                */}
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/taikokikai.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/heishin.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/teikoku.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/sasakura.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="60" height="32"  className="h-8" part="/brand/shinshin.png" alt="" />
                  
                </div>
                </div>
                </div>
                
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/pump-3_ccexpress.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                pump-3
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/desmi.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/azcue.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/grundfos.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8 ml-2" part="/brand/ALLWEILER.png" alt="" />
                  
                </div>
                </div>
                  {/**  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border mt-4 border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div>
                */}
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/taikokikai.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/heishin.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/teikoku.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/sasakura.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="60" height="32"  className="h-8" part="/brand/shinshin.png" alt="" />
                 
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/pump-4_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                pump-4
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/desmi.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/azcue.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/grundfos.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8 ml-2" part="/brand/ALLWEILER.png" alt="" />
                  
                </div>
                </div>
                  {/**  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border mt-4 border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div>
                */}
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/taikokikai.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/heishin.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/teikoku.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/sasakura.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="60" height="32"  className="h-8" part="/brand/shinshin.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
       <div id="purifier" >
        <Purifier></Purifier>
       </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/radars-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Radars and Navigation Equipment
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/sabb.png" alt="" />
                 
                </div>
                </div>
                 {/**  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div>
                 */}
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="28"  className="h-8" part="/brand/jrc.png" alt="" />
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/furuno.png" alt="" />
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/tokyo keiki.png" alt="" />
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/tokimec.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-4 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/koc.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Seawage-Treatment-Plant_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Seawage Treatment Plant
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/grundfos.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/becker.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/hamworthy.png" alt="" />
                  
                </div>
                </div>
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/cssc-logo-250x250.png" alt="" />
                  
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/taikokikai.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/sasakura.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/jowa.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/ilseung.png" alt="" />
                 
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Steering-Gears_ccexpress.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Steering Gears
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/hydrostor.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8 -ml-2" part="/brand/abb.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/hamworthy.png" alt="" />
                  <Scope_image width="48" height="24"  className="h-8" part="/brand/Rolls-Royce-Logo-250x250.png" alt="" />
                  
                </div>
                </div>
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/wuhan marine.png" alt="" />
                  
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="28"  className="h-8" part="/brand/Mitsubishi-logo-238x238.png" alt="" />
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/tokyo keiki.png" alt="" />
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/kawasaki-logo-250x250.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="40"  className="h-12 -mt-2" part="/brand/flutek.png" alt="" />
                 
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
       <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Stern-Tube-Seal-and-Bearing-final-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Stern Tube Seal And Bearing
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/saacke.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/corrpro.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/acg.png" alt="" />
                  <Scope_image width="48" height="24" className="h-10" part="/brand/evac.png" alt="" />
                  
                </div>
                </div>
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-2 border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="32"  className="h-8" part="/brand/sealantern.png" alt="" />
                  
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/Yokohama.png" alt="" />
                 
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/wilsonwalton.png" alt="" />
                
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
       <div id="turbocharger">
        <Turbocharger></Turbocharger>
       </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Valves_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Valves
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28" className="h-10" part="/brand/pleiger.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/Damco.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10" part="/brand/bac.png" alt="" />
                  <Scope_image width="52" height="20" className="h-10" part="/brand/lk.png" alt="" />
                  
                </div>
                </div>
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="56" height="24"  className="h-8" part="/brand/xiamenair.png" alt="" />
                  <Scope_image width="56" height="24"  className="h-8" part="/brand/nordic.png" alt="" />
                 
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-1 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="24" className="h-6" part="/brand/misuzu.png" alt="" />
                  <Scope_image width="52" height="24" className="h-6" part="/brand/yuken.png" alt="" />
                  <Scope_image width="52" height="24" className="h-6" part="/brand/tomoe.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="56" height="24" className="h-10" part="/brand/acevalve.png" alt="" />
                  <Scope_image width="52" height="12"  className="h-8" part="/brand/tyco.png" alt="" />
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/Viscosity-Controllers_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Viscosity Controllers
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/gea.png" alt="" />
                  <Scope_image width="44" height="28" className="h-10 ml-2 -mt-2" part="/brand/vaf.png" alt="" />
                 
                </div>
                </div>
                 {/** <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  
                </div>
                </div>*/}  
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/nakakita.png" alt="" />
                  <Scope_image width="56" height="16" className="h-4 mt-2" part="/brand/saginomiya.png" alt="" />
                 
                  
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/daeho.png" alt="" />
                  
                  
                </div>
                </div>
                </div>
               
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/wiper-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Windows And Window Wipers
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/wynn.png" alt="" />
                  
                </div>
                </div>
                  {/** <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 
                  <Scope_image width="40" height="40"  className="h-12" part="/brand/" alt="" />
                  <Scope_image width="40" height="40"  className="h-12 " part="/Brands/" alt="" />
                  <Scope_image width="40" height="40"  className="h-12" part="/Brands/" alt="" />
                  
                </div>
              </div>*/}
                
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/nippon electric.png" alt="" />
                 
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="44" height="28"  className="h-8" part="/brand/JUNG –A MARINE.png" alt="" />
                  
                  
                </div>
                </div>
                </div>
               
              </div>
              <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
         {/**
        <div className="py-5 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-2xl flex flex-row">
              <Scope_image width="240" height="240" className="bg-gray-100 rounded-l-lg h-48 sm:h-auto w-48 sm:w-48 border-8 border-white p-5"
                part="/construction.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                  Heavy lifters
                </h1>
                <div className="flex">
                  <Scope_image
 width="240" height="240"   className="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <Scope_image
 width="240" height="240"   className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <Scope_image
 width="240" height="240"   className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <Scope_image
 width="240" height="240"   className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                </div>
                <h1 className="text-black font-sans font-medium text-lg mt-2">
                  Brand
                </h1>
                <div className="grid mx-auto sm:grid-cols-4 lg:grid-cols-5">
                  <Scope_image className="h-4 px-2 mt-3" part="/yamaha.png" alt="" />
                  <Scope_image className="h-4 px-2 mt-3" part="/vercel.svg" alt="" />
                  <Scope_image className="h-4 px-2 mt-3" part="/scania.png" alt="" />
                  <Scope_image className="h-4 px-2 mt-3" part="/cat.png" alt="" />
                  <Scope_image className="h-7 -ml-5 mt-2" part="/more.png" alt="" />
                </div>
              </div>
             <div className="md:absolute md:top-2 md:right-2 mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
                <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-indigo-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-500 rounded text-sm">
        Quote
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
              </div>
            </div>
          </div>
        </div>
  */}
       
      </section>
    </div>
  );
}
