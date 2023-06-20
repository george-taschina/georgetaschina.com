import Link from "next/link";
import React from "react";

type ProjectItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;   
  imageMerit: string;
};

type ProjectProps = {
  item: ProjectItem;
  className?: string;
};

const ProjectCard: React.FC<ProjectProps> = ({ item, className }) => {
    return (
        <Link href={item.link}>
          <div className={className + " transition-transform duration-500 ease-in-out transform hover:scale-110"}>
              <div className="flex flex-col justify-center w-auto">
                  <div className="relative">
                    <img src={item.src} alt={item.alt} className="w-100 rounded-lg " />
                    <p className="absolute bottom-0 left-0 bg-white bg-opacity-50 text-sm text-black p-1 rounded-bl-lg">
                      {item.imageMerit}
                    </p>
                  </div>
                  <h1 className="mt-4 text-xl md:text-4xl font-bold text-left">{item.title}</h1>
                  <h4 className="mt-2 text-md text-special">{item.description}</h4>
              </div>
          </div>
        </Link>
    );
};

export default ProjectCard;
