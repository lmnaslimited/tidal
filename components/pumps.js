import Scope_image  from "./scope-image"
export default function Pumps({pumps}) {
    return (
  
<div id="pumps" className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
          <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
            <div className="md:p-4 md:bg-gray-100">
            <Scope_image width="220" height="220" class_scope="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                part="/scope/pump-1_ccexpress-238x238.png"
                alt=""
              />
            </div>
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                pump-1
                </h1>
                <div className="my-2 px-2">
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    class_scope="h-8 w-8 rounded-full border border-gray-400"
                    part="/european-union.png"
                    alt=""
                  />
                  <div className="flex flex-row grid  mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/desmi.png" alt="" />
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/azcue.png" alt="" />
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/grundfos.png" alt="" />
                  <Scope_image width="52" height="24"  className="h-8 ml-2" part="/brand/ALLWEILER.png" alt="" />
                  
                </div>
                </div>
                  {/**  <div className="flex flex-row">
                  <Scope_image width="" height="" 
                    className="h-8 w-8 rounded-full border mt-4 border-gray-400"
                    part="/china.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mt-4 mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="" height=""  className="h-12 " part="/brand/" alt="" />
                  <Scope_image width="" height=""  className="h-12" part="/brand/" alt="" />
                  <Scope_image width="" height=""  className="h-12 " part="/brand/" alt="" />
                  <Scope_image width="" height=""  className="h-12" part="/brand/" alt="" />
                  <Scope_image width="" height=""  className="h-4 mt-2 ml-2 md:ml-4" part="/" alt="" />
                </div>
                </div>
                */}
                 <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    class_scope="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    part="/japan.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/taikokikai.png" alt="" />
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/heishin.png" alt="" />
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/teikoku.png" alt="" />
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/sasakura.png" alt="" />
                  
                </div>
                </div>
                  <div className="flex flex-row">
                  <Scope_image width="32" height="32"
                    class_scope="h-8 w-8 rounded-full mt-4 border border-gray-400"
                    part="/south-korea.png"
                    alt=""
                  />
                  <div className="flex flex-row grid mx-4 gap-2 grid-cols-5 lg:grid-cols-5">
                  <Scope_image width="52" height="24"  className="h-8" part="/brand/shinshin.png" alt="" />
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
         
    )
            }
       