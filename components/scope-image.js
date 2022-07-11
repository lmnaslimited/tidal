import Image from "next/image"
export default function Scope_image({ src, title, width, height, }) {
  return (
    
      <div className="">
        <Image src={src} className="h-8 w-8 rounded-full border border-gray-400" width={width} height={height} alt={title} />
       
      </div>
    

  )
} 