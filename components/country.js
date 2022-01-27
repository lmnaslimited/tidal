import Pattern from '../components/pattern'
import Flag from '../components/flag'
export default function country() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">

                        <Pattern text="Parts From All Over the World" />
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are committed to provide quality products & services at competitive price. We Supply / Export  good condition marine Equipment and spare parts </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <Flag flag="/china.png" country="CHINA" title="Economy" />
                    <Flag flag="/south-korea.png" country="SOUTH KOREA" title="Precession" />
                    <Flag flag="/japan.png" country="Japan" title="Finest Quality" />
                    <Flag flag="/european-union.png" country="EUROPE" title="Superior Performance" />
                </div>
            </div>
        </section>
    )
}