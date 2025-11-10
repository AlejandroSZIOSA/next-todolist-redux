import { useState } from "react";
import AccordionDescription from "./AccordionDescription";
import DialogConfirm from "./DialogConfirm";

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

  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  //Change bgColor "button Done UnDone"
  if (isDone) {
    btnDoneColor = "rgb(134 239 172)"; //Tailwind color "green-300"
  } else {
    btnDoneColor = "orange";
  }

  //Dialog Confirm functions
  const handleOpenConfirmDialog = () => {
    setIsConfirmDialogOpen(true);
  };

  const handleCancelConfirmDialog = () => {
    setIsConfirmDialogOpen(false);
  };

  const onAcceptConfirm = () => {
    props.onClickRemoveItemFn(id);
  };

  return (
    <div className="flex flex-col bg-white border-2 border-solid border-black rounded item-center justify-between md:py-1">
      {/*       using dynamic className Tailwind
       */}
      <AccordionDescription
        title={title}
        description={description}
        isDone={isDone}
      />
      <div className="flex flex-col items-center">
        <p
          className={` py-2 ${
            isDone ? "line-through md:line-through" : "line-none md:line-none"
          }`}
          style={{ wordWrap: "break-word" }}
        >
          🎈 {deadline}
        </p>
        <div className="flex flex-row w-full justify-between">
          <button
            onClick={() => props.onClickUpdateItemFn(todo)} //Using arrow functions to pass params
            style={{
              backgroundColor: btnDoneColor,
              padding: "0.4rem",
              margin: "0 0.5rem 0.5rem 0.5rem",
            }}
          >
            {isDone ? "Done" : "unDone"}
          </button>
          <button
            onClick={handleOpenConfirmDialog} //Using arrow functions to pass params :)
            style={{
              backgroundColor: "red",
              padding: "0.4rem",
              margin: "0 0.5rem 0.5rem 0.5rem",
            }}
          >
            Remove
          </button>
          {isConfirmDialogOpen && (
            <DialogConfirm
              onAcceptFn={onAcceptConfirm}
              onCancelFn={handleCancelConfirmDialog}
            />
          )}
        </div>
      </div>
    </div>
  );
}
