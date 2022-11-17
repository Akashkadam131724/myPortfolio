import {FaHtml5,FaNodeJs,FaReact} from 'react-icons/fa/'
import {DiCss3Full} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {SiMongodb} from 'react-icons/si'
export const SkillsData = [
  {
    type: "Frontend",
    list: [
      {
        name: "ReactJS",
        icon:  <FaReact/>,
      },
      {
        name: "HTML",
        icon: <FaHtml5 style={{color : 'orange'}}/>,
      },
      {
        name: "Javascript",
        icon: <IoLogoJavascript style={{color : 'black',background: 'yellow' }}/>,
      },
      {
        name: "CSS",
        icon:<DiCss3Full style={{color : 'white', background: 'blue'}}/>,
      },
    ],
  },
  {
    type: "Backend",
    list: [    
      {
        name: "NodeJS",
        icon: <FaNodeJs style={{color : 'green'}}/>
      },
      {
        name: "MongoDB",
        icon: <SiMongodb style={{color : 'green'}}/>
      },
    ],
  },
];
