import Pattern from '../components/pattern'
export default function heroCta(){
    return (
      <section className="lg:mx-40 text-gray-600 body-font border-8 border-white mb-28">
      <div className="container  md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/3 lg:pr-30  lg:py-24 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-white">
        
          <div className="ml-10">
          
            <h1 className=" title-font sm:text-4xl lg:-ml-8 text-3xl mb-8 font-medium text-gray-900">
            <Pattern text="Got a Marine Part Requirement?"/>
            </h1>
            <p className="mb-8 text-md xl:text-lg lg:-ml-8 lg:w-3/8 xl:w-full xl:-ml-8 lg:mx-12 xl:mx-16 leading-relaxed">
            
            Get your requirements fulfilled with a choice of over 50+ trusted brands and shipped from over 10+ countries 
            </p>
            <div className="flex justify-left">
           <a href="mailto:sales@tidalgroups.com" >  <button className="inline-flex ml-16 md:ml-0 mb-4 md:mb-0 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Quote</button>
            </a>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}