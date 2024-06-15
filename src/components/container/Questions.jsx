import React from "react";
import { accordions } from "../../Data";
import Accordion from "./Accordion";
const Questions = () => {
  return (
    <div className="section" id="questions">

      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Red">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Questions;
