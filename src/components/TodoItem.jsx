import React from "react";

//External variabels
let btnDoneColor;

export default function TodoItem(props) {
  //Destructuring Item object :)
  const task = props.task;
  const title = props.task.title;
  const id = props.task.id;
  const isDone = props.task.isDone;

  //Change bgColor "button Done UnDone"
  if (isDone) {
    btnDoneColor = "rgb(134 239 172)"; //Tailwind color "green-300"
  } else {
    btnDoneColor = "orange";
  }

  return (
    <div className="flex flex-row bg-white border-2 border-solid border-black rounded item-center justify-between md:py-1">
      {/*       using dinamymic className Tailwind
       */}
      <p
        className={`pl-2 italic content-center md:pl-3 md:pr-8 ${
          isDone ? "line-through md:line-through" : "line-none md:line-none"
        }`}
      >
        {title}
      </p>
      <div className="flex flex-row items-center">
        <div className="md:pr-2">
          <button
            onClick={() => props.onClickUpdateItemFn(task)} //Using arrow functions to pass params
            style={{
              backgroundColor: btnDoneColor,
              padding: "5px",
            }}
          >
            <p>{isDone ? "Done" : "unDone"}</p>
          </button>
        </div>
        <div className="p-2">
          <button
            onClick={() => props.onClickRemoveItemFn(id)} //Using arrow functions to pass params :)
            style={{ backgroundColor: "red", padding: "5px" }}
          >
            <p>Remove</p>
          </button>
        </div>
      </div>
    </div>
  );
}
