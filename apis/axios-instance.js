import axios from 'axios';

const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
});

instance.interceptors.request.use(async (config) => {
    config.headers = 'private-key: 3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16';
    return config;
});



export default instance;
