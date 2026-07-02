import sanyangImg from "../assets/sanyang/sanyang.png";
import shakeys1Img from "../assets/shakeys1.png";
import sanyangLogo from "../assets/sanyang/logo.png";

import vivoLogo from "../assets/vivo/vivo-logo.jpeg";
import vivoUI from "../assets/vivo/vivo-ui.png";

import benchLogo from "../assets/bench/bench-logo.png";
import benchUI from "../assets/bench/bench-ui.png";
import benchUI2 from "../assets/bench/bench-ui2.png";

import bspLogo from "../assets/bsp/bsp-logo.jpg";

import novadeciLogo from "../assets/novadeci/novadeci-logo.jpeg";

import mayniladLogo from "../assets/maynilad/maynilad-logo.jpg";
import mayniladUI from "../assets/maynilad/maynilad-ui.png";

import globeLogo from "../assets/globe/globe-logo.png";
import globeUI from "../assets/globe/globe-ui.png";
import globeUI2 from "../assets/globe/globe-ui2.png";

import shakeysLogo from "../assets/shakeys/shakeys-logo.png";
import shakeysUI from "../assets/shakeys/shakeys-ui.png";

import pitmastersLogo from "../assets/pitmasters/pitmasters-logo.jpg";
import pitmastersUI from "../assets/pitmasters/pitmasters-ui.png";
import pitmastersUI2 from "../assets/pitmasters/pitmasters-ui2.png";
import pitmastersUI3 from "../assets/pitmasters/pitmasters-ui3.png";

import snrLogo from "../assets/snr/snr-logo.jpg";
import snrUI from "../assets/snr/snr-ui.png";
import snrUI2 from "../assets/snr/snr-ui2.png";

import yonduLogo from "../assets/yondu/yondu-logo.jpeg";
import yonduUI from "../assets/yondu/yondu-ui.png";


const ProjectsData = {
  "e-commerce": [
    {
      id: 1,
      title: "Sanyang",
      image: [
        {
          id: 1,
          src: sanyangImg,
        },
      ],
      preview: sanyangLogo,
      description: "",
      galleryId: "1",
    },
    {
      id: 2,
      title: "Vivo",
      image: [
        {
          id: 1,
          src: vivoUI,
        },
      ],
      preview: vivoLogo,
      description: "Task management system",
      galleryId: "2",
    },
    {
      id: 3,
      title: "Bench",
      image: [
        {
          id: 1,
          src: benchUI,
        },
        {
          id: 2,
          src: benchUI2,
        },
      ],
      preview: benchLogo,
      description: "Task management system",
      galleryId: "3",
    },
    {
        id: 4,
        title: "Globe",
        image: [
          {
            id: 1,
            src: globeUI,
          },
          {
            id: 2,
            src: globeUI2,
          },
        ],
        preview: globeLogo,
        description: "Task management system",
        galleryId: "4",
    },
     {
        id: 5,
        title: "Yondu Website",
        image: [
          {
            id: 1,
            src: yonduUI,
          },
        ],
        preview: yonduLogo,
        description: "Task management system",
        galleryId: "5",
    }
  ],

  "content-management-system": [
    {
      id: 1,
      title: "Shakeys",
      preview: shakeysLogo,
      image: [{
        id: 1,
        src: shakeysUI,
      }],
      
      description: "",
      galleryId: "1",
    },
  ],
  "enterprise": [
    {
      id: 1,
      title: "Banko Sentral ng Pilipinas (BSP)",
      preview: bspLogo,
      image: [
        {
          id: 1,
          src: bspLogo,
        },
      ],
      description: "",
      galleryId: "1",
    },
    {
      id: 2,
      title: "Novadeci",
      preview: novadeciLogo,
      image: [
        {
          id: 1,
          src: novadeciLogo,
        },
      ],
      description: "",
      galleryId: "2",
    },
    {
      id: 3,
      title: "Maynilad",
      preview: mayniladLogo,
      image: [
        {
          id: 1,
          src: mayniladUI,
        },
      ],
      description: "",
      galleryId: "3",
    },
  ],
  "gaming-and-entertainment": [
    {
      id: 1,
      title: "Pitmasters",
      preview: pitmastersLogo,
      image: [
        {
          id: 1,
          src: pitmastersUI,
        },
        {
          id: 2,
          src: pitmastersUI2,
        },
        {
          id: 3,
          src: pitmastersUI3,
        },
      ],
      description: "",
      galleryId: "1",
    },
  ],
  // "portfolio-website": [
  //   {
  //     id: 1,
  //     title: "Landing Page",
  //     image: "",
  //     description: "",
  //     galleryId: "1",
  //   },
  // ],
};

export default ProjectsData;
