import {useState, useEffect} from "react";
import TodoItem from "./TodoItem";


function TodoContainer() {
   const [todoItems, setTodoItem] = useState([]);
  let todoArray = JSON.parse(localStorage.getItem("todoItems")) || [];

  useEffect(() => {
    setTodoItem(todoArray);
  }, []);

  return (
    <div>
      
      {todoArray.length ? (
        <TodoItem todoItems={todoItems} />
      ) : (
        <h1 className="noItem">NO TASK TO DO</h1>
      )}
    </div>
  );
}

export default TodoContainer;
