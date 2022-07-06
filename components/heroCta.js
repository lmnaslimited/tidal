import Pattern from '../components/pattern'
export default function heroCta(){
    return (
        <section className="lg:mx-40 text-gray-600 body-font border-8 border-white mb-28  mx-4">
        <div className="container px-32 md:px-48 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-3/4  xl:w-1/3 -ml-48  lg:pr-30 lg:py-24 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-white">
          
            <div className="ml-10   md:pr-20">
            
              <h1 className=" title-font sm:text-3xl md:-ml-8 text-3xl mb-8 font-medium text-gray-900">
              <Pattern text="Got a Marine Part Requirement?"/>
              </h1>
              <p className="mb-8 md:-ml-8 -ml-12 px-2 text-md w-2/8  leading-relaxed">
              Get your requirements fulfilled with a choice of over 50+ trusted brands and shipped from over 10+ countries 
                </p>
              <div className="flex md:justify-left justify-center md:-ml-20">
                <button className="inline-flex  text-white bg-indigo-500 border-0 py-2 px-6 mb-4 md:mr-0 mr-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Quote</button>
                
              </div>
            </div>
          </div>

        </div>
      </section>
    )
}