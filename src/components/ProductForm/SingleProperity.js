import { useEffect, useState } from "react";
import { getOptionsChild } from "../../../apis/app-apis";
import CustomSelect from "../CustomSelect";

const SingleProperity = ({ control, item }) => {
    const { name, options } = item;
    const [displayInput, setDisplayInput] = useState(false);
    const [propertyId, setPropertyId] = useState(null);
    const [children, setChildren] = useState([]);

    useEffect(() => {
        if (propertyId) {
            getOptionsChild(propertyId).then((response) => {
                const { data: { data } } = response;
                setChildren(data);
            })
        }
    }, [propertyId]);


    const changeHandler = (option) => {
        setDisplayInput(false);
        if (!option) {
            return setChildren([]);
        }
        if (option?.value === 'other') {
            return setDisplayInput(true);
        }
        if (option?.value) {
            return setPropertyId(!!option?.child ? option?.value : null);
        }
    }

    return (
        <>
            <div className="mt-3">
                <CustomSelect
                    changeHandler={(option) => changeHandler(option)}
                    control={control}
                    name={name}
                    displayInput={displayInput}
                    options={[...options?.map(item => ({ label: item.name, value: item.id, child: item.child })), { label: 'other', value: 'other' }]}
                />
            </div>
            {children?.map(item => (
                <SingleProperity item={item} control={control} key={item.id} />
            ))}
        </>
    )
}
export default SingleProperity