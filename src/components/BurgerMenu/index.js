import { useRef, useState } from "react";
import NavBar from "../Header/NavBar";
import CirclePhoto from '../../../public/Images/add-circle.svg'
import CustomButton from "../CustomButton";
import Image from "next/image";
import { useRouter } from "next/router";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { push } = useRouter()
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="flex md:hidden">
            <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out"
                onClick={toggleMenu}
            >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            {isOpen && (
                <div ref={menuRef} className="bg-white w-48 py-2 shadow rounded absolute mt-2 p-3">
                    <NavBar appenClass='!flex !md:hidden !flex-col !gap-2' />
                    <CustomButton appendClassNames='border rounded-xl px-4 py-2' onClick={() => push('/addProduct')}>
                        <Image src={CirclePhoto} alt="circle" />
                        <span className="ml-2">Add new product</span>

                    </CustomButton>
                </div>
            )}
        </div>
    );
}

export default BurgerMenu;