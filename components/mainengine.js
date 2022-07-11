import Scope_image  from "./scope-image"
export default function Mainengine({mainengine}) {
  return (

    <div id="mainengine" className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <Scope_image width="240" height="240"
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/main-engine-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                Main Engine
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="/european-union.png"
                    alt=""
                  />
                <div className="flex flex-row grid grid-cols-5 gap-1 md:grid   mx-4 gap-2 md:grid-cols-5  lg:grid-cols-5">
                <Scope_image width="52" height="24" className="h-8 -ml-2" src="/brand/cummins.png" alt="" />
                <Scope_image width="52" height="24" className="h-8" src="/brand/sulzer.png" alt="" />
               <Scope_image width="52" height="24" className="h-8 ml-2" src="/brand/deutz.png" alt="" />
                  <Scope_image width="52" height="24" className="h-8" src="/brand/hcp.png" alt="" />
                    </div>
                </div>
                <div className="flex flex-row">
                   <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    src="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="24" className="h-8" src="/brand/hudong.png" alt="" />
                  <Scope_image width="52" height="24" className="h-8 " src="/brand/manbw.png" alt="" />
                    </div>
                </div>
                
                   
                </div>
                <div className="flex flex-row">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full border border-gray-400"
                    src="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="24" className="h-8" src="/brand/hitachizosen.png" alt="" />
                  <Scope_image width="52" height="24" className="h-8" src="/brand/makita.png" alt="" />
                  <Scope_image width="52" height="24" className="h-8" src="/brand/mitsubishi-logo-238x238.png" alt="" />
                  <Scope_image width="52" height="24" className="h-8" src="/brand/kawasaki.png" alt="" />
                    </div>
                </div>
                 
                </div>
                  <div className="flex flex-row">
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    className="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    src="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="28" height="32" className="h-8" src="/brand/hyundai.png" alt="" />
                  <Scope_image width="28" height="32" className="h-8" src="/brand/doosan.png" alt="" />
                  <Scope_image width="28" height="32" className="h-8" src="/brand/stx.png" alt="" />
                  <Scope_image width="28" height="32" className="h-8" src="/brand/ssangyong.png" alt="" />
                  
                </div>
                </div>
                  
                </div>
                </div>
               
              </div>
             <div className="mt-2 md:mb-0 mb-8 md:ml-0 ml-6">
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
  )} 