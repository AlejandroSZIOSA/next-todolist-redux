import React from "react";
//External variabels
let btnDoneColor;

const styles = {
  CONTAINER: {
    backgroundColor: "#E4E4E4",
    display: "flex",
    flexDirection: "row",
    width: "600px",
    border: "2px solid black",
    borderRadius: "5px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  BUTTONS_CONTAINER: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  TITLE_STYLE: {
    fontSize: "x-large",
    paddingLeft: "10px",
    fontFamily: "cursive",
  },
};

export default function TodoItem(props) {
  //Destructuring Item object :)
  const title = props.itemObj.title;
  const id = props.itemObj.id;
  const done = props.itemObj.done;

  //Change bgColor "button Done UnDone"
  if (done) {
    btnDoneColor = "green";
  } else {
    btnDoneColor = "orange";
  }

  return (
    <div style={styles.CONTAINER}>
      <div style={styles.TITLE_STYLE}>{title}</div>
      <div style={styles.BUTTONS_CONTAINER}>
        <div style={{ padding: "6px" }}>
          <button
            onClick={() => props.onClickDoneUndoneFn(id, done)} //Using arrow functions to pass params
            style={{
              backgroundColor: btnDoneColor,
            }}
          >
            {done ? "Done" : "unDone"}
          </button>
        </div>
        <div style={{ padding: "6px" }}>
          <button
            onClick={() => props.onClickRemoveItemFn(id)} //Using arrow functions to pass params :)
            style={{ backgroundColor: "red" }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
