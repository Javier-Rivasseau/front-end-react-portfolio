import ProjectCard from "../project-card";
import projectData from "../../assets/projects-data/data";

interface Project {
  title: string;
  imageUrl: string;
  description: string;
  route: string;
  githubUrl: string;
  githubUrl2: string;
}

const ProjectList = () => {
  return (
    <div id="projects" className="text-center mx-auto my-10">
      <div className="w-96 mx-auto">
        <h1 className="text-blue-600 font-bold text-2xl my-5">PROJECTS</h1>
      </div>
      <div className="grid grid-cols-1 gap-1">
        {projectData && projectData.length
          ? projectData.map((project: Project, index: number) => (
              <div key={index} className="mx-auto  justify-self-center">
                <ProjectCard
                  key={index}
                  title={project.title}
                  imageUrl={require(`../../assets/images/${project.imageUrl}`)}
                  description={project.description}
                  to={project.route}
                  index={index}
                  githubUrl={project.githubUrl}
                  githubUrl2 = {project.githubUrl2}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ProjectList;
