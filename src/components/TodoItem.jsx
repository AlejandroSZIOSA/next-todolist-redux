import React from "react";
import AccordionDescription from "./AccordionDescription";

//External variabels
let btnDoneColor;

export default function TodoItem(props) {
  //Destructuring Item object :)
  const todo = props.todo;
  const title = props.todo.title;
  const description = props.todo.description;
  const deadline = props.todo.deadline;

  const id = props.todo.id;
  const isDone = props.todo.isDone;

  //Change bgColor "button Done UnDone"
  if (isDone) {
    btnDoneColor = "rgb(134 239 172)"; //Tailwind color "green-300"
  } else {
    btnDoneColor = "orange";
  }

  return (
    <div className="flex flex-col bg-white border-2 border-solid border-black rounded item-center justify-between md:py-1">
      {/*       using dinamymic className Tailwind
       */}
      <AccordionDescription
        title={title}
        description={description}
        isDone={isDone}
      />
      <div className="flex flex-row items-center">
        <div className="flex flex-row md:pr-2">
          <p>🎈 {deadline}</p>
          <button
            onClick={() => props.onClickUpdateItemFn(todo)} //Using arrow functions to pass params
            style={{
              backgroundColor: btnDoneColor,
              padding: "5px",
            }}
          >
            {isDone ? "Done" : "unDone"}
          </button>
        </div>
        <div className="p-2">
          <button
            onClick={() => props.onClickRemoveItemFn(id)} //Using arrow functions to pass params :)
            style={{ backgroundColor: "red", padding: "5px" }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
