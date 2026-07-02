import { useState } from "react";
import "../styles/gallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import sanyangImg from "../assets/sanyang/sanyang.png";
import shakeys1Img from "../assets/shakeys1.png";
import shakeys2Img from "../assets/shakeys1.png";
import ProjectData from "../utils/ProjectsData";
import { useLocation } from "react-router-dom";

function Gallery() {
    const navigate = useNavigate();
  const [index, setIndex] = useState(-1);
  const { title, type, projectId } = useParams();
const location = useLocation();

const parentPath = location.pathname
  .split("/")
  .slice(0, -1)
  .join("/");

console.log(parentPath);
  const project = ProjectData[type].find(project => project.title === title);

  console.log('useParams ' , projectId);
  console.log('useParams ' , ProjectData[type]);


  return (
    <>
      {/* <div className="gallery">
        
        {project?.image?.map((slide, i) => (
            
          <img
            key={i}
            src={slide.src}
            onClick={() => setIndex(i)}
          />
        ))}
      </div> */}

      <Lightbox
        open
        index={index}
        close={() =>  navigate(-1)}
        slides={project?.image}
      />
    </>
  );
}

export default Gallery;