import React from "react";

const AddToDo = ({ onAddNewToDo }) => {
  const createUinqueId = (task) => `${task.slice(1, 3)}${Date.now()}`;
  const toDoSubmitHandler = (event) => {
    event.preventDefault();
    const form = event.target;

    const newTodo = {
      id: createUinqueId(form.task.value),
      task: form.task.value,
      description: form.description.value,
    };

    if (!newTodo.task || !newTodo.description) {
      console.log("Plese add a task and some description");
      return;
    }

    onAddNewToDo(newTodo);
    form.reset();
  };

  return (
    <section className="max-w-lg mx-auto px-4 pt-12">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Add a new to do
      </h2>
      <form onSubmit={toDoSubmitHandler} className="space-y-4">
        <div className="w-full md:w-2/3 mx-auto">
          <label className="mb-1">Task Name:</label>
          <input
            name="task"
            type="text"
            className="w-full border-2 border-black rounded-md p-2"
          />
        </div>
        <div className="w-full md:w-2/3 mx-auto">
          <label className="mb-1">Task Description:</label>
          <textarea
            type="text"
            name="description"
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
    </section>
  );
};

export default AddToDo;
