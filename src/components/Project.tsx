import "../styles.css";

interface ProjectType {
  link: string;
  title: string;
  image: string;
  type?: "website" | "mobile";
}

const Project = ({ link, title, image, type }: ProjectType) => {
  return (
    <div className="rounded-2xl w-full h-fit my-12 p-8 border-[3px] border-[#20222e] backdrop-blur-[54px] bg-gradient-to-b from-[#23253180] to-[#0f0f1880] md:w-9/12 lg:w-1/3 lg:mx-8">
      <img className="w-full rounded-2xl md:h-auto" src={image} />
      <p className="text-xl mt-4">{title}</p>
      <a className="text-white hover:underline" href={link}>
        Visit the website
      </a>
    </div>
  );
};

export default Project;
