import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const xml = await generateSitemap();

  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // 24時間のキャッシュ
  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}

async function generateSitemap(): Promise<string> {
  const timestamp = new Date().toISOString();
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;

  xml += `<url><loc>${process.env.NEXT_PUBLIC_SITEURL}/</loc><lastmod>${timestamp}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>\n`;
  xml += `<url><loc>${process.env.NEXT_PUBLIC_SITEURL}/company</loc><lastmod>${timestamp}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>\n`;
  xml += `<url><loc>${process.env.NEXT_PUBLIC_SITEURL}/contact</loc><lastmod>${timestamp}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>\n`;
  xml += `<url><loc>${process.env.NEXT_PUBLIC_SITEURL}/privacy-policy</loc><lastmod>${timestamp}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>\n`;
  xml += `<url><loc>${process.env.NEXT_PUBLIC_SITEURL}/works</loc><lastmod>${timestamp}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>\n`;

  xml += `</urlset>`;
  return xml;
}
