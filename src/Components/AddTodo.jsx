import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ todos, settodos }) => {
  const [task, settask] = useState("");

  const handleChange = (e) => {
    settask(e.target.value);
  };

  function handleAdd(e) {
    if ((e.type === "keydown" && e.key !== "Enter") || !task.trim()) {
      return;
    }
    settodos([...todos, { task, isCompleted: false, id: uuidv4() }]);
    settask(""); // Clear the input
  }

  return (
    <div className="addtodo sm:mx-10">
      <h2 className="font-bold text-base sm:text-xl mb-1">Add Todo</h2>
      <div className="flex w-full items-center gap-3">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          className="bg-white h-8 outline-none px-2 w-full rounded-lg"
          placeholder="Add Task"
          onKeyDown={handleAdd}
        />
        <button className="btn" onClick={handleAdd}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
