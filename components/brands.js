import Marquee from "react-fast-marquee";
import Image from 'next/image'
export default function brands() {
    return (
        <section className="mx-10 bg-sky-50 shadow-xl md:my-20 my-10 p-3">
             <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-th-primary-medium">Trusted by Global brands, Built by Us
                </h1>
                <p className="lg:w-2/3 text-indigo-500 font-semibold mx-auto text-th-primary-dark leading-relaxed md:text-lg text-base">Our Client Speak our values.
                </p>
            </div>
            <Marquee gradientWidth="150" direction="right" >
                <div className="grid grid-cols-11 gap-8 text-center lg:grid-cols-11 mx-4">
                <div className="px-3">
                    <Image
                        src='/clients/sulzer-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/clients/Kawasaki-Logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/clients/makita-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/clients/Mitsubishi-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/clients/hyundai-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/clients/doosan-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/clients/diesel-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/clients/yanmar-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/clients/caterpillar-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3 mt-2">
                    <Image
                        src='/clients/tamrotor-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/clients/teikoku-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                </div>
               </Marquee>
                </section>
    )
}