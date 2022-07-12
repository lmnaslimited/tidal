export default function Contact() {  
    return (
        <div>
            <section id="contact" className="text-gray-600 body-font relative bg-sky-50">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" className="absolute inset-0 grayscale opacity-40" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0Tidal groups Level 14, Al Khatem Tower 4, ADGM Square, Al Maryah Island, Abudhabi.+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" ></iframe>
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                    <p className="mt-1">Tidal groups Level 14, Al Khatem Tower 4, ADGM Square, Al Maryah Island, Abudhabi.</p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a href="mailto:sales@tidalgroups.com" className="text-indigo-600 leading-relaxed">sales@tidalgroups.com</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <a href="tel:+971 0501378676"><p className="leading-relaxed">+971 0501378676</p></a> 
                    </div>
                </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-4">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                <p className="leading-relaxed mb-5 text-gray-600"></p>
               <div className="relative mb-4 ">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email"  className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message"  className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-lg">Contact Us</button>
                <p className="text-xs text-gray-500 mt-3"></p>
                </div>
            </div>
            </section>
        </div>
    );
}