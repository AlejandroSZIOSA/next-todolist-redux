import { useState } from "react";

export default function AccordionDescription({ title, description, isDone }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-black shadow-md">
      <div
        className="flex justify-center gap-1 items-center py-1 bg-black text-[#00f0f0] cursor-pointer"
        onClick={toggleAccordion}
      >
        <p
          className={`ml-2 font-bold content-center lg:mr-1 ${
            isDone ? "line-through decoration-black decoration-1" : "line-none"
          }`}
        >
          {title}
        </p>
        <span className="font-bold">{isOpen ? "(-)" : "(+)"}</span>
      </div>
      {isOpen && (
        <div className="p-3 w-full text-center bg-gray-200">
          <p
            className={` ${isDone ? "line-through" : "line-none"}`}
            style={{ wordWrap: "break-word" }}
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
