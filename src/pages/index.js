import { useRef, useState } from "react";
import TodoItem from "@/components/TodoItem";

//External variables
var nextIndex = 0;
var title;

function App() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  //Capture the text input
  function handlerTextInput(event) {
    title = event.target.value;
  }

  //Add Item to the todo list
  function addTodoItem() {
    inputRef.current.value = ""; //useRef Hook :)
    setTodoList([...todoList, { id: nextIndex++, title: title, done: false }]);
  }

  //Callback function event with params
  function handleDoneUndoneData(id, done) {
    //console.log(id, done);
    const toDoItems = [...todoList]; //Make a copy of actual "todo list"
    const modifyItem = toDoItems.find((i) => i.id === id); //Find the "item" that will be modify
    //Conditional: Set new values
    if (done) {
      modifyItem.done = false;
    } else {
      modifyItem.done = true;
    }
    //Update the "todo list" state
    setTodoList(toDoItems);
  }

  //Callback function event with params
  function handleRemoveTodoItem(id) {
    /* This modify the current todo list by excluding the given 
    "id", then set the new "array object" state (update) */
    setTodoList(todoList.filter((a) => a.id !== id));
  }

  return (
    <>
      <div>
        <h1> TODO - APP</h1>
        <div>
          <h2>
            <strong>Title:</strong>
          </h2>
          <div>
            <input
              type="text"
              onChange={handlerTextInput}
              size="15"
              maxLength="17"
              ref={inputRef}
            ></input>
          </div>
          <button onClick={addTodoItem}>Add</button>
        </div>

        <div>
          <ul>
            {todoList.map((item) => (
              <li key={item.id}>
                <TodoItem
                  itemObj={item} /* Passing object as prop :)*/
                  onClickDoneUndoneFn={
                    handleDoneUndoneData
                  } /* Callback event Functions with params */
                  onClickRemoveItemFn={handleRemoveTodoItem}
                />
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
