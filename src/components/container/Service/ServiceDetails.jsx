import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { categoryDetails } from "../../../Data"; // import the category details

const ServiceDetails = () => {
  const { category } = useParams(); // Access the category parameter from the route
  const categoryData = categoryDetails[category]; // Get the data for this category

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section" id="questions">
      {categoryData.map((item, index) => (
        <div key={index} className="grid md:grid-cols-2 gap-8 place-items-center">
          <div className={`border-Red rounded-lg ${index % 2 === 0 ? "sm:order-first" : "sm:order-last"}`}>
            <img src={item.image} alt="" className="p-4" />
          </div>
          <div className={`pl-5 ${index % 2 === 0 ? "sm:order-last" : "sm:order-first"}`}>
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
              {item.title}
            </div>
            <p className="text-sm leading-7 text-gray mb-5">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceDetails;
