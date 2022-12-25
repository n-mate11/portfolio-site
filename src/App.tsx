import tangle from "./assets/tangleoffline.png";
import kamillaoptika from "./assets/kamillaoptika.png";
import portrait from "./assets/me.jpeg";

import Project from "./components/Project";
import Navbar from "./components/Navbar";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./styles.css";

function App() {
  return (
    <div className="p-4">
      <Navbar />
      <div className="flex flex-col items-center text-center mt-20 mb-36 md:flex-row md:justify-center md:text-left md:my-36">
        <img
          src={portrait}
          className="object-cover w-36 h-36 rounded-full md:mr-16 md:w-52 md:h-52 lg:mr-32 lg:w-80 lg:h-80"
        />
        <div>
          <h1 className="text-3xl mt-8 md:text-5xl lg:text-6xl">
            Hey
            <span role="img" aria-label="waving-hand">
              👋
            </span>
            , I'm Máté
          </h1>
          <h2 className="text-2xl my-4 text-bold bg-gradient-to-r from-[#b0f3f1] to-[#ffcfdf] bg-cover bg-clip-text text-transparent bg-[#f3ec78] font-bold md:text-3xl lg:text-4xl">
            a Software Engineer
          </h2>
        </div>
      </div>
      <section id="about">
        <p className="text-3xl text-center my-8 bg-gradient-to-r from-[#b0f3f1] to-[#ffcfdf] bg-cover bg-clip-text text-transparent bg-[#f3ec78] font-bold">
          About me
        </p>
        <p className="text-lg px-2 text-[#C9C3C1] m-auto md:w-2/3 lg:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in elit
          ac dui mattis dignissim. Suspendisse volutpat nibh quis odio
          tristique, et lobortis ligula aliquam. Donec sollicitudin molestie
          magna in pharetra. Aenean quis velit molestie, tristique odio in,
          hendrerit risus. Mauris consectetur ipsum vitae elementum aliquet.
          Proin eu congue mauris. Nam sagittis eget odio eu auctor. Integer
          imperdiet ex a arcu consectetur, ut volutpat ante vestibulum. Nullam
          arcu felis, fermentum aliquet congue vitae, ullamcorper eget tortor.
          Maecenas nec diam aliquet, lobortis velit sed, finibus ipsum. Integer
          venenatis facilisis volutpat.
        </p>
      </section>
      <section id="projects">
        <p className="text-3xl text-center mt-16 bg-gradient-to-r from-[#b0f3f1] to-[#ffcfdf] bg-cover bg-clip-text text-transparent bg-[#f3ec78] font-bold">
          Some things I've built
        </p>
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-center">
          <Project
            link="https://kamillaoptika.hu"
            title="Kamilla Optika"
            image={kamillaoptika}
          />
          <Project
            link="https://tangleoffline.com"
            title="Tangle Offline"
            image={tangle}
          />
        </div>
      </section>
      <section id="contact" className="flex flex-col items-center mt-8">
        <p className="text-3xl mb-8 bg-gradient-to-r from-[#b0f3f1] to-[#ffcfdf] bg-cover bg-clip-text text-transparent bg-[#f3ec78] font-bold">
          Get in touch
        </p>
        <p className="text-center">
          I am currently not looking for a new role, however, feel free to reach
          out to me.
        </p>
        <a
          href="mailto:n.mate.peter@gmail.com"
          className="leading-1 rounded-full px-10 py-4 my-8 text-xl bg-gradient-to-r from-[#b0f3f1] to-[#ffcfdf] tracking-wide shadow-xs hover:shadow-2xl active:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition duration-200">
          Send me an email
        </a>
        <div className="flex my-8">
          <a
            href="https://www.linkedin.com/in/mate-nagy-356508222/"
            className="mx-8">
            <FaLinkedin color="#fff" size={"2em"} />
          </a>
          <a href="https://github.com/n-mate11" className="mx-8">
            <FaGithub color="#fff" size={"2em"} />
          </a>
        </div>
        <p className="mb-4">Designed and Developed by Máté Nagy</p>
      </section>
    </div>
  );
}

export default App;
