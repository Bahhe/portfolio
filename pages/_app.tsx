import "@/styles/globals.css";
import { Eczar } from "next/font/google";

import type { AppProps } from "next/app";

const eczar = Eczar({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={eczar.className}>
      <Component {...pageProps} />
    </main>
  );
}
