import Image from "next/image"

const Follow = ({ number, text, image }) => (
    <div className="inline-flex shrink-0 items-center gap-2 bg-[#FFF5E9] p-2 rounded-xl w-[30%]">
        <Image src={image} className="size-6 text-indigo-700" alt="follower" />

        <div className="mt-1.5 sm:mt-0">
            <p className="font-bold">{number}</p>
            <p className="font-medium text-[#FF951D]">{text}</p>
        </div>
    </div>
)

export default Follow