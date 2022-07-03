import '../styles/globals.css'
import {Fragment} from "react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}

export default  MyApp


