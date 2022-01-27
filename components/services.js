import Service from '../components/service'
export default function services(){
    return (
        <div className="xl:w-3/5 md:w-1/2 p-4 ">
          <div className="border border-gray-200 p-6 rounded-lg  bg-white  -mt-20 ">
            <div className="flex flex-wrap -m-4">
              <Service icon="/engine.png" title="Main Engines" />
              <Service icon="/electric-generator.png" title="Generator Engines" />
              <Service icon="/air-compressor.png" title="Air Compressor" />
              <Service icon="/pump.png" title="Pumps" />
              <Service icon="/water-filter.png" title="Purifier" />
            </div>
            <div className="flex flex-wrap items-center justify-center -m-4 ">
              <Service icon="/turbo-engine.png" title="Turbos" />
              <Service icon="/motorcycle.png" title="Injectors" />
              <Service icon="/plate-heat-exchangers.png" title="Heat Exchange" />
              <Service icon="/construction.png" title="Cranes" />
              <Service icon="/16.png" title="..More" />
            </div>
          </div>
        </div>
    )
}