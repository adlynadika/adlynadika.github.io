// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Adlyn Adika",
  logo_name: "Adlyn Adika",
  nickname: null,
  subTitle:
    "Analyst by training, designer by passion — delivering clarity through numbers and creativity.",
  resumeLink:
    "https://drive.google.com/file/d/1zzTuIR6q7IneBRu8Y-OaL1GGcaP0xLXc/view?usp=sharing",
  portfolio_repository: "https://github.com/adlynadika",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/adlynadika",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adlynadika/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link:
      "https://www.youtube.com/channel/UClvrUclYSGX_MZPOF6ySG6A?view_as=subscriber",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link:
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=tasinmiftaulmannan@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Hello",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/tasinmiftaulmannan",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mm_tasin/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Analyst & Designer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing interactive dashboards using Tableau/Power BI",
        "⚡ Integrating datasets from Kaggle, Google Forms, and Excel",
        "⚡ Creating professional visuals with Photoshop and Canva",
        "⚡ Developing responsive web apps with React/Flutter/Dart",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            color: "#626262",
          },
        },
        {
          skillName: "Illustrator",
          fontAwesomeClassname: "logos:adobe-illustrator",
          style: {
            color: "#5C2D91",
          },
        },
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "logos:adobe-photoshop",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            color: "#7749bd",
          },
        },
        {
          skillName: "MS SQL Server",
          fontAwesomeClassname: "tabler:sql",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: {
            color: "#3178c6",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos:flutter",
          style: {
            color: "#953dac",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "logos:dart",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "akar-icons:github-fill",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "logos:laravel",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%",
    },
    {
      Stack: "Programming",
      progressPercentage: "50%",
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Malay",
      progressPercentage: "100%",
    },
    {
      Stack: "English",
      progressPercentage: "90%",
    },
    {
      Stack: "Malaysian Sign Language (BIM)",
      progressPercentage: "40%",
    },
    {
      Stack: "Mandarin",
      progressPercentage: "20%",
    },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Canva",
      progressPercentage: "100%",
    },
    {
      Stack: "Tableau", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Power BI", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Visual Studio Code", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Capcut", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Flutter", //Insert stack or technology you have experience in
      progressPercentage: "60%", //Insert relative proficiency in percentage
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/tasin95",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "International Islamic University Malaysia (IIUM)",
      subtitle: "B.Sc. in Information Communication and Technology (Hons.)",
      logo_path: "iiumlogo.png",
      alt_name: "IIITDM Kurnool",
      duration: "October 2022 - October 2026",
      cgpa: "3.79 / 4.00",
      descriptions: [
        "⚡ Studied core subjects including Data Warehousing, Business Intelligence, Information Visualization, and etc.",
        "⚡ Completed coursework and projects in Dashboard Design, Game Development, and Mobile App Development.",
        "⚡ Consistently achieved Dean's List recognition for academic excellence.",
        "⚡ Ranked among the top students in the program with strong analytical and design skills.",
        "⚡ Served as team leader in multiple group projects, demonstrating leadership and collaboration.",
      ],
      website_link: "https://www.iium.edu.my/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CompTIA Data+",
      subtitle: "Issued by CompTIA",
      logo_path: "comptiadata.png",
      certificate_link:
        "https://drive.google.com/file/d/1wLzB3oGkyI4svn09Yor2sAeSF3DbPzeU/view?usp=sharing",
      alt_name: "CompTIA",
      color_code: "white",
    },
    {
      title: "CCNA v7: Introduction to Networks",
      subtitle: "Issued by Cisco",
      logo_path: "ccna.png",
      certificate_link:
        "https://coursera.org/share/259bcebba35c1ba43934608a5fab9907",
      alt_name: "Cisco",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteering Activities",
  description:
    "Final-year Business Intelligence & Information Systems student with hands-on experience in data analysis, dashboard design, workflow automation, and creative storytelling. Contributed to industry projects at Malaysia Airports Holdings Berhad, academic events at IIUM, and IT support roles, blending analytical rigor with design polish.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Project Assistant – Improvement of Chute Netting (Metal Slider)",
          company: "Malaysia Airports Holdings Berhad",
          company_url: "https://www.mahb.com.my/",
          logo_path: "mahb_logo.png",
          duration: "November 2025 - December 2025",
          location: "Remote",
          description:
            "Supported KLIA2 Baggage Handling System (BHS) improvement project through analysis, planning, and reporting.",
          features: [],
          color: "#0879bf",
        },
        {
          title: "Data Entry & Performance Analyst – Inbound Breakdown Data",
          company: "Malaysia Airports Holdings Berhad",
          company_url: "https://www.mahb.com.my/",
          logo_path: "mahb_logo.png",
          duration: "November 2025 - December 2025",
          location: "Remote",
          description:
            "Analysed inbound baggage breakdown performance records using Microsoft Excel to improve operational visibility and efficiency.",
          features: [],
          color: "#0879bf",
        },
        {
          title: "Business & IT Assistant",
          company: "Tadika Khalifah Insaniah (KIDCC)",
          company_url: "https://codeexcel.ca/",
          logo_path: "kicdc_logo.png",
          duration: "October 2025",
          location: "Remote",
          description:
            "Managed financial records and built IT solutions using AppSheet to streamline operations for a childcare center.",
          features: [],
          color: "#0879bf",
        },
        {
          title: "Event Creative Designer",
          company: "CENTRIS & KICT IIUM",
          company_url: "https://www.iium.edu.my/",
          logo_path: "iiumlogo.png",
          duration: "June 2025",
          location: "Remote",
          description:
            "Designed creative assets using Canva and Capcut and standardized branding for academic event sessions.",
          features: [],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Media & Creative Team Member – Global Interfaith Tour (GIFT 4.0)",
          company: "Quranic Youth Club (QYC) IIUM",
          company_url: "https://www.instagram.com/qyciium/?hl=en",
          logo_path: "qyc.jpg",
          duration: "November 2024",
          location: "Ho Chi Minh, Vietnam",
          description:
            "I produced creative content and documented interfaith dialogues for global visibility.",
          features: [],
          color: "#181717",
        },
        {
          title: "Exchange Student – Humanising ICT Program",
          company: "UIN SUSKA & IIUM",
          company_url: "https://github.com/",
          logo_path: "uin.png",
          duration: "November - December 2023",
          location: "Pekan Baru, Indonesia",
          description:
            "I contributed to cross-cultural ICT projects and proposed community-based tech solutions.",
          features: [],
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I enjoy working on projects that combine data analysis and design. From building dashboards and cleaning datasets to creating visuals and user‑friendly interfaces, I’ve been able to apply both sides of my skill set. My best experiences have been developing EDA dashboard, 2D game, mobile and web application.",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "adlynlogo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Basic Programming, ML, AI, Android, Cloud and Opensource Development.",
  },
  blogSection: {
  },
  addressSection: {
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+880 1953699363",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
