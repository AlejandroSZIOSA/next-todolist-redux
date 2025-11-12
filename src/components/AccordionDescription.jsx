import { useState } from "react";

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
          className={`pl-2 font-bold content-center lg:pl-3 lg:pr-8 ${
            isDone ? "line-through lg:line-through" : "line-none lg:line-none"
          }`}
        >
          {title}
        </p>
        <span className="ml-1 font-bold">{isOpen ? "(-)" : "(+)"}</span>
      </div>
      {isOpen && (
        <div className="p-3 w-full bg-white">
          <p
            className={` ${
              isDone ? "line-through lg:line-through" : "line-none lg:line-none"
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
