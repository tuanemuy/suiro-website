import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { UnflexibleProvider } from "@unflexible/ui-core";
import "@unflexible/ui-core/css";
import "@unflexible/ui-next-page/css";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("inview__in");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0,
          rootMargin: "0px 300px 0px 300px",
        }
      );

      const targets = document.getElementsByClassName("inview");
      for (let i = 0; i < targets.length; i++) {
        observer.observe(targets[i]);
      }
    }, 500);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <UnflexibleProvider>
        <Component {...pageProps} />
      </UnflexibleProvider>
    </>
  );
}

export default MyApp;
