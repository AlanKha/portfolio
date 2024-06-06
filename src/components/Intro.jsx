import { RoughNotation } from "react-rough-notation";

export default function Intro() {
  return (
    <div
      id="Intro"
      className=" px-[10%] flex justify-center text-center flex-col items-center h-[95vh]"
    >
      <h1 className="text-6xl font-bold pb-3">
        Hi, my name is{" "}
        <span className="text-blue-300">
          <RoughNotation
            type="underline"
            show={true}
            animationDelay={500}
            color={"white"}
            strokeWidth={3}
            multiline={true}
          >
            Alan Khalili
          </RoughNotation>
        </span>
        👋
      </h1>
      <h2 className="text-xl">
        It's my third year at The University of Tennessee studying Computer
        Science, and{" "}
        <RoughNotation
          type="highlight"
          iterations={1}
          show={true}
          color={"#bf9002"}
          animationDelay={2000}
          animationDuration={1000}
          multiline={true}
        >
          I love coding, coffee, and cooking!
        </RoughNotation>{" "}
        Currently looking for Software Engineering Internship Opportunities!
        Feel free to{" "}
        <RoughNotation
          type="circle"
          show={true}
          color="white"
          animationDelay={4000}
          multiline={true}
        >
          <a href="#Contact">reach out</a>
        </RoughNotation>
      </h2>
    </div>
  );
}
