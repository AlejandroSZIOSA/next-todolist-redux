import { useRef, useState, useEffect } from "react";
import {
  addTask,
  removeTask,
  updateTask,
  resetList,
} from "@/utils/redux/todolist";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "@/components/TodoItem";
import { loadSavedTodos } from "@/utils/loadTodos"; //localstorage fn
import Image from "next/image";

//Generate random numeric ID between 1-1000
function generateRandomNumericId() {
  return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
}

function App() {
  const dispatch = useDispatch(); //REDUX:This allows Actions to the state
  //REDUX:"todoList" can be replaced It with whatever :) This allows consume(read) the state
  const todoListRedux = useSelector((state) => state.todoList);

  const inputRef = useRef();
  const [isBtnLocked, setIsBtnLocked] = useState(true);

  const [taskTitle, setTaskTitle] = useState("");
  const [isHydrated, setIsHydrated] = useState(false); // Track hydration status

  // Load todos from localStorage only on the client side
  useEffect(() => {
    setIsHydrated(true); // Mark as hydrated Fix hydration problem when try lo load data from localstorage
    loadSavedTodos();
  }, []);

  //works!
  function handleAddTask() {
    inputRef.current.value = ""; //Using useRef Hook :)
    //Controls if "text input" fields is empty!
    const isTextInputEmpty = !taskTitle ? true : false;
    if (!isTextInputEmpty) {
      dispatch(
        addTask({
          id: generateRandomNumericId().toString(),
          title: taskTitle,
          isDone: false,
        })
      ); //REDUX:Add an object to the array
      setTaskTitle("");
    }
  }

  //Callback function event with params
  function handleRemoveTask(id) {
    dispatch(removeTask(id)); //REDUX:Remove an object from the array using the "id"
  }

  //Callback function event with params, Fix problem!
  function handleStatusTask(task) {
    // Toggle the isDone property directly
    const updatedTask = { ...task, isDone: !task.isDone };
    // REDUX: Update the task in the state
    dispatch(updateTask(updatedTask));
  }

  function handleClearTodos() {
    localStorage.removeItem("todos");
    dispatch(resetList()); // Reset the Redux state
    setIsBtnLocked(!isBtnLocked);
  }

  function toggleLockBtn() {
    setIsBtnLocked(!isBtnLocked);
  }

  return (
    <>
      <h1 className="p-3 text-center"> TODO - APP </h1>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <div className="flex flex-row gap-2 pt-2 pb-5 items-center md:pt-3 md:pb-6">
          <h2>
            <strong>Title:</strong>
          </h2>
          <input
            className="h-9 w-48 border-2 border-solid border-black rounded md:w-44"
            type="text"
            onChange={(e) => setTaskTitle(e.target.value)}
            maxLength="20"
            ref={inputRef}
          ></input>
          <button
            className="bg-black text-white p-1 border-2 border-solid border-black rounded"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>
      </div>
      {/*         Scroll view Container :)
       */}
      <div className="w-[350px] h-[460px] md:w-[450px] md:h-[670px] overflow-y-auto border border-gray-300 rounded md:min-h-24">
        <ul className="p-[revert]">
          {/* fix hydrated problem in client side */}
          {isHydrated &&
            todoListRedux.map((item) => (
              <li key={item.id} className="mb-2 md:mb-3">
                <TodoItem
                  task={item}
                  onClickRemoveItemFn={handleRemoveTask}
                  onClickUpdateItemFn={handleStatusTask}
                />
              </li>
            ))}
        </ul>
      </div>
      <div className="flex justify-between items-center my-6 md:mt-8">
        <div className="ml-8">
          <button
            className={`${
              isBtnLocked ? "opacity-55" : "opacity-100 hover:scale-105"
            } p-2 bg-black text-red-500 rounded-md`}
            disabled={isBtnLocked}
            onClick={handleClearTodos}
          >
            <span>Clear All</span>
          </button>
        </div>
        <div className="flex items-center mr-8">
          <div>
            <span>Status</span>
          </div>
          <div>
            <Image
              src={isBtnLocked ? "/lock.svg" : "/unlock.svg"}
              width={45}
              height={45}
              alt="lock icon"
              onClick={toggleLockBtn}
              className="ml-2 cursor-pointer"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
