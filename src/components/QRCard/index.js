import Image from "next/image"
import EyeIcon from '../../../public/Images/eye.svg'
import DownloadIcon from '../../../public/Images/document-download.svg'
import DownloadIconColored from '../../../public/Images/document-downloadColored.svg'
import ShareIcon from '../../../public/Images/send-square.svg'
import QRCodeImage from '../../../public/Images/World-Static.svg'
import MazaadyLogo from '../../../public/Images/mazaady-logo.svg'

const QRCard = () => (
    <div className="bg-white w-full block rounded-2xl p-6 shadow-sm shadow-indigo-100 mt-4">
        <div className="flex justify-between mb-3">
            <span className="font-bold">QR Code</span>
            <div className="flex gap-5">
                <Image src={EyeIcon} alt="eye" />
                <Image src={ShareIcon} alt="share" />
                <Image src={DownloadIcon} alt="download" />
            </div>
        </div>
        <div className="bg-[#FFF5E9] flex gap-2 rounded-xl p-2">
            <Image src={DownloadIconColored} alt="download" />
            <span   >Download the QR code or share it with your friends.</span>
        </div>
        <div class="w-full rounded-2xl bg-gradient-to-r from-[#D20653] to-[#FF951D] p-4 mt-5">
            <div class="flex flex-col h-full w-full items-center justify-center bg-white rounded-2xl py-4">
                <Image src={MazaadyLogo} className="w-32 h-14" />
                <span class="text-sm md:text-2xl font-medium text-black">Hala Ahmed</span>
                <Image src={QRCodeImage} />
                <span class="text-sm md:text-xl text-gray-500 ">Follow Us On Mazaady</span>

            </div>
        </div>
    </div>
)

export default QRCard;