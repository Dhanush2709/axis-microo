/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://axismicro.in",
  generateRobotsTxt: false,
  sitemapSize: 7000,
  exclude: ["/api/*"],
};

