import { useForm } from "react-hook-form"
import CustomButton from "../CustomButton";
import { useEffect, useState } from "react";
import { getAllProperties } from "../../../apis/app-apis";
import Loading from "../Loading";
import SingleProperity from "./SingleProperity";
import CustomSelect from "../CustomSelect";

const ProductForm = ({ catOptions }) => {
    const [subCats, setSubCats] = useState([]);
    const [subCatId, setSubCatId] = useState(null);
    const [properties, setProperties] = useState([]);
    const [propertiesLoading, setPropertiesLoading] = useState(false);
    const { handleSubmit, control, reset } = useForm();

    const onSubmit = (data) => {
        console.log({ data });
    };
    useEffect(() => {
        if (subCatId) {
            getAllProperties(subCatId).then((response) => {
                const { data: { data } } = response;
                setPropertiesLoading(false);
                setProperties(data);
            })
        }
    }, [subCatId]);

    const changeCategoryHandler = (option) => {
        if (option) {
            return setSubCats(option.children?.map(item => ({ label: item.name, value: item.id })));
        }
        setSubCats([]);
        reset();
    }
    const changeSubCategoryHandler = (option) => {
        if (option) {
            setPropertiesLoading(true);
            return setSubCatId(option?.value);
        }
        setProperties([]);
    }
    return (
        <div className="bg-white p-6 mt-4 ">
            <span className="text-2xl font-bold ">Add New Product</span>
            <form id="add-product" onSubmit={handleSubmit(onSubmit)} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <CustomSelect
                        changeHandler={(option) => changeCategoryHandler(option)}
                        control={control}
                        name="Main Category"
                        options={catOptions}
                    />
                    <CustomSelect
                        changeHandler={(option) => changeSubCategoryHandler(option)}
                        control={control}
                        name="Sub Category"
                        options={subCats}
                    />

                    {propertiesLoading ? <Loading /> : properties.map(item =>
                        <SingleProperity
                            key={item.id}
                            item={item}
                            control={control}
                        />
                    )}
                </div>

                <CustomButton
                    type="submit"
                    onClick={() => null}
                    appendClassNames='px-6 py-2 rounded-3xl mt-4 text-center'
                >
                    Add Product
                </CustomButton>
            </form>
        </div>
    )
}
export default ProductForm