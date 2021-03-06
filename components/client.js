import Marquee from "react-fast-marquee";
import Image from 'next/image'
export default function client() {
    return (
        <section className="mx-1 md:mx-10 bg-sky-100 shadow-xl md:my-20 my-10 p-3">
             <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">Trusted by Shipping Partners
                </h1>
                <p className="lg:w-2/3 text-purple-500 font-semibold mx-auto  leading-relaxed md:text-lg text-base">Our Shipping Partners Speak our values.
                </p>
            </div>
            <Marquee gradientWidth="150" reverse>
                <div className="grid grid-cols-11 gap-8 text-center lg:grid-cols-11 mx-4">
                <div className="px-3">
                    <Image alt=""
                        src='/clients/eagle-bulk-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image alt=""
                        src='/clients/misc-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full border-gray-200"
                    />
                </div>
                <div className="px-3">

                    <Image alt=""
                        src='/clients/wilhelmsen-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full  border-gray-200"
                    />
                </div>
                <div className="px-3">

                    <Image alt=""
                        src='/clients/aet-logo-238x238.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-cover object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                  <Image alt=""
                      src='/clients/norbulk-logo-238x238.png'
                      height='100'
                      width='100'
                      className="absolute inset-0 w-full h-full object-cover object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                  <Image alt=""
                      src='/clients/sirious-logo-238x238.png'
                      height='100'
                      width='100'
                      className="absolute inset-0 w-full h-full object-cover object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                  <Image alt=""
                      src='/clients/apl-logo-238x238.png'
                      height='100'
                      width='100'
                      className="absolute inset-0 w-full h-full object-cover object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                  <Image alt=""
                      src='/clients/ecorpio-logo-238x238.png'
                      height='100'
                      width='100'
                      className="absolute inset-0 w-full h-full object-cover object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                  <Image alt=""
                      src='/clients/pil-logo-238x238.png'
                      height='100'
                      width='100'
                      className="absolute inset-0 w-full h-full object-cover object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                  <Image alt=""
                      src='/clients/seaspan-logo-238x238.png'
                      height='100'
                      width='100'
                      className="absolute inset-0 w-full h-full object-cover object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                  <Image alt=""
                      src='/clients/green-reefers-logo-238x238.png'
                      height='100'
                      width='100'
                      className="absolute inset-0 w-full h-full object-cover object-center border-gray-200"
                    />
                </div>
               
                </div>
            </Marquee>
        </section>
    )
}
