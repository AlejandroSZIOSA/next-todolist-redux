import { useRef, useState } from "react";
import { addTask, removeTask, updateTask } from "@/utils/redux/todolist";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "@/components/TodoItem";

function App() {
  const dispatch = useDispatch(); //REDUX:This allows Actions to the state
  //REDUX:"todoList" can be replaced It with whatever :) This allows consume(read) the state
  const todoListRedux = useSelector((state) => state.todoList);

  const inputRef = useRef();
  const [taskTitle, setTaskTitle] = useState("");

  //Generate random numeric ID between 1-1000
  function generateRandomNumericId() {
    return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  }

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

  //Callback function event with params
  function handleStatusTask(task) {
    let updatedTask; //Object changes using let
    if (task.isDone) {
      updatedTask = { ...task, isDone: false };
    } else {
      updatedTask = { ...task, isDone: true };
    }
    //REDUX:Updating an object by sending the "updated object" to the reducer and then "adding to the array"
    dispatch(updateTask(updatedTask));
  }

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-center"> TODO - APP </h1>
      <div className="flex flex-col items-center justify-center gap-5 m-5 md:flex-row">
        <div className="flex flex-row gap-3 items-center text-2xl">
          <h2>
            <strong>Title:</strong>
          </h2>
          <input
            className="h-9 border-2 border-solid border-black rounded "
            type="text"
            onChange={(e) => setTaskTitle(e.target.value)}
            size="15"
            maxLength="28"
            ref={inputRef}
          ></input>
          <button
            className="bg-green-300 px-2 border-2 border-solid border-black rounded hover:bg-green-500"
            onClick={handleAddTask}
          >
            add
          </button>
        </div>
      </div>

      <ul className=" w-[410px] p-[revert] md:min-w-fit md:mx-auto">
        {todoListRedux.map((item) => (
          <li key={item.id}>
            <TodoItem
              task={item}
              onClickRemoveItemFn={handleRemoveTask}
              onClickUpdateItemFn={handleStatusTask}
            />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
