import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDos = ({ onUpdateToDo }) => {
  const toDos = useSelector((state) => state);

  return (
    <section className="max-w-xl mx-auto px-4 py-12">
      <h2 className="text-center text-2xl font-semibold mb-6">All ToDos</h2>

      {toDos.length === 0 && <p>No task for now.You can chill</p>}

      {toDos.length > 0 && (
        <ul className="space-y-2">
          {toDos.map((toDo) => (
            <ToDoItem
              key={toDo.id}
              toDoItem={toDo}
              onUpdateToDo={onUpdateToDo}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default ToDos;
