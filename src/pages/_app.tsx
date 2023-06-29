import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Anton } from "next/font/google";
import { Container } from "react-bootstrap";
import Head from "next/head";
const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokemon YOHOO...</title>
      </Head>
      <div className={anton.className}>
        <main>
          <Container className="py-4">
            <Component {...pageProps} />
          </Container>
        </main>
      </div>
    </>
  );
}
