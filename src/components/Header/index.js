import Image from "next/image";
import NavBar from "./NavBar";
import MazaadyLogo from '../../../public/Images/mazaady-logo.svg'
import SearchIcon from '../../../public/Images/search-normal.svg'
import NotificationIcon from '../../../public/Images/notification.svg'
import LineIcon from '../../../public/Images/Line 313.svg'
import ProfilePhoto from '../../../public/Images/Ellipse 1.svg'
import CirclePhoto from '../../../public/Images/add-circle.svg'
import LanguageIcon from '../../../public/Images/EN.svg'
import GlobalIcon from '../../../public/Images/global.svg'
import CustomButton from "../CustomButton";
import { useRouter } from "next/router";
import BurgerMenu from "../BurgerMenu";
const Header = () => {
    const { push } = useRouter()
    return (
        <header className='bg-white px-3 md:px-16 py-3 sticky top-0 left-0 w-full z-50 flex justify-between items-center'>
            <div className="flex items-center">
                <BurgerMenu />
                <a href="/" className='shrink-0 w-44 md:w-56 '>
                    <Image src={MazaadyLogo} className="w-28 h-11" alt="logo" />
                </a>
                <NavBar />

            </div>
            <div className="flex gap-4 items-center">
                <Image src={SearchIcon} className="size-6 md:size-7" alt="search" />
                <Image src={LineIcon} alt="line" />
                <Image src={NotificationIcon} className="size-6 md:size-7" alt="notification" />
                <Image src={LineIcon} alt="line" />
                <Image src={ProfilePhoto} className="size-7 md:size-8" alt="profile" />
                <div className="gap-4 hidden lg:flex">
                    <CustomButton appendClassNames='border rounded-xl px-4 py-2' onClick={() => push('/addProduct')}>
                        <Image src={CirclePhoto} alt="circle" />
                        <span className="ml-2">Add new product</span>

                    </CustomButton>
                    <Image src={GlobalIcon} alt="global" />
                    <Image src={LineIcon} alt="line" />
                    <Image src={LanguageIcon} alt="lang" />
                </div>
            </div>
        </header>
    );

};

export default Header;
