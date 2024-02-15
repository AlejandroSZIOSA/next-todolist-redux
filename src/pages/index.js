import { useRef, useState, useEffect } from "react";
import TodoItem from "@/components/TodoItem";

import { addTask, removeTask, setTaskStatus } from "@/utils/redux/todolist";
import { useDispatch, useSelector } from "react-redux";
import { stringify } from "postcss";

//External variables
var nextIndex = 0;

function App() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const dispatch = useDispatch();
  const todoList2 = useSelector((state) => state.todoList);

  const [taskTitle, setTaskTitle] = useState("");

  function handleTest() {
    console.log(todoList2);
  }

  function addTaskTest() {
    inputRef.current.value = ""; //useRef Hook :)
    dispatch(addTask({ id: nextIndex++, title: taskTitle, done: false }));
  }

  //Callback function event with params
  function handleDoneUndoneData(id, done) {
    //console.log(id, done);
    const toDoItems = [...todoList]; //Make a copy of actual "todo list"
    const modifyItem = toDoItems.find((i) => i.id === id); //Find the "item" that will be modify
    //Conditional: Set new values
    if (done) {
      /* dispatch(setTaskStatus({ done: false })); */

      modifyItem.done = false;
    } else {
      /* dispatch(setTaskStatus({ done: true })); */
      modifyItem.done = true;
    }
    //Update the "todo list" state
    setTodoList(toDoItems);
  }

  //Callback function event with params
  function handleRemoveTodoItem(id) {
    /* This modify the current todo list by excluding the given 
    "id", then set the new "array object" state (update) */
    /* setTodoList(todoList.filter((a) => a.id !== id)); */

    dispatch(removeTask(id));
  }

  return (
    <>
      <div>
        <h1> TODO - APP</h1>
        <h2>Test</h2>
        <button onClick={addTaskTest}>Add Task</button>
        <button onClick={handleTest}>Test</button>

        <div>
          <h2>
            <strong>Title:</strong>
          </h2>
          <div>
            <input
              type="text"
              onChange={(e) => setTaskTitle(e.target.value)}
              size="15"
              maxLength="17"
              ref={inputRef}
            ></input>
          </div>
          <button onClick={addTaskTest}>Add</button>
        </div>

        <div>
          <ol>
            {todoList2.map((item) => (
              <li key={item.id}>
                <TodoItem
                  task={item}
                  onClickRemoveItemFn={handleRemoveTodoItem}
                  onClickDoneUndoneFn={handleDoneUndoneData}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
