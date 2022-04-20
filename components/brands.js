import Marquee from "react-fast-marquee";
import Image from 'next/image'
export default function brands() {
    return (
        <section className="mx-1 md:mx-10 bg-sky-50 shadow-xl md:my-20 my-10 p-3">
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
                        src='/Brands/sulzer-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/Brands/Kawasaki-Logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/Brands/makita-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/Brands/Mitsubishi-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/Brands/hyundai-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/Brands/doosan-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/Brands/diesel-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/Brands/yanmar-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/Brands/caterpillar-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3 mt-2">
                    <Image
                        src='/Brands/tamrotor-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/Brands/teikoku-logo-238x238.png'
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