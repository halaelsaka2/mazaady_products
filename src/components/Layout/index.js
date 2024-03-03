import Head from 'next/head';

import Header from '../Header';

const Layout = ({ children }) => (
    <>
        <Head>
            <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico" />
            <link type="image/x-icon" rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className='px-2 xl:px-20'>{children}</main>
    </>
);

export default Layout;
