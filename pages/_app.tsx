import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import {
  UnflexibleProvider,
  PartialConfig,
  PartialInitialProps,
} from "@unflexible/ui-core";
import "@unflexible/ui-core/css";
import "@unflexible/ui-next-page/css";
import "styles/globals.css";
import { size } from "config";

const config: PartialConfig = {
  fontFamily:
    '"Tazugane", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
};

const initialProps: PartialInitialProps = {
  wrap: {
    width: {
      xl: `${size.grid * 35}px`,
      l: `${size.grid * 24}px`,
      m: `${size.grid * 22}px`,
      s: "90vw",
    },
  },
  plainText: {
    lineHeight: {
      p: 2,
    },
    letterSpacing: {
      p: ".1em",
      h1: ".1em",
      h2: ".1em",
      h3: ".1em",
      h4: ".1em",
      h5: ".1em",
      ul: ".1em",
      ol: ".1em",
      a: ".1em",
      small: ".1em",
      strong: ".1em",
    },
  },
};

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

      <UnflexibleProvider config={config} initialProps={initialProps}>
        <Component {...pageProps} />
      </UnflexibleProvider>
    </>
  );
}

export default MyApp;
