import { useRef, useState } from "react";
import { addTask, removeTask, updateTask } from "@/utils/redux/todolist";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "@/components/TodoItem";

//External variables
var nextIndex = 0;

function App() {
  const dispatch = useDispatch(); //REDUX:This allows Actions to the state
  //REDUX:"todoList" can be replaced It with whatever :) This allows consume(read) the state
  const todoListRedux = useSelector((state) => state.todoList);

  const inputRef = useRef();
  const [taskTitle, setTaskTitle] = useState("");

  //works!
  function handleAddTask() {
    inputRef.current.value = ""; //Using useRef Hook :)
    //Controls if "text input" fields is empty!
    const isTextInputEmpty = !taskTitle ? true : false;
    if (!isTextInputEmpty) {
      dispatch(addTask({ id: nextIndex++, title: taskTitle, isDone: false })); //REDUX:Add an object to the array
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
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1> TODO - APP (REDUX)</h1>
        <div className="flex flex-row gap-3 items-center text-2xl">
          <label>
            <strong>Title:</strong>
          </label>
          <input
            className="h-8 text-2xl"
            type="text"
            onChange={(e) => setTaskTitle(e.target.value)}
            size="15"
            maxLength="17"
            ref={inputRef}
          ></input>
          <button onClick={handleAddTask}>Add</button>
        </div>
      </div>

      <div>
        <ul>
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
    </div>
  );
}

export default App;
