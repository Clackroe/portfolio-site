import { type AppType } from "next/app";
import { ThemeProvider } from "next-themes";
import React from "react";

import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { api } from "~/utils/api";

import "~/styles/globals.css";
import { useRouter } from "next/router";
import WIP from "./components/WIP";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  const meta = {
    title: "Xander Cole | Software Engineer",
    description: `Get in touch with me to know more.`,
    image: "/ProfilePic.png",
    type: "website",
  };
  return (
    <ThemeProvider defaultTheme="dark">
      <div>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://portfolio.xancorp.us${router.asPath}`}
          />
          <link
            rel="canonical"
            href={`https://portfolio.xancorp.us${router.asPath}`}
          />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Xander Cole" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@---" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
        </Head>
        <main className="w-full dark:bg-gray-800">
          {/* <Navbar />
          <Component {...pageProps} />;
          <Footer /> */}
          <WIP />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
