import Head from "next/head";
import 'styles/style.css';

export default function App({ Component, pageProps }) {
    return (<>
    <Head>
    <link href="/favicon.png" rel="icon" />
    </Head>
    <Component {...pageProps} />
    </>)
  }