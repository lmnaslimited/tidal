import Image from "next/image"
export default function Scope_image({ part, title, width, height, }) {
  const partUrl = process.env.assetPrefix + part
  return (
      <div className="">
        <Image src= {partUrl} 
        className="h-8 w-8 rounded-full border border-gray-400" width={width} height={height} alt={title} />
       
      </div>
    

  )
} 