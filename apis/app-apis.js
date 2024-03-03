
import instance from './axios-instance';

export const getAllCategories = () => instance.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/get_all_cats`, { auth: '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16', headers: { private_key: '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16' } }
);
export const getAllProperties = (subCatId) => instance.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/properties?cat=${subCatId}`,
);
export const getOptionsChild = (optionId) => instance.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-options-child/${optionId}`,
);