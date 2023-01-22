import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToDo from "./components/AddToDo/AddToDo";
import Header from "./components/Header/Header";
import ToDos from "./components/ToDos/ToDos";
import UpdateToDo from "./components/UpdateToDo/UpdateToDo";
import { toDoActions } from "./store/to-dos-slice";

function App() {
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isToDoUpdating, setIsToDoUpdating] = useState(false);
  const [toBeUpdatedToDo, setToBeUpdatedToDo] = useState(null);

  const updateToDoHandler = (toDo) => {
    setToBeUpdatedToDo(toDo);
    setIsToDoUpdating(true);
  };

  useEffect(() => {
    const storedToDosStr = localStorage.getItem("to-do");
    const storedToDosArr = JSON.parse(storedToDosStr);

    dispatch(toDoActions.replaceToDos(storedToDosArr));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("to-do", JSON.stringify(toDos));
  }, [toDos]);

  // const [toDos, setToDos] = useState([]);
  // console.log(toDos);

  // useEffect(() => {
  //   const storedToDosStr = localStorage.getItem("to-do");
  //   const sortedToDosArr = JSON.parse(storedToDosStr);
  //   setToDos(sortedToDosArr);
  // }, []);

  // const addNewToDoHandler = (newTodo) => {
  //   setToDos((preToDos) => {
  //     const updatedToDos = [newTodo, ...preToDos];
  //     return updatedToDos;
  //   });

  //   const hasToDo = localStorage.getItem("to-do");

  //   if (!hasToDo) {
  //     const toDo = [];
  // toDo.push(newTodo);
  //     localStorage.setItem("to-do", JSON.stringify(toDo));
  //   }

  //   if (hasToDo) {
  //     const existingToDosStr = localStorage.getItem("to-do");
  //     const existingToDosArr = JSON.parse(existingToDosStr);
  //     console.log(existingToDosArr);
  //     const updatedTodos = [newTodo, ...existingToDosArr];
  //     const updatedToDosStr = JSON.stringify(updatedTodos);
  //     localStorage.setItem("to-do", updatedToDosStr);
  //   }
  // };

  return (
    <main>
      <Header />
      {isToDoUpdating && (
        <UpdateToDo isUpdating={setIsToDoUpdating} toDo={toBeUpdatedToDo} />
      )}
      {!isToDoUpdating && <AddToDo />}
      <ToDos onUpdateToDo={updateToDoHandler} />
    </main>
  );
}

export default App;
