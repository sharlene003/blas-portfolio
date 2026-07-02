import "../styles/projects.css";
import sanyangImg from "../assets/sanyang/sanyang.png";
import shakeys1Img from "../assets/shakeys1.png";
import sanyangLogo from "../assets/sanyang/logo.png";
import { useNavigate } from "react-router-dom";
import ProjectData from "../utils/ProjectsData";

import { useParams } from "react-router-dom";
function ProjectsPage() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  console.log('useParams!! ' , ProjectData);
  // const projects = [
  //   {
  //     id: 1,
  //     title: "Sanyang",
  //     image: sanyangLogo,
  //     description: "",
  //     galleryId: "1",
  //   },
  //   {
  //     id: 2,
  //     title: "Task Manager",
  //     image: shakeys1Img,
  //     description: "Task management system",
  //     galleryId: "2",
  //   },
  //   {
  //     id: 3,
  //     title: "Portfolio Website",
  //     image: "",
  //     description: "Personal portfolio built with React",
  //     galleryId: "3",
  //   },
  // ];

  return (
    <div className="projects-container">
      <h2 className="text-3xl font-semibold bg-gradient-to-r from-violet-600 to-blue-500 text-transparent bg-clip-text">{ProjectData[projectId]?.title}</h2>
{/* <div class="grid grid-cols-4 gap-4"></div> */}
      <div className="grid grid-cols-4 gap-4" >
        {ProjectData[projectId]?.map((project) => (
          <div key={project.id} className="card cursor-pointer" onClick={() => navigate(`/projects/${projectId}/${project.title}`)}>
            <img src={project.preview} alt={project.title} />
            {/* <h3>{project.title} </h3>
            <p>{project.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;