import Marquee from "react-fast-marquee";
export default function Clients() {
    return (
        <section className="lg:mx-40 md:mx-8 mx-2 h-60 md:mb-10">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-th-primary-medium">Trusted by Global Clients, Built by Us
                </h1>
                <p className="lg:w-2/3 mx-auto text-th-primary-dark leading-relaxed md:text-lg text-base">Our Client Speak our values.
                </p>
            </div>
            <Marquee gradientWidth="150" pauseOnHover>
                <div className="grid grid-cols-3 gap-8 text-center lg:grid-cols-5 mx-4">
                   
                </div>
            </Marquee>
        </section>
    )
}