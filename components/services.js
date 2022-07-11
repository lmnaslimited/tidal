import Service from '../components/service'
export default function services(){
    return (
        <div className="xl:w-3/5 md:w-3/4  p-4 ">
          <div className="border border-gray-200 p-6 rounded-lg lg:shadow-xl   bg-white  -mt-20 ">
            <div className="flex flex-wrap -m-4">
              <Service link="/scope-of-supply/#mainengine" icon="/engine.png" title="Main Engines" />
              <Service link="/scope-of-supply/#generatorengine" icon="/electric-generator.png" title="Generator Engines" />
              <Service link="/scope-of-supply/#aircompressor" icon="/air-compressor.png" title="Air Compressor" />
              <Service link="/scope-of-supply/#pumps" icon="/pump.png" title="Pumps" />
              <Service link="/scope-of-supply/#purifier" icon="/water-filter.png" title="Purifier" />
              <Service link="/scope-of-supply/#turbocharger" icon="/turbo-engine.png" title="Turbos" />
            </div>
            <div className="flex flex-wrap items-center justify-center -m-4 ">
             
              <Service link="/scope-of-supply/#injectors" icon="/motorcycle.png" title="Injectors" />
              <Service link="/scope-of-supply/#heatexchanger" icon="/plate-heat-exchangers.png" title="Heat Exchange" />
              <Service link="/scope-of-supply/#cranes" icon="/construction.png" title="Cranes" />
              <Service link="/scope-of-supply" icon="/16.png" title="..More" />
            </div>
          </div>
        </div>
    )
}