import Emojigit from "../images/Emojigit.PNG";
import HuluClone from "../images/HuluClone.PNG";
import CPEditor from "../images/CPEditor.PNG";
import DevBlogsPreview from "../images/DevBlogsPreview.PNG";
import CloudSpacePreview from "../images/CloudSpacePreview1.png";
import PortfolioPreview from "../images/PortfolioPreview.PNG";
import ChatSpacePreview from "../images/ChatSpacePreview.png";

const projectsConfig = [
  {
    title: "Portfolio",
    previewImage: PortfolioPreview,
    description:
      "Portfolio website built using ReactJS and TailwindCSS. Includes information about me and my skills along with side projects.",
    liveDemoLink: "https://my-portfolio-six-jet.vercel.app/",
    githubLink: "https://github.com/yatharth1706/my-portfolio",
    backgroundColor: "bg-blue-500",
  },

  {
    title: "CloudSpace",
    previewImage: CloudSpacePreview,
    description:
      "Efficient storage solution. Support image file upload right now. Provides download url as well as preview of uploaded file. Tech stack used in this are AWS Amplify, Cognito, API Gateway, DynamoDB and ReactJS",
    liveDemoLink: "https://cloud-space.vercel.app/",
    githubLink: "https://github.com/yatharth1706/Cloud-Space",
    backgroundColor: "bg-yellow-500",
  },

  {
    title: "Chat Space",
    previewImage: ChatSpacePreview,
    description:
      "Fast One to One messaging app built using NextJS, Styled Components, Firebase v8 (Firestore and Auth), and React Firebase hooks for realtime fetching of data from the database. ",
    liveDemoLink: "https://chat-space.vercel.app",
    githubLink: "https://github.com/yatharth1706/chatspace",
    backgroundColor: "bg-gray-800",
  },

  {
    title: "Emoji Git CLI Tool",
    previewImage: Emojigit,
    description:
      "In this project, I built Interactive CLI Tool for writing emojis in commit messages.It gives user some list of emojis in terminal before making commit. From that list user can select emojis according to the commit task he has done. After choosing that user can right commit message along with that emoji.",
    liveDemoLink: "https://www.npmjs.com/package/emojigit",
    githubLink: "https://github.com/yatharth1706/emojigit",
    downloads:
      "https://img.shields.io/npm/dt/emojigit.svg?style=flat-square)](https://www.npmjs.com/package/emojigit",
    backgroundColor: "bg-indigo-500",
  },
  {
    title: "Hulu Clone 2.0",
    previewImage: HuluClone,
    description:
      "Side project to refresh TailwindCSS and Next JS Skills. Used TMDB API for showing movies and their description and other meta information.",
    liveDemoLink: "https://hulu-clone-iota.vercel.app/",
    githubLink: "https://github.com/yatharth1706/hulu-clone",
    backgroundColor: "bg-gray-800",
  },

  {
    title: "DevBlogs",
    previewImage: DevBlogsPreview,
    description:
      "This website is basically for sharing blogs with everyone. It gives us platform to write blogs in markdown language. Provides the preview also where we can see the final output of the blog post. It was kind of like a side project to refresh my frontend skills as well as backend skills. Tech stack using in this are React and Firebase",
    liveDemoLink: "https://dev-blogs-blond.vercel.app/",
    githubLink: "https://github.com/yatharth1706/DevBlogs",
    backgroundColor: "bg-green-500",
  },
];

export default projectsConfig;
