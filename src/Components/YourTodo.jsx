import React, { useState } from "react";

const YourTodo = ({ todos, settodos }) => {
  const [showFinished, setshowFinished] = useState(false);
  const handleDone = (index) => {
    let newArr = [...todos];
    newArr[index].isCompleted = !newArr[index].isCompleted;
    settodos(newArr);
  };

  const handleEdit = (index) => {
    let newArr = [...todos];
    let editedTodo = prompt("Enter Task", newArr[index].task);
    if (editedTodo !== null && editedTodo.trim() !== "") {
      newArr[index].task = editedTodo;
      settodos(newArr);
    }
  };

  const handleDelete = (index) => {
    if (confirm(`Are you sure you want to delete task "${todos[index].task}"?`)) {
      let newArr = [...todos];
      newArr.splice(index, 1);
      settodos(newArr); // Update state
      localStorage.setItem("todos", JSON.stringify(newArr)); // Update localStorage
    }
  };

  const handleFinished = () => {
    setshowFinished(!showFinished);
  }

  return (
    <div className="yourtodo sm:mx-10">
      <div className="flex gap-2">
      <input onChange={handleFinished} type="checkbox" name="" id="" placeholder="" />
      <span>Show Finished</span>
      </div>
      <h2 className="font-bold text-base sm:text-xl mb-1">Your Todo</h2>
      {todos.length === 0 && <div className="mx-3">No Tasks to Display</div>}
      {todos.map((todo, index) => {
        return ( (showFinished || !todo.isCompleted) &&
          <div key={todo.id} className="flex w-full items-center gap-3 mb-1">
            <div className="w-[85%] flex items-center rounded-lg min-h-6">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleDone(index)}
              />
              <span
                className="outline-none px-2 w-full self-auto mb-0.5 break-words"
                style={todo.isCompleted ? { textDecoration: "line-through" } : {}}
              >
                {todo.task}
              </span>
            </div>
            <button className="btn" onClick={() => handleEdit(index)}>
              <img src="edit.svg" alt="Edit" />
            </button>
            <button className="btn" onClick={() => handleDelete(index)}>
              <img src="trash.svg" alt="Delete" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default YourTodo;
