import Image from "next/image"
import EmptyHeart from '../../../public/Images/emptyHeart.svg'
import FillHeart from '../../../public/Images/fillHeart.svg'
import { useState } from "react"
import StartsIn from "./StartsIn"

const SingleProduct = ({ image, status }) => {
    const [isLike, setIsLike] = useState(false);

    const addToFav = () => {
        setIsLike((old) => !old)
    }

    return (
        <article className="rounded-xl bg-white flex pb-4 w-full">
            <div className="grid grid-cols-5 gap-2 sm:gap-0 w-full">
                <div className="relative col-span-2 lg:col-span-1 w-full md:w-[80%] h-[80%]">
                    <Image
                        alt="product"
                        src={image}
                        className="rounded-xl md:rounded-3xl object-cover w-full h-full"
                    />
                    <div className={`${status?.includes('Hot') ? 'bg-[#FF951D]' :
                        'bg-[#D20653]'} text-center absolute bottom-0 right-0 px-2 md:px-5 py-1 
                    text-white rounded-br-3xl rounded-tl-3xl w-[80%] text-[8px]  md:text-xs`}>
                        {status}
                    </div>
                </div>

                <div className="flex flex-col col-span-3 lg:col-span-4">
                    <div className=" text-xs lg:text-lg sm:text-xl flex justify-between flex-wrap items-start">
                        <div className="text-xs md:text-lg font-thin"> Six-piece clothing set (blouse - pants - hat and ...</div>
                        {isLike
                            ? <button type="button" onClick={addToFav}>
                                <Image src={FillHeart} className="hidden md:block" alt="Like" />
                            </button>
                            :
                            <button type="button" onClick={addToFav} className="p-2">
                                <Image src={EmptyHeart} className="hidden md:block" alt="Like" />
                            </button>
                        }
                    </div>

                    <p className="mt-1 text-sm text-gray-700 flex items-center">
                        <span className="text-gray-500 font-Nunito text-xs md:text-lg">Starting Price</span>
                        <span className="font-bold text-xs md:text-2xl ml-3">1000 EGP</span>
                    </p>

                    <div className="mt-4 text-[8px] md:text-xl flex flex-wrap sm:items-center gap-1 sm:gap-2">
                        <div className="mb-2">
                            <span className="text-gray-500 font-Nunito text-xs md:text-base">Lot Starts in </span>
                        </div>
                        <div className="flex gap-2">
                            <StartsIn number={52} text='Days' />
                            <StartsIn number={34} text='Hours' />
                            <StartsIn number={22} text='Minutes' />
                        </div>
                    </div>
                </div>
            </div>
        </article >
    )
}
export default SingleProduct