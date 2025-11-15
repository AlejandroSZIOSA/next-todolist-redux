import { useState } from "react";

export default function AccordionDescription({ title, description, isDone }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-black shadow-md">
      <div
        className="flex justify-center gap-2 lg:gap-1 items-center py-1 bg-black cursor-pointer"
        onClick={toggleAccordion}
      >
        <p
          className={`ml-2 font-bold content-center lg:mr-1 ${
            isDone
              ? " text-green-400 line-through decoration-black decoration-1"
              : " text-orange-400 line-none"
          }`}
        >
          {title}
        </p>
        {isDone ? (
          <p className="text-green-400 font-bold">{isOpen ? "(-)" : "(+)"}</p>
        ) : (
          <p className="text-orange-400 font-bold">{isOpen ? "(-)" : "(+)"}</p>
        )}
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
