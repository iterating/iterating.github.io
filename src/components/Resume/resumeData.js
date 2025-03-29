/**
 * Resume Data Configuration
 * Contains experience, education, skills and projects data for the portfolio
 */

export const resumeData = {
  experienceSection: {
    sectionTitle: "Resume",
    sectionHeading: "Experience",
    experiences: [
      {
        id: 1,
        date: "2024 - Present",
        title: "Software Engineer (contract)",
        company: "LA Film Lab and Studio, Los Angeles CA",
        accomplishments: [
          "Responsible for building a component-driven architecture using TypeScript, Nuxt.js, and Node.js with Supabase, delivering mission-critical features that improved operational efficiency and customer engagement",
          "Developed API endpoints that retrieves and updates order information between Square's e-commerce SDK and Supabase database, processing batch transactions with error handling and real-time status tracking for customer orders",
          "Implemented real-time event architecture with SSE, enabling instant order updates across all platforms",
          "Developed an optimized kiosk system that reduced in-person order times by 25% and reduced manual errors",
          "Created database migration tools with Javascript and SQL, leading to successful database migration"
        ]
      },
      {
        id: 2,
        date: "2021 - 2024",
        title: "Web Developer (contract)",
        company: "Greater Boston Snow Removal, Boston MA",
        accomplishments: [
          "Developed business service platform that transformed company into Boston's market leader",
          "Built location-based worker matching system using Google Cloud API and MongoDB geospatial indexing",
          "Implemented microservices architecture using TypeScript and Node.js, achieving 99.9% uptime during peak snow events with 1,000+ daily transactions"
        ]
      },
      {
        id: 3,
        date: "2018 - 2020",
        title: "Operations Manager",
        company: "Greater Boston Snow Removal, Boston MA",
        accomplishments: [
        ""
        ]
      },
      {
        id: 4,
        date: "2014 - 2015",
        title: "Clinical User Specialist Intern",
        company: "Vecna Healthcare, Burlington MA",
        accomplishments: [
          "Developed EMR user interfaces that reduced clinical documentation time by 35%",
          "Reduced system deployment time by 60% through automation with Ansible",
        ]
      },
      {
        id: 5,
        date: "2011 - 2013",
        title: "Research Assistant in Vaccine Immunology",
        company: "Vaccine Immunotherapy Center, Massachusetts General Hospital, Boston MA",
        accomplishments: [
          "Performed cutting edge transplant immunology research",
          "Utilized Python to perform statistical analyses of data from in-vitro and microarray experiments",
          "Programmed 'Cellbot', an automated cell counting program in Java and ImageJ",
          "Published in American Journal of Transplantation"
        ]
      }
    ]
  },
  educationSection: {
    sectionHeading: "Education",
    educationItems: [
      {
        id: 1,
        date: "2024",
        institution: "Per Scholas",
        degree: "Software Engineering Immersive",
        accomplishments: [
          "Completed intensive training in enterprise software development practices and Agile methodologies, achieving top performance (4.0 GPA)"
        ]
      },
      {
        id: 2,
        date: "2015 - 2018",
        institution: "University Of Massachusetts Chan Medical School",
        degree: "M.D. Candidate",
        accomplishments: [
          "Won American College of Physicians National Abstract Competition",
          "Published in ACP Impact and presented at Digestive Disease Interventions",
        ]
      },
      {
        id: 3,
        date: "2007 - 2010",
        institution: "Tufts University",
        degree: "B.Sc. GPA: 3.7",
        accomplishments: [
          "Graduated Magna Cum Laude with Thesis Honors",
          "Published research in Organic and Biomolecular Chemistry",
          "Managed IT infrastructure as Computer Lab Administrator"
        ]
      },
      {
        id: 4,
        date: "",
        institution: "Choate Rosemary Hall",
        degree: "",
        accomplishments: [
          "American Invitational Mathematics Examination (AIME) Qualifier",
          "Recognized for exceptional problem-solving  skills"
        ]
      }
    ]
  },
  skillsSection: {
    sectionHeading: "Skills",
    skills: [
      "Typescript/Javascript",
      "LangChain",
      "Python, Flask, Numpy, Scipy",
      "GraphQL, RESTful web services",
      "PostgreSQL, MySQL, MongoDB",
      "React, Nuxt, Vue",
      "HTML5/CSS3",
      "AWS, EC2, DynamoDB",
      "Docker",
      "Git, Linux environments",
      "Figma, Illustrator, Photoshop",
      "Excel, Tableau"
    ]
  },
  projectsSection: {
    // sectionHeading: "Projects",
    projects: [
      {
        id: 1,
        title: "Clinical Decision Support Tools",
        description: "A collection of medical calculators and decision support tools",
        details: [
          "Built with JavaScript and Python",
          "Implemented evidence-based algorithms for clinical decision making",
          "Created intuitive user interfaces for healthcare providers"
        ]
      },
      {
        id: 2,
        title: "Query Builder",
        description: "Platform for data analysts and developers to execute custom queries",
        details: [
          "Supports PostGreSQL, MySQL, and MongoDB databases",
          "Created data visualizer for query results",
          "Reusable and customizable templates for data analysis"
        ]
      }
    ]
  }
};
