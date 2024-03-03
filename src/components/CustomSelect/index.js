import { Controller } from 'react-hook-form';
import Select from 'react-select';

const CustomSelect = ({
    options, control, changeHandler, name, displayInput = false
}) => {
    return (
        <>
            <div>
                <label htmlFor={name} aria-labelledby={name} className="font-bold">{name}</label>
                <Controller
                    control={control}
                    name={name}
                    render={({ field: { onChange, value } }) => (
                        <Select
                            placeholder={`Please Select ${name}`}
                            isClearable
                            className="mt-4"
                            options={options}
                            onChange={(option) => {
                                changeHandler(option)
                                onChange(option?.value || null);
                            }}
                            value={value ? options.find((opt) => opt.value === value) : null}
                            defaultValue={null}
                        />
                    )}
                />
            </div>
            {displayInput &&
                <div className='mt-3'>
                    <label htmlFor={`${name}-other`} className="font-bold">Other</label>
                    <Controller
                        control={control}
                        name={`${name}-other`}
                        render={({ field: { onChange, value } }) => (
                            <input
                                placeholder={`please write other ${name} here`}
                                className="outline-none w-full p-2 border border-gray-200 mt-3"
                                value={value}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    onChange(value)
                                }}
                            />
                        )}
                    />
                </div>
            }
        </>
    );
}

export default CustomSelect