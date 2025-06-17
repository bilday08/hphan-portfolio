import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Hanh",
  lastName: "Phan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.png",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Vietnamese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/bilday08",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hanhphan812",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:phanhonghanh0812@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      I’m Hanh Phan, a Software Engineer building websites and technology software
      <br /> that integrates AI — fast, reliable, and optimized.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Software Engineer with over 2 years of experience delivering AI-integrated software, cloud solutions, and web systems across industrial, fintech, and outsourcing domains. <br />
        {/* <br /> - Proven expertise in building high-performance, low-latency pipelines (under 100ms) on both edge (Jetson) and server (RTX) platforms. 
        <br /> - Adept at bridging applied research and deployment, driving end-to-end development from model design to system integration. 
        <br /> - Strong leadership in mentoring junior engineers, collaborating across teams, and aligning AI solutions with real-world operational goals. */}
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Next Robotics",
        project: "Hoya (NextSight)",
        timeframe: "2024 - Present",
        role: "Data Engineer & Software Engineer",
        achievements: [
          <>
            Manage AI model data training, overseeing and resolving data anomalies as they arise.
          </>,
          <>
            Developed cross-platform desktop applications (Qt, Python) to interface with industrial cameras and operator feedback systems.
          </>,
        ],
        images: [
          // // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Next Robotics",
        project: "Multi-Camera People Re-Identification (NextEyes)",
        timeframe: "2024",
        role: "Software Engineer",
        achievements: [
          <>
            Build website with a CMS for AI-powered CCTV management for businesses.
          </>,
          <>
            Leverage ReactJS and Redux for scalable state management and maintainable code.
          </>,
        ],
        images: [
          // // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "GSI Group Limited",
        project: "Steel Connection - Allplan AEC",
        timeframe: "2023 - 2024",
        role: "Software Developer",
        achievements: [
          <>
            The software provides global BIM design for the AEC industry (Architecture, Engineering, and Construction).
          </>,
          <>
            Using the Python programming language for the project.
          </>,
          <>
            Adhering to the SonarQube standards in code development.
          </>,
          <>
            Applying OOP during the project development process.
          </>,
          <>
            Analyzing customer requirements and devising suitable algorithms to solve the problem.
          </>,
        ],
        images: [],
      },
      {
        company: "GSI Group Limited",
        project: "Prefab Wall - Allplan AEC",
        timeframe: "2023 - 2024",
        role: "Software Developer",
        achievements: [
          <>
            Developed backend code using Python, adhering to Object-Oriented Programming (OOP), SOLID principles, MVC pattern, and Factory pattern.
          </>,
          <>
            Worked with SQL and databases.
          </>,
          <>
            Utilized PythonPartsFramework API.
          </>,
          <>
            Implemented frontend adjustments to XML and CSS files using the PythonPartsFramework API.
          </>,
        ],
        images: [],
      },
      {
        company: "Ubank - Digital Bank",
        project: "Ubank - Portal",
        timeframe: "2023",
        role: "Software Developer",
        achievements: [
          <>
            Developed a dynamic digital banking portal using Angular, SCSS, and TypeScript.
          </>,
          <>
            Ensured a seamless user experiences across multiple devices through responsive design implementation and UI optimization.
          </>,
          <>
            Adhered to industry best practices and coding standards to ensure maintainability and future scalability of the portal.
          </>,
        ],
        images: [],
      },
      {
        company: "Ubank - Digital Bank",
        project: "Ubank Insurance Cross Selling Integration With Izion",
        timeframe: "2023",
        role: "Software Developer",
        achievements: [
          <>
            Integrating a seamless payment gateway to facilitate secure and convenient insurance purchases within the Ubank app.
          </>,
          <>
            Designing API endpoints to facilitate the retrieval of insurance product information, including coverage details, pricing, and terms.
          </>,
          <>
            Conducting thorough testing and debugging to ensure the reliability and functionality of the API integration.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Van Lang University",
        description:  <>B.Eng. in Management Information Systems
                      <br /> GPA: 2.8/4.0
                      <br /> Courses: Algorithms, OOP, Requirement Analysis Techniques
                      </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages:",
        description: <>Python, JavaScript</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Frameworks and Libraries:",
        description: <> ReactJS, NextJS, Angular, TailwindCSS, Bootstrap, Qt, Pylon</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Database",
        description: <>MongoDB, PostgreSQL, SQLite, Firebase, Network Attached Storagee</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Version Control:",
        description: <>Git, GitLab, GitHub, Bitbucket</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Cloud and Server:",
        description: <>AWS, Dedicated Servers, NAS( Network Attached Storage )</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Deployment:",
        description: <>Docker, CI/CD, CMake, virtual drivers</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Platforms:",
        description: <>MacOS, Windows, Linux</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Other skills:",
        description: <> Microsoft Office Suite, Figma, Power BI, Draw.io, Odoo</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
