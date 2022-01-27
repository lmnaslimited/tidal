import Pattern from '../components/pattern'
export default function heroCta(){
    return (
        <section className="lg:mx-40 text-gray-600 body-font border-8 border-white mb-28">
        <div className="container  md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/3 lg:pr-30 lg:py-24 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-white">
          
            <div className="ml-10">
            
              <h1 className=" title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900">
              <Pattern text="Got a Marine Part Requirement?"/>
              </h1>
              <p className="mb-8 leading-relaxed">
              
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag.
              </p>
              <div className="flex justify-left">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Quote</button>
                
              </div>
            </div>
          </div>

        </div>
      </section>
    )
}