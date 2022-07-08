import Image from 'next/image'
export default function service({icon, title, link, }) {
    return (
        <div className="flex flex-col xl:w-1/3 md:w-1/3 w-1/3 p-4 hover:bg-sky-50 justify-center">  
            <a href = {link}> 
            <div className="w-30 h-30 flex items-center justify-center text-indigo-500 mb-4">
              <Image 
                  src = {icon}
                  width ="40"  
                  height = "40"
                  className='w-20 h-20 md:w-40 md:h-40'
                />
            </div>
        <div className="flex items-center justify-center">
            <p className="md:text-xs text-sm text-gray-900 font-medium title-font invisible md:visible mb-2">{title}</p>
        </div>  </a>
        </div>
    )
}