import "./styles.css";
import Hero from "../../components/hero";
import ProjectList from "../../components/project-list";
import AboutMe from "../../components/about";
import Footer from "../../components/footer";
import ContactMe from "../../components/contact-me";

const HomePage = () => {
  return (
    <div id="home" className="mx-auto ">
      <Hero
        title={"Full-Stack React Developer"}
        presentation={
          "Full-Stack Developer | Front-End Specialist | Buenos Aires, Argentina. 📍"
        }
      />
      <ProjectList />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default HomePage;
