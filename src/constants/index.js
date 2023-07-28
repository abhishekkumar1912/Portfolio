import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,

  studynotion,
  busbooking,
  cafe2,
  carrent,
  jobit,
  dev,
  Portfolio,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "profiles",
    title: "Profiles",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Competitive Programmer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Study-Notion",
    description:
      "StudyNotion is a fully functional ed-tech learning platform that enables users to create, consume, and rate educational content. Users can sign up and log in to the platform using their email addresses and password. The platform also supports OTP verification and forgot password functionality.. It uses Cloudinary, a cloud-based media management service, to store and manage all media content" ,
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "orange-text-gradient",
      },
    ],
    image: studynotion,
    source_code_link: "https://github.com/abhishekkumar1912/Study-Notion",
  },

  {
    name: "Bus Booking System",
    description:
      "It is a fully functional bus reservation system developed using Tkinter (GUI), SQLite, and Python, This reservation system has three modules. First module helps the customer to enquire the availability of seats in a particular bus at particular date. Second module helps him to reserve a ticket. Using third module he can cancel a reserved ticket. It manages all the information about Bus, Customers, Seats. The Project is totally built at administrator end",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter (GUI)",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: busbooking,
    source_code_link: "https://github.com/abhishekkumar1912/Bus-Booking-System",
  },

  {
    name: "Portfolio",
    description:
      "Designed and developed a impressive personal portfolio website using 3D graphics library like ThreeJS, React Three Fiber, Framer Motion to showcase skills, projects, and achievements",
    tags: [
      {
        name: "ThreeJS",
        color: "blue-text-gradient",
      },
      {
        name: "React Three Fiber",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/abhishekkumar1912/Portfolio",
  },

  {
    name: "Shopping Cart",
    description:
      "Shopping Cart Front-end design using React/Redux.It is website contain multiple items on its Home page and we can add them into the our cart.In cart we can see our selected items and also total items with total amount. It is fully responsive and Designing is done using Tailwind CSS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/abhishekkumar1912/Shopping-Cart.git",
  },

  {
    name: "Weather App",
    description:
      "Weather App is a website which tells about the weather of current location of user as well as user can also search the city for which user wants to find out the weather.",
    tags: [
      {
        name: "HTLM",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/abhishekkumar1912/Weather-App.git",
  },


];

export { services, technologies, projects };
