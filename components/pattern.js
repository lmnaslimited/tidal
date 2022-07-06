export default function pattern({text}) {
    return(
        <div >
        <span className="relative inline-block">
            <div className="text-gray-300">
            <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
                <defs>
                    <pattern
                        id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                    >
                        <circle cx="1" cy="1" r=".7" />
                    </pattern>
                </defs>
                <rect
                    fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
                    width="52"
                    height="24"
                />
            </svg>
            </div>
            <span className="relative">{text}</span>
        </span>{' '}
    </div>
    )
    
}