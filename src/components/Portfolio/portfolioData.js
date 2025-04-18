/**
 * Portfolio Data Configuration
 * Contains projects data for the portfolio section
 */

export const portfolioData = {
  sectionTitle: "projects",
  sectionHeading: "Featured",
  sectionHeadingSpan: "Projects",
  projects: [
    {
      id: 1,
      title: "LA Film Lab Ordering System",
      image: "assets/images/portfolio.FilmLab.kiosk.png",
      link: ["assets/images/portfolio.FilmLab.kiosk.png"],
      type: "portfolio-half",
      categories: [
        "NodeJS",
        "Nuxt/Vue.js",
        "Typescript",
        "Pub/Sub Architecture",
        "Webhooks",
        "PostgresSQL",
      ],
      liveUrl: "https://lafilmlab.com",
    },
    {
      id: 2,
      title: "Greater Boston Snow Removal Business Platform",
      image: "assets/images/portfolio.gbsm.map.gif",
      link: [
        "assets/images/portfolio.gbsm.map.gif",
        "assets/images/portfolio.GBSnow.1.png",
        "assets/images/portfolio.GBSnow.smsBlast.png",
        "assets/images/portfolio.GBSnow.quotegenerator.png",
      ],
      type: "portfolio-full",
      categories: ["Typescript", "NodeJS", "Microservices Architecture", "AWS"],
      liveUrl: "https://greaterbostonsnowremoval.com",
    },
    {
      id: 3,
      title: "Query Builder",
      image: "assets/images/portfolio.querybuilder.gif",
      link: [
        "assets/images/portfolio.querybuilder.gif",
        "assets/images/portfolio.querybuilder.screenshot.1.png",
        "assets/images/portfolio.querybuilder.screenshot.2.png",
      ],
      type: "portfolio-full",
      categories: ["React", "MySQL / MongoDB / PostgresSQL", "NodeJS"],
      liveUrl: "https://querybuilder.vercel.app/",
    },
    {
      id: 4,
      title: "Medical Decision Tools",
      image: "assets/images/portfolio.medicalc.screenshot.clean.png",
      link: [
        "assets/images/portfolio.sirscalc.gif",
        "assets/images/portfolio.medicalc.screenshot.clean.png",
        "assets/images/portfolio.respiratorycalc.results.jpg",
      ],
      type: "portfolio-half",
      categories: ["Python", "Flask", "React", "REST APIs"],
      liveUrl: "https://sirscalc.vercel.app/",
    },
    {
      id: 5,
      title: "Placenotes Location First Social Platform",
      image: "assets/images/portfolio.placenotes.note.jpg",
      link: ["assets/images/portfolio.placenotes.images.jpg", "assets/images/portfolio.placenotes.note.jpg"],
      type: "portfolio-half",
      categories: ["React", "GraphQL", "MongoDB", "JWT Auth", "AWS"],
      liveUrl: "https://placenotes.vercel.app/",
    },
    {
      id: 6,
      title: "Tableau Data Cleaner",
      image: "assets/images/portfolio.tableaucleaner.screenshot.png",
      link: "assets/images/portfolio.tableaucleaner.screenshot.png",
      type: "portfolio-half",
      categories: ["React", "Typescript", "NodeJS", "ETL Pipeline"],
      liveUrl: "https://tableaucleaner.vercel.app",
    },
  ],
}
