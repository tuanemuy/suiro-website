import { Html, Head, Main, NextScript } from "next/document";

import { url } from "lib/util";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <script
          async
          src={`https://www.google.com/recaptcha/api.js?render=${
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""
          }`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${
              process.env.NEXT_PUBLIC_GTM || ""
            }');`,
          }}
        />
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={url("apple-touch-icon.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={url("favicon-32x32.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={url("favicon-16x16.png")}
        />
        <link rel="manifest" href={url("site.webmanifest")} />
        <link
          rel="mask-icon"
          href={url("safari-pinned-tab.svg")}
          color="#e3a900"
        />
        <link rel="shortcut icon" href={url("favicon.ico")} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content={url("browserconfig.xml")} />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body id="myapp">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${
              process.env.NEXT_PUBLIC_GTM || ""
            }"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
