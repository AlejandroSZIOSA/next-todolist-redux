import React from "react";

//External variabels
let btnDoneColor;

export default function TodoItem(props) {
  //Destructuring Item object :)
  const title = props.task.title;
  const id = props.task.id;
  const done = props.task.done;

  //Change bgColor "button Done UnDone"
  if (done) {
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
            onClick={() => props.onClickDoneUndoneFn(id, done)} //Using arrow functions to pass params
            style={{
              backgroundColor: btnDoneColor,
            }}
          >
            {done ? "Done" : "unDone"}
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
