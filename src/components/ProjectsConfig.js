import Emojigit from "../images/Emojigit.PNG";
import HuluClone from "../images/HuluClone.PNG";
import CPEditor from "../images/CPEditor.PNG";
import DevBlogsPreview from "../images/DevBlogsPreview.PNG";
import CloudSpacePreview from "../images/CloudspacePreview.PNG";
import PortfolioPreview from "../images/PortfolioPreview.PNG";

const projectsConfig = [
  {
    title: "Emoji Git CLI Tool",
    previewImage: Emojigit,
    description:
      "In this project, I built Interactive CLI Tool for writing emojis in commit messages.It gives user some list of emojis in terminal before making commit. From that list user can select emojis according to the commit task he has done. After choosing that user can right commit message along with that emoji.",
    liveDemoLink: "https://www.npmjs.com/package/emojigit",
    githubLink: "https://github.com/yatharth1706/emojigit",
    downloads:
      "https://img.shields.io/npm/dt/emojigit.svg?style=flat-square)](https://www.npmjs.com/package/emojigit",
  },

  {
    title: "DevBlogs",
    previewImage: DevBlogsPreview,
    description:
      "This website is basically for sharing blogs with everyone. It gives us platform to write blogs in markdown language. Provides the preview also where we can see the final output of the blog post. It was kind of like a side project to refresh my frontend skills as well as backend skills. Tech stack using in this are React and Firebase",
    liveDemoLink: "https://dev-blogs-blond.vercel.app/",
    githubLink: "https://github.com/yatharth1706/DevBlogs",
  },

  {
    title: "CloudSpace",
    previewImage: CloudSpacePreview,
    description:
      "Efficient storage solution. Support image file upload right now. Provides download url as well as preview of uploaded file. Tech stack used in this are AWS Amplify, Cognito, API Gateway, DynamoDB and ReactJS",
    liveDemoLink: "https://cloud-space.vercel.app/",
    githubLink: "https://github.com/yatharth1706/Cloud-Space",
  },

  {
    title: "Portfolio",
    previewImage: PortfolioPreview,
    description:
      "Portfolio website built using ReactJS and TailwindCSS. Includes information about me and my skills along with side projects.",
    liveDemoLink: "https://my-portfolio-six-jet.vercel.app/",
    githubLink: "https://github.com/yatharth1706/my-portfolio",
  },

  {
    title: "Hulu Clone 2.0",
    previewImage: HuluClone,
    description:
      "Side project to refresh TailwindCSS and Next JS Skills. Used TMDB API for showing movies and their description and other meta information.",
    liveDemoLink: "https://hulu-clone-iota.vercel.app/",
    githubLink: "https://github.com/yatharth1706/hulu-clone",
  },

  {
    title: "CP Editor Web",
    previewImage: CPEditor,
    description:
      "In this project, I did the frontend part. I made first design on Adobe XD. And then I built this from scratch using ReactJS, TailwindCSS and needed NPM Modules. It was fun to work on this project. This website's main purpose was to allow user to write code in any language and test it with different test cases and see the output.",
    liveDemoLink: "",
    githubLink: "",
  },
];

export default projectsConfig;
