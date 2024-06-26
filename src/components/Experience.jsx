import { AiFillGithub } from "react-icons/ai";
import ScrollAnimation from './ScrollAnimation';

export default function Experience() {
  return (
    <div
      id="Experience"
      className="bg-none bg-white text-black px-[10%] py-[5%]"
    >
      <div className="pt-[5vh] px-3 text-2xl flex justify-between border-b pb-2 border-black">
        <h1 className="">Poop</h1>
        <h2 className="justify-end"></h2>
      </div>
      <ScrollAnimation>
        <div className="text-2xl pt-4 sm:pt-0 sm:h-40 flex flex-col sm:flex-row items-center border-b pb-2 border-black">
          <div className="w-full sm:w-[10%] mb-4 sm:mb-0">
            <img
              src="https://missionofhope.org/wp-content/uploads/2023/04/cropped-MOH-Logo-e1706121435496.png"
              alt="mission of hope logo"
              className="object-scale-down w-full max-h-32 sm:max-w-none"
            />
          </div>
          <div className="w-full sm:w-[80%] px-2 flex flex-col gap-1 justify-end">
            <a
              href="https://hack4impact.org/"
              className="text-xl font-semibold"
            >
              Hack4Impact
            </a>
            <h3 className="text-lg">
              Work in small teams to develop a full-stack web application for
              local non-profit organizations.
            </h3>
          </div>
          <div className="invisible sm:visible w-full sm:w-[10%] ml-auto flex items-center justify-end">
            <a
              href="https://github.com/hack4impact-utk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="text-3xl" size={50} />
            </a>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
