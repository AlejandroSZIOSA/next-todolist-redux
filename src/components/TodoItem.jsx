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
            onClick={handleOpenConfirmDialog} //Using arrow functions to pass params :)
            style={{ backgroundColor: "red", padding: "5px" }}
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
