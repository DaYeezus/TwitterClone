import '../styles/globals.css'
<<<<<<< HEAD
import {Fragment} from "react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
=======
import Layout from "../components/Layout";

function MyApp({Component, pageProps}) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
>>>>>>> aae583a (finish side bar)
}

export default MyApp
