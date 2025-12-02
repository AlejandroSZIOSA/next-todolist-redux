"use client";
import { useState, useEffect } from "react";
import { removeTodo, updateTodo, resetTodoList } from "@/utils/redux/todolist";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "@/components/TodoItem";
import { loadSavedTodos } from "@/utils/loadTodos"; //localstorage fn

import DialogFormTodo from "@/components/DialogFormTodo";
import StoragePanel from "@/components/StoragePanel";

import EmptyListScreen from "@/components/EmptyListScreen";
function App() {
  const dispatch = useDispatch(); //REDUX:This allows Actions to the state
  //REDUX:"todoList" can be replaced It with whatever :) This allows consume(read) the state
  const todoListRedux = useSelector((state) => state.todoList);

  const [isDialogFormOpen, setIsDialogFormOpen] = useState(false);

  const [isBtnLocked, setIsBtnLocked] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false); // Track hydration status

  // Load todos from localStorage only on the client side
  useEffect(() => {
    setIsHydrated(true); // Mark as hydrated Fix hydration problem when try lo load data from localstorage
    loadSavedTodos();
  }, []);

  //Callback function event with params
  function handleRemoveTodo(id) {
    dispatch(removeTodo(id)); //REDUX:Remove an object from the array using the "id"
  }

  //Callback function event with params, Fix problem!
  function handleUpdateTodo(todo) {
    // Toggle the isDone property directly
    const updatedTodo = { ...todo, isDone: !todo.isDone };
    // REDUX: Update the todo in the state
    dispatch(updateTodo(updatedTodo));
  }

  function handleClearTodos() {
    localStorage.removeItem("todos");
    dispatch(resetTodoList()); // Reset the Redux state
    setIsBtnLocked(!isBtnLocked);
  }

  function toggleLockBtn() {
    setIsBtnLocked(!isBtnLocked);
  }

  //Dialog Form functions
  const handleOpenFormDialog = () => {
    setIsDialogFormOpen(true);
  };

  const handleCancelFormDialog = () => {
    setIsDialogFormOpen(false);
  };

  const renderTodoList = todoListRedux.map((item) => (
    <ul className="p-[revert]">
      <li key={item.id} className="mb-2 lg:mb-3">
        <TodoItem
          todo={item}
          onClickRemoveItemFn={handleRemoveTodo}
          onClickUpdateItemFn={handleUpdateTodo}
        />
      </li>
    </ul>
  ));

  return (
    <main className="flex flex-col mx-auto">
      <h1 className="pt-2 text-center"> TODO - APP [JS] </h1>
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
        <div className="py-4 lg:py-5">
          <button
            className=" py-1 px-4 bg-black text-white border-2 border-solid border-black rounded"
            onClick={handleOpenFormDialog}
          >
            Add
          </button>
          {isDialogFormOpen && (
            <DialogFormTodo onCancelFn={handleCancelFormDialog} />
          )}
        </div>
      </div>

      {/* fix hydrated problem in client side */}
      <div className="w-[100vw] h-[78vh] mr-2 lg:w-[21vw] lg:h-[78vh] overflow-y-auto border border-gray-300 rounded lg:min-h-24">
        {isHydrated & (todoListRedux.length != 0) ? (
          renderTodoList
        ) : (
          <EmptyListScreen />
        )}
      </div>

      <StoragePanel
        isBtnLocked={isBtnLocked}
        handleClearTodos={handleClearTodos}
        toggleLockBtn={toggleLockBtn}
      />
    </main>
  );
}

export default App;
