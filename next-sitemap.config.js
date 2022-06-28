/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://www.danielschuster.me",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};

module.exports = config;
