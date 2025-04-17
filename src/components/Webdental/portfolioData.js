/**
 * Portfolio Data Configuration
 * Contains projects data for the portfolio section
 */

export const portfolioData = {
    sectionTitle: "websites",
    sectionHeading: "Client",
    sectionHeadingSpan: "Websites",
    projects: [
      {
        id: 1,
        title: "Dental Associates of Cape Cod",
        image: "assets/images/portfolio.webdental.dentalcapecod.desktop2.jpeg",
        link: ["assets/images/portfolio.webdental.dentalcapecod.gif", "assets/images/portfolio.webdental.dentalcapecod.desktop1.jpeg", "assets/images/portfolio.webdental.dentalcapecod.desktop2.jpeg"],
        type: "portfolio-full",
        animation: "fade-up",
        categories: ["Wordpress", "PHP"],
        liveUrl: "https://www.dentalcapecod.com/",
      },
      {
        id: 3,
        title: "Worcester Dental Group",
        image: "assets/images/portfolio.webdental.worcesterdentistgroup.desktop2.jpg",
        link: ["assets/images/portfolio.webdental.worcesterdentistgroup.gif","assets/images/portfolio.webdental.worcesterdentistgroup.jpg", "assets/images/portfolio.webdental.worcesterdentistgroup.desktop1.jpg", "assets/images/portfolio.webdental.worcesterdentistgroup.desktop2.jpg"],
        type: "portfolio-full",
        animation: "fade-right",
        categories: ["Wordpress", "PHP"],
        liveUrl: "https://www.worcesterdentistgroup.com/",
      },
      {
        id: 4,
        title: "West Roxbury Dentistry",
        image: "assets/images/portfolio.webdental.westroxbury.png",
        link: ["assets/images/portfolio.webdental.westroxbury.gif", "assets/images/portfolio.webdental.westroxbury.png"],
        type: "portfolio-full",
        animation: "fade-up",
        categories: ["Vue.js", "Javascript", "Nuxt"]
      }
    ]
  };
  