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

  function handleTest() {
    console.log(todoListRedux);
  }

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
    <>
      <div>
        <h1> TODO - APP</h1>
        <h2>Test</h2>
        <button onClick={handleAddTask}>Add Task</button>
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
          <button onClick={handleAddTask}>Add</button>
        </div>

        <div>
          <ol>
            {todoListRedux.map((item) => (
              <li key={item.id}>
                <TodoItem
                  task={item}
                  onClickRemoveItemFn={handleRemoveTask}
                  onClickUpdateItemFn={handleStatusTask}
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
