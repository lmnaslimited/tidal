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
export default function ScopeOfSupply() {
  return (
    <div>
    <div>
        <Nav />
    </div>
      <section className="py-5">
        <div id="aircompressor">
          <Aircompressor></Aircompressor>
        </div>

        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
            
               <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/air-starters-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                 Air Starters
                </h1>
                <div className="my-2  px-2">
                 <div className="flex  flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 -mt-2" src="./Brands/tdi.svg" alt="" />
                  <img className="h-12 -mt-2" src="./Brands/bukh.svg" alt="" />
                  <img className="h-12 -mt-2" src="/Brands/wartsila.svg" alt="" />
                  <img className="h-12 -mt-2" src="./Brands/gali.svg" alt="" />
                  <img className="h-4 mt-2" src="./more.png" alt="" />
                </div>
                </div>
                <div className="flex flex-row">
                <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                   <div className="flex flex-row grid gap-2 mx-4 grid-cols-5 mt-2 lg:grid-cols-5">
                  <img className="h-8" src="/Brands/ningbo.svg" alt="" />
                  <img className="h-8" src="/Brands/man.svg" alt="" />
                  <img className="h-8" src="/Brands/" alt="" />
                  <img className="h-8" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                  
                </div>
                  <div className="flex flex-row">
                 
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                 
                   <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 mt-0" src="/Brands/jrcs.svg" alt="" />
                  <img className="h-12" src="/Brands/terasaki.svg" alt="" />
                  <img className="h-12 " src="/Brands/line.svg" alt="" />
                  <img className="h-12" src="/Brands/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                <div className="flex flex-row">
                <img
                    className="h-8 w-8 my-2 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 grid-cols-5">
                  <img className="h-12" src="./Brands/samgong.svg" alt="" />
                  <img className="h-8" src="./Brands/kte.svg" alt="" />
                  <img className="h-8" src="/Brands" alt="" />
                  <img className="h-8" src="./Brands" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4 " src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
              <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
       
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Air-Conditioning-and-Refrigeration-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Air Conditioning and Refrigeration
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 -mt-2" src="/Brands/johnson-controls.svg" alt="" />
                  <img className="h-12 -mt-1" src="/Brands/" alt="" />
                  <img className="h-12 -mt-1" src="/Brands/" alt="" />
                  <img className="h-12 -mt-1" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/Brands/hudong.png" alt="" />
                  <img className="h-12 " src="/Brands/" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                  <div className="flex flex-row">
                 
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                   <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12" src="/Brands/daikin.svg" alt="" />
                  <img className="h-12" src="/Brands/nissin.svg" alt="" />
                  <img className="h-12" src="/Brands/mycom.svg" alt="" />
                  <img className="h-12" src="/Brands/mitsubishi.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                 
                   <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12" src="/Brands/dongwha.svg" alt="" />
                  <img className="h-12" src="/Brands/h.svg" alt="" />
                  <img className="h-12" src="/Brands/.svg" alt="" />
                  <img className="h-12" src="/Brands/.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Blowers-and-Fans-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Blowers and Fans
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 -mt-1" src="/Brands/becker.svg" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-12 " src="/Brands/" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                {/**<div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/Brands/hb.png" alt="" />
                  <img className="h-12 " src="/Brands/" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
  </div>*/}
                 
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                 
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12" src="/Brands/osaka.svg" alt="" />
                  <img className="h-12" src="/Brands/misuzu1.svg" alt="" />
                  <img className="h-12 " src="/Brands/" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12" src="/Brands/hyosung.svg" alt="" />
                  <img className="h-12" src="/Brands/hyundai.svg" alt="" />
                  <img className="h-12 " src="/Brands/" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
              </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Boiler-Parts-and-Accessories-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Boiler Parts and Accessories
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 -mt-2" src="/Brands/siemens.svg" alt="" />
                  <img className="h-12 -mt-2" src="/Brands/saacke.svg" alt="" />
                  <img className="h-8 " src="/Brands/kral.svg" alt="" />
                  <img className="h-12 -mt-2" src="/Brands/weishaupt.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                 {/**  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/Brands/" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>*/} 
                
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 -mt-2" src="/Brands/miura.svg" alt="" />
                  <img className="h-12 -mt-2" src="/Brands/sunflame.svg" alt="" />
                  <img className="h-6" src="/Brands/azbil.svg" alt="" />
                  <img className="h-12 -mt-2" src="/Brands/misuzu.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                <div className="flex flex-row">
                  
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                 
                   <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12" src="/Brands/kangrim.svg" alt="" />
                  <img className="h-12 -mt-2" src="/Brands/" alt="" />
                  <img className="h-8 " src="/Brands/" alt="" />
                  <img className="h-12 -mt-2" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Bow-Thrusters-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Bow Thrusters
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12" src="/Brands/jrcs.svg" alt="" />
                  <img className="h-12" src="/Brands/terasaki.svg" alt="" />
                  <img className="h-12 " src="/Brands/line.svg" alt="" />
                  <img className="h-12" src="/Brands/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <h1  className="text-md font-bold ">wuhan</h1>
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-12 " src="/Brands/" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 -mt-2" src="/Brands/hitachi.svg" alt="" />
                  <img className="h-12 -mt-2" src="/Brands/kawasaki.png" alt="" />
                  <img className="h-12 -mt-2" src="/Brands/kte.svg" alt="" />
                  <img className="h-12 -mt-2" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 -mt-2" src="/Brands/hanbo.svg" alt="" />
                  <img className="h-12 -mt-2" src="/Brands/" alt="" />
                  <img className="h-12 -mt-2" src="/Brands/" alt="" />
                  <img className="h-12 -mt-2" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
       <div id="cranes">
        <Cranes></Cranes>
       </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Deck-Machineries-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Deck Machineries
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-10" src="/brand/rolls-royce-logo-250x250.png" alt="" />
                  <img className="h-10" src="/brand/tts-logo-250x250.png" alt="" />
                 
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 mt-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-10" src="/brand/cssc-logo-250x250.png" alt="" />
                  <img className="h-10" src="/brand/jx-logo-250x250.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 mt-2  grid-cols-5 lg:grid-cols-5">
                  <img className="h-10" src="/brand/mitsubishi-logo-250x250.png" alt="" />
                  <img className="h-10" src="/brand/kawasaki-logo-250x250.png" alt="" />
                  <img className="h-8" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 mt-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-10" src="/brand/dmc-logo-250x250.png" alt="" />
                  <img className="h-10" src="/brand/oriental-logo-250x250.png" alt="" />
                  <img className="h-12 " src="/Brands/" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Electric-motors-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Electric motors
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <img className="h-8" src="/brand/abb.png" alt="" />
                  <img className="h-12" src="/brand/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                 {/**   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>*/}
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/taiyo.png" alt="" />
                  <img className="h-8" src="/brand/onishi-logo-250x250.png" alt="" />
                 <img className="h-8" src="/brand/Yokogawa.png" alt="" />
                 <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 mt-2 gap-2 grid-cols-5 lg:grid-cols-5">
                   <img className="h-8" src="/brand/Samgong.png" alt="" />
                  <img className="h-8" src="/brand/hyosung.png" alt="" />
                  <img className="h-8" src="/brand/ssangyong.png" alt="" />
                   <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Filters-and-Strainers_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Filters and Strainers
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/boll.png" alt="" />
                  <img className="h-8" src="/brand/twinfilter.png" alt="" />
                  <img className="h-8" src="/brand/auramarine.png" alt="" />
                  <img className="h-8 ml-2" src="/brand/donaldson.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <img className="h-8" src="/brand/Zibo-Yonghua.png" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/fujifilter.png" alt="" />
                  <img className="h-8" src="/brand/mizuno.png" alt="" />
                  <img className="h-8" src="/brand/niikurakogyo.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <img className="h-8 " src="/brand/samkun.png" alt="" />
                  <img className="h-8" src="/brand/jowa.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/fire-detection-safety-equipments-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Fire Detection Safety Equipments
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/autronica.png" alt="" />
                  <img className="h-8 mt-1" src="/brand/tyco.png" alt="" />
                  <img className="h-8" src="/brand/kidde.png" alt="" />
                  <img className="h-8" src="/brand/thornsecurity.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/nittan.png" alt="" />
                  <img className="h-8" src="/brand/nohmi.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                {/**  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <img className="h-12 " src="/Brands/" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>*/}
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <img className="h-8" src="/brand/nk.png" alt="" />
                  <img className="h-10" src="/brand/saracom.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Flow Meters_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Flow Meters
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/aquametro.png" alt="" />
                  <img className="h-8" src="/brand/alfalaval.png" alt="" />
                  <img className="h-12 " src="/brand/kral.png" alt="" />
                  <img className="h-12" src="/brand/vaf.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  {/**<div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <img className="h-12 " src="/Brands/" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div> */} 
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8  rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-10" src="/brand/yokogawa.png" alt="" />
                  <img className="h-8" src="/brand/tokico.png" alt="" />
                  <img className="h-8" src="/brand/azbil.png" alt="" />
                 <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full mt-2 border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/daeho.png" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Fresh_Water_Generators-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Fresh Water Generators
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/SPX.png" alt="" />
                  <img className="h-8" src="/brand/alfalaval.png" alt="" />
                  <img className="h-8 ml-2" src="/brand/gea.png" alt="" />
                  <img className="h-8 ml-2" src="/brand/tacmina.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/nantongshentong.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <img className="h-8" src="/brand/sasakura.png" alt="" />
                  <img className="h-8" src="/brand/Miura.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                 <img className="h-8" src="/brand/ilseung.png" alt="" />
                  <img className="h-8" src="/brand/jowa.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
      <div id="injectors" >
       <Injectors></Injectors> 
        </div> 
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Galley-Equipments-final-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Galley Equipments
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid ml-2 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-10" src="/brand/Aluminox.png" alt="" />
                  <img className="h-8 ml-2" src="/brand/electrolux.png" alt="" />
                  <img className="h-10 -ml-4" src="/brand/wesco.png" alt="" />
                  <img className="h-6 mt-2" src="/brand/metos.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  {/** <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>*/} 
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                   <img className="h-8" src="/brand/Mitsubishi-logo-238x238.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-6 mt-2" src="/brand/kangli.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div id="generatorengine">
          <Generatorengine>

          </Generatorengine>
        </div>

        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Governor-ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Governor
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/woodward.png" alt="" />
                  <img className="h-12 " src="/brand/line.svg" alt="" />
                  <img className="h-12" src="/brand/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/zexel.png" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                {/** 
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>*/}
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
      <div id="heatexchanger">
      <Heatexchanger></Heatexchanger>  
        </div>  
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Incinerators_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Incinerators
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/teamtec.png" alt="" />
                  <img className="h-8" src="/brand/atlas.png" alt="" />
                  <img className="h-8" src="/brand/vestas.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/cssc-logo-250x250.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/miura.png" alt="" />
                  <img className="h-8" src="/brand/misuzu.png" alt="" />
                  <img className="h-8" src="/brand/fuji-electric.png" alt="" />
                  <img className="h-8 -ml-2" src="/brand/volcano.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-4 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/kangrim.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Inert-Gas-System_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Inert Gas System
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/hamworthy.png" alt="" />
                  <img className="h-8 -ml-2" src="/brand/atlas.png" alt="" />
                  <img className="h-8" src="/brand/tmc.png" alt="" />
                  <img className="h-8" src="/brand/alfalaval.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-4 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-6" src="/brand/smc.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-10" src="/brand/hitech.png" alt="" />
                  <img className="h-10" src="/brand/ngk.png" alt="" />
                  <img className="h-8" src="/brand/misuzu.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/Hyundai-Heavy-Industries.png" alt="" />
                  <img className="h-8 -ml-1" src="/brand/kangrim.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Level-Sensors&Thermometers_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Level Sensors and Thermometers
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/endresshauser.png" alt="" />
                  <img className="h-8" src="/brand/trafag.png" alt="" />
                  <img className="h-8" src="/brand/" alt="" />
                  <img className="h-12" src="/brand/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/shangairongde.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-6 mt-1" src="/brand/musasino.png" alt="" />
                  <img className="h-8" src="/brand/yohji-yamamoto.png" alt="" />
                  <img className="h-8" src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/ilseung.png" alt="" />
                  <img className="h-8" src="/brand/jowa.png" alt="" />
                  <img className="h-8 " src="/brand/panasia.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Lifeboat-and-Davits-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Lifeboat and Davits
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/bukh.png" alt="" />
                  <img className="h-8" src="/brand/fassmer.png" alt="" />
                  <img className="h-8" src="/brand/norsafe.png" alt="" />
                  <img className="h-8" src="/brand/schneider.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-4 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/nk.png" alt="" />
                  <img className="h-8" src="/brand/csic.png" alt="" />
                  <img className="h-8" src="/brand/wuxi_hai_hong.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-10" src="/brand/tohatsu.png" alt="" />
                  <img className="h-10" src="/brand/daihatsu.png" alt="" />
                  <img className="h-10" src="/brand/shigi.png" alt="" />
                  <img className="h-10" src="/brand/ihi.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full mt-2 border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/hyundai.png" alt="" />
                  <img className="h-8" src="/brand/oriental.png" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Magnetic-Gyro-Compasses-.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Magnetic Gyro Compasses
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/LileyandGillieBLNT.png" alt="" />
                  <img className="h-12" src="/brand/terasaki.svg" alt="" />
                  <img className="h-12 " src="/brand/line.svg" alt="" />
                  <img className="h-12" src="/brand/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                 {/**  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>*/} 
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/tokimec.png" alt="" />
                  <img className="h-10" src="/brand/yokogawa.png" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-10" src="/brand/komeri.png" alt="" />
                  <img className="h-10" src="/brand/saracom.png" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
       <div id="mainengine">
        <Mainengine></Mainengine>
       </div>

        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Oil-Mist-Detectors_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Oil Mist Detectors
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/kidde.png" alt="" />
                  <img className="h-8" src="/brand/deckma.png" alt="" />
                  <img className="h-8" src="/brand/schaller.png" alt="" />
                  <img className="h-12" src="/brand/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  {/** <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div> */}
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/daihatsu.png" alt="" />
                  <img className="h-8" src="/brand/meiyo.png" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/spacevision.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Oily-Bilge-Water-Seperators-2_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Oily Bilge Water Seperators-2
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/dvz.png" alt="" />
                  <img className="h-6" src="/brand/blohm+voss.png" alt="" />
                  <img className="h-12 " src="/brand/line.svg" alt="" />
                  <img className="h-12" src="/brand/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  {/** <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                 */}
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/taikokikai.png" alt="" />
                  <img className="h-8" src="/brand/heishin.png" alt="" />
                  <img className="h-8" src="/brand/misuzu.png" alt="" />
                  <img className="h-8" src="/brand/sasakura.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/jowa.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Oily-Bilge-Water-Seperators_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Oily Bilge Water Seperators
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12" src="/brand/jrcs.svg" alt="" />
                  <img className="h-12" src="/brand/terasaki.svg" alt="" />
                  <img className="h-12 " src="/brand/line.svg" alt="" />
                  <img className="h-12" src="/brand/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Polished_ship_propeller_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Polished Ship Propeller
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/wartsila.png" alt="" />
                  <img className="h-8" src="/brand/marellimotori.png" alt="" />
                  <img className="h-10" src="/brand/mmg.png" alt="" />
                  <img className="h-12" src="/brand/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  {/**  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>*/}
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/nakashima.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/sillametal.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Pressure-Control-Valves_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Pressure Control Valves
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/danfoss.png" alt="" />
                  <img className="h-8" src="/brand/spiraxsarco.png" alt="" />
                  <img className="h-8" src="/brand/spx.png" alt="" />
                  <img className="h-12" src="/brand/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  {/** <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div> */}
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/nakakita.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/control.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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

      <div id="pumps">
        <Pumps></Pumps>
      </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/pump-2_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                pump-2
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/desmi.png" alt="" />
                  <img className="h-8" src="/brand/azcue.png" alt="" />
                  <img className="h-8" src="/brand/grundfos.png" alt="" />
                  <img className="h-8 ml-2" src="/brand/ALLWEILER.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  {/**  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border mt-4 border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                */}
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/taikokikai.png" alt="" />
                  <img className="h-8" src="/brand/heishin.png" alt="" />
                  <img className="h-8" src="/brand/teikoku.png" alt="" />
                  <img className="h-8" src="/brand/sasakura.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/shinshin.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
                
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/pump-3_ccexpress.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                pump-3
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/desmi.png" alt="" />
                  <img className="h-8" src="/brand/azcue.png" alt="" />
                  <img className="h-8" src="/brand/grundfos.png" alt="" />
                  <img className="h-8 ml-2" src="/brand/ALLWEILER.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  {/**  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border mt-4 border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                */}
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/taikokikai.png" alt="" />
                  <img className="h-8" src="/brand/heishin.png" alt="" />
                  <img className="h-8" src="/brand/teikoku.png" alt="" />
                  <img className="h-8" src="/brand/sasakura.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/shinshin.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/pump-4_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                pump-4
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/desmi.png" alt="" />
                  <img className="h-8" src="/brand/azcue.png" alt="" />
                  <img className="h-8" src="/brand/grundfos.png" alt="" />
                  <img className="h-8 ml-2" src="/brand/ALLWEILER.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  {/**  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border mt-4 border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                */}
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/taikokikai.png" alt="" />
                  <img className="h-8" src="/brand/heishin.png" alt="" />
                  <img className="h-8" src="/brand/teikoku.png" alt="" />
                  <img className="h-8" src="/brand/sasakura.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/shinshin.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
       <div id="purifier" >
        <Purifier></Purifier>
       </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/radars-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Radars and Navigation Equipment
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/sabb.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/line.svg" alt="" />
                  <img className="h-12" src="/brand/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                 {/**  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                 */}
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/jrc.png" alt="" />
                  <img className="h-8" src="/brand/furuno.png" alt="" />
                  <img className="h-8" src="/brand/tokyo keiki.png" alt="" />
                  <img className="h-8" src="/brand/tokimec.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-4 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/koc.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Seawage-Treatment-Plant_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Seawage Treatment Plant
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/grundfos.png" alt="" />
                  <img className="h-8" src="/brand/becker.png" alt="" />
                  <img className="h-8" src="/brand/hamworthy.png" alt="" />
                  <img className="h-8" src="/brand/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/cssc-logo-250x250.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/taikokikai.png" alt="" />
                  <img className="h-8" src="/brand/sasakura.png" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/jowa.png" alt="" />
                  <img className="h-8" src="/brand/ilseung.png" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Steering-Gears_ccexpress.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Steering Gears
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/hydrostor.png" alt="" />
                  <img className="h-8 -ml-2" src="/brand/abb.png" alt="" />
                  <img className="h-8" src="/brand/hamworthy.png" alt="" />
                  <img className="h-8" src="/brand/Rolls-Royce-Logo-250x250.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/wuhan marine.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/Mitsubishi-logo-238x238.png" alt="" />
                  <img className="h-8" src="/brand/tokyo keiki.png" alt="" />
                  <img className="h-8" src="/brand/kawasaki-logo-250x250.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 -mt-2" src="/brand/flutek.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
       <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Stern-Tube-Seal-and-Bearing-final-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Stern Tube Seal And Bearing
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/saacke.png" alt="" />
                  <img className="h-10" src="/brand/corrpro.png" alt="" />
                  <img className="h-10" src="/brand/acg.png" alt="" />
                  <img className="h-10" src="/brand/evac.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full mt-2 border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/sealantern.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/Yokohama.png" alt="" />
                  <img className="h-8" src="/brand/ww.png" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/wilsonwalton.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
       <div id="turbocharger">
        <Turbocharger></Turbocharger>
       </div>
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Valves_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Valves
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-10" src="/brand/pleiger.png" alt="" />
                  <img className="h-10" src="/brand/Damco.png" alt="" />
                  <img className="h-10" src="/brand/bac.png" alt="" />
                  <img className="h-10" src="/brand/lk.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                   <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/xiamenair.png" alt="" />
                  <img className="h-8" src="/brand/nordic.png" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-1 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-6" src="/brand/misuzu.png" alt="" />
                  <img className="h-6" src="/brand/yuken.png" alt="" />
                  <img className="h-6" src="/brand/tomoe.png" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 mt-2 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mt-2 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-10" src="/brand/acevalve.png" alt="" />
                  <img className="h-8" src="/brand/tyco.png" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/Viscosity-Controllers_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Viscosity Controllers
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/gea.png" alt="" />
                  <img className="h-10 ml-2 -mt-2" src="/brand/vaf.png" alt="" />
                  <img className="h-12 " src="/brand/line.svg" alt="" />
                  <img className="h-12" src="/brand/yanmar.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                 {/** <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>*/}  
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/nakakita.png" alt="" />
                  <img className="h-4 mt-2" src="/brand/saginomiya.png" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/daeho.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
        <div className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/wiper-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Windows And Window Wipers
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/wynn.png" alt="" />
                  <img className="h-12" src="/brand/terasaki.svg" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  {/** <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-12 " src="/brand/" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/Brands/" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
              </div>*/}
                
                 <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/nippon electric.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/Brands/" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                  <div className="flex flex-row">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <img className="h-8" src="/brand/JUNG –A MARINE.png" alt="" />
                  <img className="h-12" src="/brand/" alt="" />
                  <img className="h-12 " src="/Brands/" alt="" />
                  <img className="h-12" src="/Brands/" alt="" />
                  <img className="h-4 mt-2 ml-2 md:ml-4" src="./" alt="" />
                </div>
                </div>
                </div>
               
              </div>
              <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-12">
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
         {/**
        <div className="py-5 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-2xl flex flex-row">
              <img
                className="bg-gray-100 rounded-l-lg h-48 sm:h-auto w-48 sm:w-48 border-8 border-white p-5"
                src="./construction.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                  Heavy lifters
                </h1>
                <div className="flex">
                  <img
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="./european-union.png"
                    alt=""
                  />
                  <img
                    className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    src="./china.png"
                    alt=""
                  />
                  <img
                    className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    src="./japan.png"
                    alt=""
                  />
                  <img
                    className="h-8 w-8 ml-2 rounded-full border border-gray-400"
                    src="./south-korea.png"
                    alt=""
                  />
                </div>
                <h1 className="text-black font-sans font-medium text-lg mt-2">
                  Brand
                </h1>
                <div className="grid mx-auto sm:grid-cols-4 lg:grid-cols-5">
                  <img className="h-4 px-2 mt-3" src="./yamaha.png" alt="" />
                  <img className="h-4 px-2 mt-3" src="./vercel.svg" alt="" />
                  <img className="h-4 px-2 mt-3" src="./scania.png" alt="" />
                  <img className="h-4 px-2 mt-3" src="./cat.png" alt="" />
                  <img className="h-7 -ml-5 mt-2" src="./more.png" alt="" />
                </div>
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
  */}
       
      </section>
    </div>
  );
}
