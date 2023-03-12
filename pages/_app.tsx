import "@/styles/globals.css";
import { Sono } from "next/font/google";

import type { AppProps } from "next/app";

const sono = Sono({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={sono.className}>
      <Component {...pageProps} />
    </main>
  );
}
