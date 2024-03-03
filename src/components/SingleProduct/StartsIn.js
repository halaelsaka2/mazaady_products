const StartsIn = ({ number, text }) => (
    <div className="inline-flex items-center text-[8px] md:text-xl text-[#FF951D] gap-1 bg-[#FFF5E9] px-3 md:px-6 md:py-3 py-1 rounded-3xl  ">
        <p>{number}</p>
        <p className="font-medium">{text}</p>
    </div>
)

export default StartsIn