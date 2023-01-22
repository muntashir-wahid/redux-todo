import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToDo from "./components/AddToDo/AddToDo";
import Header from "./components/Header/Header";
import ToDos from "./components/ToDos/ToDos";
import UpdateToDo from "./components/UpdateToDo/UpdateToDo";
import { toDoActions } from "./store/to-dos-slice";

function App() {
  // Hook calls
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isToDoUpdating, setIsToDoUpdating] = useState(false);
  const [toBeUpdatedToDo, setToBeUpdatedToDo] = useState(null);

  const updateToDoHandler = (toDo) => {
    setToBeUpdatedToDo(toDo);
    setIsToDoUpdating(true);
  };

  // ------------------------------------------------ //
  // Fetch All ToDos from local storage after reload
  // ------------------------------------------------ //
  useEffect(() => {
    const storedToDosStr = localStorage.getItem("to-do");
    const storedToDosArr = JSON.parse(storedToDosStr);

    dispatch(toDoActions.replaceToDos(storedToDosArr));
  }, [dispatch]);

  // ---------------------------------------- //
  // Storing update ToDos into local storage
  // --------------------------------------- //
  useEffect(() => {
    localStorage.setItem("to-do", JSON.stringify(toDos));
  }, [toDos]);

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
