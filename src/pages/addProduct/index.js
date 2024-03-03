import ProductForm from "@/components/ProductForm";
import { getAllCategories, } from "../../../apis/app-apis";
import { useEffect, useState } from "react";
const AddProduct = () => {
    const [allCats, setAllCats] = useState([])

    useEffect(() => {
        getAllCategories().then(response => {
            const { data: { data: { categories = [] } } } = response
            setAllCats(categories?.map(item => ({ label: item.name, value: item.id, children: item.children })))
        })
    }, []);
    return (
        <ProductForm catOptions={allCats} />
    );
}
export default AddProduct;