export default function Pumps({pumps}) {
    return (
  
<div id="pumps" className="py-10 flex item-center justify-center">
          <div className="w-4/5 lg:w-3/4 xl:w-2/4">
            <div className="rounded-lg shadow-lg md:w-auto w-96 flex flex-col md:flex-row  transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="bg-gray-100 rounded-l-lg md:h-auto md:w-60  w-full border-8 border-white p-5"
                src="/scope/pump-1_ccexpress-238x238.png"
                alt=""
              />
              <div className="p-3 flex flex-col justify-start">
                <h1 className="text-black font-sans font-semibold text-2xl md:text-lg mb-2">
                pump-1
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
                 <a href="mailto:sales@tidalgroups.com"><button className="font-bold inline-flex w-20 items-center h-6 bg-purple-500 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-700 rounded text-sm">
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
       