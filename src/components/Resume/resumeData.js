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
          "        Developed full-stack solutions with component-driven architecture using TypeScript, Vue.js, and Node.js with Supabase as the backend-as-a-service, delivering mission-critical features that drove operational efficiency and customer engagement beyond growth expectations for a team of our size",
          "Implemented real-time pub/sub event architecture with SSE, enabling instant order updates across all platforms",
          "Developed RESTful API endpoints that retrieves and updates order information between Square's e-commerce SDK and Supabase database, resulting in seamless order management",
          "Developed optimized kiosks with Vue.js and TypeScript for order entry that reduced in-person order times by 25% and reduced manual errors",
          "Created database migration tools with Javascript and SQL, leading to successful database migration",
        ],
      },
      {
        id: 2,
        date: "2021 - 2024",
        title: "Web Developer (contract)",
        company: "Greater Boston Snow Removal, Boston MA (Hybrid remote)",
        accomplishments: [
          "Developed scalable web applications that transformed the company into Boston's market leader, growing from 4 to 80+ employees through coordinated dispatch and real-time communications",
          "Built location-based worker matching system using Google Cloud API and MongoDB geospatial indexing, improving service time by 40%",
          "Implemented robust security infrastructure with JWT-based authentication and role-based access control for secure data access across microservices",
          "Deployed system on AWS with ElasticBeanstalk running EC2 instances, maintaining high availability and scalability",
        ],
      },
      {
        id: 3,
        date: "2019 - 2022",
        title: "Business Intelligence Analyst / Operations Manager",
        company: "Greater Boston Snow Removal, Boston MA",
        accomplishments: [
          "Managed multiple operations teams and implemented route optimizations that reduced operational costs by 25%",
          " Leveraged Excel, SQL, and Tableau to create dashboards for KPI tracking and business intelligence, driving strategic decision-making",
        ],
      },
      {
        id: 4,
        date: "2014 - 2015",
        title: "Clinical User Specialist Intern",
        company: "Vecna Healthcare, Burlington MA",
        accomplishments: [
          "Provided usability improvements to EMR frontend with feedback from training and working with clinical staff, reducing clinical documentation time by 30%",
          "Collaborated closely with engineering teams to prototype user interfaces with HTML, CSS, and JavaScript that meet the needs of healthcare providers and improve patient care outcomes",
        ],
      },
      {
        id: 5,
        date: "2011 - 2013",
        title: "Research Assistant in Vaccine Immunology",
        company:
          "Vaccine Immunotherapy Center, Massachusetts General Hospital, Boston MA",
        accomplishments: [
          "Performed cutting edge transplant immunology research",
          "Utilized Python to perform statistical analyses of data from in-vitro and microarray experiments",
          "Programmed 'Cellbot', an automated cell counting program in Java and ImageJ",
          "Published in American Journal of Transplantation",
        ],
      },
    ],
  },
  educationSection: {
    sectionHeading: "Education",
    educationItems: [
      // {
      //   id: 1,
      //   date: "2024",
      //   institution: "Per Scholas",
      //   degree: "Software Engineering Immersive",
      //   accomplishments: [
      //     "Completed intensive training in enterprise software development practices and Agile methodologies, achieving top performance (4.0 GPA)"
      //   ]
      // },
      {
        id: 2,
        date: "2014 - 2018",
        institution: "University Of Massachusetts Chan Medical School",
        degree: "M.D. Candidate",
        accomplishments: [
          "Developed clinical decision support tools and won American College of Physicians National Abstract Competition",
          "Published in ACP Impact and presented at Digestive Disease Interventions",
        ],
      },
      {
        id: 3,
        date: "2007 - 2010",
        institution: "Tufts University",
        degree: "B.Sc. GPA: 3.7",
        accomplishments: [
          "Graduated Magna Cum Laude with Thesis Honors",
          "Managed IT infrastructure as Computer Lab Administrator at Eliot-Pearson Children's School, later earning Red Hat Certified System Administrator (RHCSA) certification",
        ],
      },
      {
        id: 4,
        date: "",
        institution: "Choate Rosemary Hall",
        degree:
          "American Invitational Mathematics Examination (AIME) Qualifier",
        accomplishments: ["Recognized for exceptional problem-solving  skills"],
      },
    ],
  },
  skillsSection: {
    sectionHeading: "Skills",
    skills: [
      "Typescript/Javascript, Node.js",
      "Python, Flask, Numpy, Scipy",
      "GraphQL, RESTful web services",
      "SQL skill certification, PostgresSQL, MongoDB, Firebase/Supabase",
      "React, Nuxt, Vue",
      "HTML5/CSS3",
      "AWS, EC2, DynamoDB, RDS, ElasticBeanstalk",
      "LangChain, Streamlit, FastAPI",
      "Git, Linux environments, Docker, Bash",
      "Agile and Lean methodologies, User Stories",
      // "Figma, Illustrator, Photoshop",
      // "Excel, Tableau"
    ],
  },
  // projectsSection: {
  //   // sectionHeading: "Projects",
  //   projects: [
  //     {
  //       id: 1,
  //       title: "Clinical Decision Support Tools",
  //       description: "A collection of medical calculators and decision support tools",
  //       details: [
  //         "Built with JavaScript and Python",
  //         "Implemented evidence-based algorithms for clinical decision making",
  //         "Created intuitive user interfaces for healthcare providers"
  //       ]
  //     },
  //     {
  //       id: 2,
  //       title: "Query Builder",
  //       description: "Platform for data analysts and developers to execute custom queries",
  //       details: [
  //         "Supports PostGreSQL, MySQL, and MongoDB databases",
  //         "Created data visualizer for query results",
  //         "Reusable and customizable templates for data analysis"
  //       ]
  //     }
  //   ]
  // }
}
