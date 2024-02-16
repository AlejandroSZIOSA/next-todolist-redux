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
    btnDoneColor = "green";
  } else {
    btnDoneColor = "orange";
  }

  return (
    <div>
      <div>{title}</div>
      <div>
        <div>
          <button
            onClick={() => props.onClickUpdateItemFn(task)} //Using arrow functions to pass params
            style={{
              backgroundColor: btnDoneColor,
            }}
          >
            {isDone ? "Done" : "unDone"}
          </button>
        </div>
        <div>
          <button
            onClick={() => props.onClickRemoveItemFn(id)} //Using arrow functions to pass params :)
            style={{ backgroundColor: "red" }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
