import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDos = ({ onUpdateToDo }) => {
  const toDos = useSelector((state) => state);

  return (
    <section className="max-w-xl mx-auto px-4 py-12">
      {toDos.length === 0 && (
        <p className="px-2 py-4 bg-slate-200 text-center rounded-md">
          You have no pending tasks.
        </p>
      )}

      {toDos.length > 0 && (
        <Fragment>
          <h2 className="text-center text-2xl font-semibold mb-6">All Tasks</h2>
          <ul className="space-y-2">
            {toDos.map((toDo) => (
              <ToDoItem
                key={toDo.id}
                toDoItem={toDo}
                onUpdateToDo={onUpdateToDo}
              />
            ))}
          </ul>
        </Fragment>
      )}
    </section>
  );
};

export default ToDos;
