import Image from "next/image"
export default function Scope_image({ part, title, width, height, class_scope, }) {
  const partUrl = process.env.assetPrefix + part
  return (
      <div className="">
        <Image src= {partUrl} 
        className={class_scope} width={width} height={height} alt={title} />
       
      </div>
    

  )
} 