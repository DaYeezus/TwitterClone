import React, {Fragment, useEffect, useState} from 'react';
import Head from "next/head";
import {useRouter} from "next/router";

const Layout = ({children}) => {
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(router.pathname.replace("/", ""))
    useEffect(() => {
        setCurrentPage(router.pathname.replace("/", ""))
    }, [router.pathname])

    return (
        <Fragment>
            <Head>
                <title>Twitter {currentPage}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="Content-Type" content="text/html;charset=windows-1251"/>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=7"/>
                <link rel="icon" href="https://rb.gy/ogau5a" type={"image/icon type"}/>
            </Head>
            <main>
                {children}
            </main>
        </Fragment>
    );
};

export default Layout;