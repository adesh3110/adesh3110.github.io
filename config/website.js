module.exports = {
  pathPrefix: `/`,
  // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
  siteTitle: `Adesh Singh`, // Navigation and Site Title
  siteTitleAlt: `Adesh Singh - Software Engineer`, // Alternative Site title for SEO
  siteTitleShort: `Adesh Singh`, // short_name for manifest
  siteHeadline: `Software Engineer and Designer`, // Headline for schema.org JSONLD
  siteKeywords: [
    `adesh singh`,
    `adesh`,
    `singh`,
    `frontend`,
    `fullstack`,
    `software`,
    `engineer`,
    `developer`,
    `portfolio`,
    `blog`,
    `javascript`,
    `react`,
  ],
  siteLanguage: `en`, // Language Tag on <html> element
  siteLogo: `/logo.png`, // Used for SEO and manifest
  siteDescription: `Adesh Singh. FrontEnd software engineer and designer with a passion for using technology to create unique and memorable experiences`,
  author: {
    name: `Adesh Singh`,
    bio: `Software engineer and designer with a passion for exploring new ideas, platforms, and web-technologies, while creating tools that myself and other enjoy.`,
    github: `https://github.com/adesh3110`,
    linkedIn: `https://www.linkedin.com/in/adesh-singh-07312b147/`,
  },
  menuLinks: [
    {
      name: `Home`,
      link: `/`,
      external: false,
    },
    {
      name: `Github`,
      link: `https://github.com/adesh3110`,
      external: true,
    },
    {
      name: `Blog`,
      link: `/blog/`,
      external: false,
    },
    {
      name: `Resume`,
      link: `/Adesh-Resume.pdf`,
      external: true,
    },
    // {
    //   name: `Contact`,
    //   link: `/contact/`,
    //   external: false,
    // },
  ],
  // disqusShortname: `tterb-gatsby`,
  // googleAnalyticsID: `UA-82760104-1`, // Google Analytics ID
  // googleOptimizeID: `GTM-P9NNBQ3`, // Google Optimize container ID
  backgroundColor: `#23262B`,
};
