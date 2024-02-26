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
    <div class="flex flex-row w-[600px] py-2 bg-[#E4E4E4] border-2 border-solid border-black rounded item-center justify-between">
      <div class="text-2xl pl-[10px] italic">{title}</div>
      <div class="flex flex-row items-center">
        <div class="p-2">
          <button
            onClick={() => props.onClickUpdateItemFn(task)} //Using arrow functions to pass params
            style={{
              backgroundColor: btnDoneColor,
            }}
          >
            {isDone ? "Done" : "unDone"}
          </button>
        </div>
        <div class="p-2">
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
