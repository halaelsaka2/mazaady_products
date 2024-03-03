import CustomButton from "../CustomButton";

import CirclePhoto from '../../../public/Images/add-circle.svg'
import product1 from '../../../public/Images/product1.jpg'
import product2 from '../../../public/Images/product2.jpg'
import product3 from '../../../public/Images/product3.jpg'
import product4 from '../../../public/Images/product4.jpg'

import Image from "next/image";
import SingleProduct from "../SingleProduct";
const Products = () => {
    const productsData = [
        {
            id: 1,
            img: product1,
            status: 'Live auction'
        },
        {
            id: 2,
            img: product2,
            status: 'Live auction'
        },
        {
            id: 3,
            img: product3,
            status: 'Hot Sale'
        },
        {
            id: 4,
            img: product4,
            status: 'Live auction'
        },
    ]
    return (
        <div className="p-8 w-full">
            <div className="flex justify-between flex-wrap gap-3 md:gap-3">
                <div className="flex gap-3 md:gap-3 ">
                    <CustomButton btnType="secondary" appendClassNames='px-5 py-2 md:px-8 rounded-3xl'>Products</CustomButton>
                    <CustomButton btnType="normal" appendClassNames='px-5 py-2 md:px-8 rounded-3xl'>Articls</CustomButton>
                    <CustomButton btnType="normal" appendClassNames='px-5 py-2 md:px-8 rounded-3xl'>Reviews</CustomButton>
                </div>
                <CustomButton appendClassNames='border rounded-xl px-2 py-[6px] md:px-4 md:!py-0'>
                    <Image src={CirclePhoto} alt="circle" />
                    <span className="ml-1 md:ml-2">Add Review</span>
                </CustomButton>
            </div>
            <div className="flex items-center my-4">
                <span className="font-bold text-2xl md:text-3xl mr-2">Products</span>
                <span className="text-gray-600">( 12 )</span>
            </div>
            <div className="">
                {productsData.map(item => (
                    <SingleProduct key={item.id} image={item.img} status={item.status} />
                ))}
            </div>
        </div>
    );
}
export default Products