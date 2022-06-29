import Head from "next/head";

import Layout from "../components/layout/Layout";

import "../styles/global.scss";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#37474f" />
        <meta
          name="keywords"
          content="danielschuster, daniel, schuster, website, developer, web, me"
        />
        <meta name="author" content="Daniel Schuster" />
        <meta name="revisit-after" content="7 days" />
        <meta name="msapplication-TileColor" content="da532c" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
