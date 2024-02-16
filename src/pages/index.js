import { useRef, useState, useEffect } from "react";
import TodoItem from "@/components/TodoItem";

import { addTask, removeTask, updateTask } from "@/utils/redux/todolist";
import { useDispatch, useSelector } from "react-redux";

//External variables
var nextIndex = 0;

function App() {
  const inputRef = useRef();

  const dispatch = useDispatch();
  const todoList2 = useSelector((state) => state.todoList);

  const [taskTitle, setTaskTitle] = useState("");

  function handleTest() {
    console.log(todoList2);
  }

  //works!
  function addTaskTest() {
    inputRef.current.value = ""; //useRef Hook :)

    //A very nice if else statement :)
    const isTextInputEmpty = !taskTitle ? true : false;
    if (!isTextInputEmpty) {
      dispatch(addTask({ id: nextIndex++, title: taskTitle, isDone: false }));
      setTaskTitle("");
    }
  }

  //Callback function event with params
  function handleRemoveTask(id) {
    /* setTodoList(todoList.filter((a) => a.id !== id)); */
    dispatch(removeTask(id));
  }

  function handleDoneTask(task) {
    let updatedTask; //object changes
    if (task.isDone) {
      updatedTask = { ...task, isDone: false };
    } else {
      updatedTask = { ...task, isDone: true };
    }

    /* updatedTask = { ...task, isDone: true }; */

    dispatch(updateTask(updatedTask));
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
                  onClickRemoveItemFn={handleRemoveTask}
                  onClickDoneUndoneFn={handleDoneTask}
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
