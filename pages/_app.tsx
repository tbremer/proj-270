import Head from 'next/head';
import 'styles/style.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="/favicon.png" rel="icon" />
        <title>Project 270 Electoral Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
