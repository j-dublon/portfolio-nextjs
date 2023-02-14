import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Head from "next/head";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>J Dublon</title>
      </Head>
      <Image
        src="/images/background.png"
        alt="background trees"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
      />
      <div className="component">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
