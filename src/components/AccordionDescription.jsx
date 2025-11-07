import React, { useState } from "react";

export default function AccordionDescription({ title, description, isDone }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md shadow-md">
      <div
        className="flex justify-center gap-1 items-center p-3 bg-gray-100 cursor-pointer"
        onClick={toggleAccordion}
      >
        <p
          className={`pl-2 italic content-center md:pl-3 md:pr-8 ${
            isDone ? "line-through md:line-through" : "line-none md:line-none"
          }`}
        >
          {title}
        </p>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="p-3 w-full bg-white">
          <p
            className={`italic ${
              isDone ? "line-through md:line-through" : "line-none md:line-none"
            }`}
            style={{ wordWrap: "break-word" }}
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
