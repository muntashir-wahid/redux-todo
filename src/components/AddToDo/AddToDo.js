import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toDoActions } from "./../../store/to-dos-slice";

const AddToDo = () => {
  const dispatch = useDispatch();
  const [formError, setFormError] = useState("");

  const createUinqueId = (task) => `${task.slice(1, 3)}${Date.now()}`;

  // ---------------------------------  //
  // New To Do submit handler function
  // ---------------------------------  //
  const toDoSubmitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    setFormError("");

    // New Task
    const newTodo = {
      id: createUinqueId(form.task.value),
      task: form.task.value,
      description: form.description.value,
    };

    // Guard caluse for empty form submission
    if (!newTodo.task || !newTodo.description) {
      setFormError("Plese add a task and some description");
      return;
    }

    // Dispatch new todo to the reducer
    dispatch(toDoActions.addToDo(newTodo));
    form.reset();
  };

  return (
    <section className="max-w-lg mx-auto px-4 pt-12">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Add a new task
      </h2>
      <form onSubmit={toDoSubmitHandler} className="space-y-4">
        <div className="w-full md:w-2/3 mx-auto">
          <label className="mb-1">Task Name:</label>
          <input
            name="task"
            type="text"
            placeholder="add a new task"
            className="w-full border-2 border-black rounded-md p-2"
          />
        </div>
        <div className="w-full md:w-2/3 mx-auto">
          <label className="mb-1">Task Description:</label>
          <textarea
            type="text"
            name="description"
            placeholder="some description"
            className="w-full border-2 border-black rounded-md p-2"
          />
        </div>
        <div className="w-full md:w-2/3 mx-auto">
          <input
            type="submit"
            value="Add Task"
            className="bg-slate-400 px-6 py-2 rounded-md cursor-pointer"
          />
        </div>
      </form>

      {formError && (
        <p className="px-2 mt-2 text-red-500 py-4 bg-slate-100 text-center rounded-md">
          {formError}
        </p>
      )}
    </section>
  );
};

export default AddToDo;
