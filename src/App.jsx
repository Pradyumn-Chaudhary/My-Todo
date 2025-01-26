import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import YourTodo from "./Components/YourTodo";
import AddTodo from "./Components/AddTodo";
import  CodeBtn from "./Components/CodeBtn";

function App() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const savedTodos = JSON.parse(todoString);
      settodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    // Save todos to localStorage whenever the state changes
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <>
      <Navbar />
      <div className="sm:m-10 mt-20 sm:mt-20 bg-[#F3E8FF] rounded-xl p-4 flex flex-col gap-4 min-h-[80vh] relative">
        <h1 className="font-bold text-base sm:text-2xl md:text-3xl text-center">My Todo - Manage your tasks at one place</h1>
        <AddTodo todos={todos} settodos={settodos} />
        <YourTodo todos={todos} settodos={settodos} />
        <CodeBtn/>
      </div>
    </>
  );
}

export default App;
