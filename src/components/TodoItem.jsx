import { useState } from "react";
import AccordionDescription from "./AccordionDescription";
import DialogConfirm from "./DialogConfirm";

let btnDoneColor;

export default function TodoItem(props) {
  const todo = props.todo;
  const { id, title, description, isDone, deadline } = props.todo;

  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  //Change bgColor Button Done UnDone
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
  const onAcceptConfirmDialog = () => {
    props.onClickRemoveItemFn(id);
  };

  return (
    <div className="flex flex-col bg-white border-2 border-solid border-black rounded item-center justify-between">
      <AccordionDescription
        title={title}
        description={description}
        isDone={isDone}
      />
      <div className="flex flex-col items-center bg-[#ffe4c4]">
        <p
          className={` pt-1 ${
            isDone ? "line-through lg:line-through" : "line-none lg:line-none"
          }`}
          style={{ wordWrap: "break-word" }}
        >
          🎈 {deadline}
        </p>
        <div className="flex flex-row w-full justify-between">
          <button
            onClick={() => props.onClickUpdateItemFn(todo)} //Using arrow functions passing params
            className={`w-20 p-2 rounded-md text-black ${
              isDone ? "bg-green-500" : "bg-orange-400"
            } mb-2 ml-4`}
          >
            {isDone ? "Done" : "unDone"}
          </button>
          <button
            onClick={handleOpenConfirmDialog}
            className="w-20 p-2 rounded-md bg-red-600 text-white mb-2 mr-4"
          >
            Remove
          </button>
          {isConfirmDialogOpen && (
            <DialogConfirm
              onAcceptFn={onAcceptConfirmDialog}
              onCancelFn={handleCancelConfirmDialog}
            />
          )}
        </div>
      </div>
    </div>
  );
}
