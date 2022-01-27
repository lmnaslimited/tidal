import Image from 'next/image'
export default function service({icon, title}) {
    return (
        <div className="xl:w-1/5 md:w-1/3 p-4 hover:bg-sky-50 justify-center">  
            <div className="w-30 h-30 inline-flex items-center justify-center text-indigo-500 mb-4">
                <Image 
                  src = {icon}
                  width ="40"  
                  height = "40"
                />
            </div>
            <p className="text-xs text-gray-900 font-medium title-font mb-2">{title}</p>
        </div>  
    )
}