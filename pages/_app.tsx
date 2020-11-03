import Head from 'next/head';
import 'styles/style.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="/favicon.png" rel="icon" />
        <title>Project 270 Electoral Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="2020 Presidential Election Tracker" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://project270.us/" />
        <meta property="og:site_name" content="1990 to win" />
        <meta property="og:title" content="1,990 to win" />
        <meta property="og:description" content="2020 Presidential Election Tracker" />
        <meta property="og:image" content="https://project270.us/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" value="https://project270.us/" />
        <meta property="twitter:title" value="Project 270 Election Tracker" />
        <meta property="twitter:description" value="2020 Presidential Election Tracker" />
        <meta property="twitter:creator:id" value="_tbremer" />
        <meta property="twitter:image" value="https://project270.us/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
