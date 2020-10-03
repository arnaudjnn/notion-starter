module.exports = {
  siteUrl: 'https://example.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/',
      }
    ]
  }
}