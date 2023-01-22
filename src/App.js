import { useEffect } from "react";
import { useState } from "react";
import AddToDo from "./components/AddToDo/AddToDo";
import Header from "./components/Header/Header";
import ToDos from "./components/ToDos/ToDos";

function App() {
  const [toDos, setToDos] = useState([]);
  console.log(toDos);

  useEffect(() => {
    const storedToDosStr = localStorage.getItem("to-do");
    const sortedToDosArr = JSON.parse(storedToDosStr);
    setToDos(sortedToDosArr);
  }, []);

  const addNewToDoHandler = (newTodo) => {
    setToDos((preToDos) => {
      const updatedToDos = [newTodo, ...preToDos];
      return updatedToDos;
    });

    const hasToDo = localStorage.getItem("to-do");

    if (!hasToDo) {
      const toDo = [];
      toDo.push(newTodo);
      localStorage.setItem("to-do", JSON.stringify(toDo));
    }

    if (hasToDo) {
      const existingToDosStr = localStorage.getItem("to-do");
      const existingToDosArr = JSON.parse(existingToDosStr);
      console.log(existingToDosArr);
      const updatedTodos = [newTodo, ...existingToDosArr];
      const updatedToDosStr = JSON.stringify(updatedTodos);
      localStorage.setItem("to-do", updatedToDosStr);
    }
  };

  return (
    <main>
      <Header />
      <AddToDo onAddNewToDo={addNewToDoHandler} />
      <ToDos toDos={toDos} />
    </main>
  );
}

export default App;
