import React from "react";
import { useDispatch } from "react-redux";
import { toDoActions } from "../../store/to-dos-slice";

const UpdateToDo = ({ toDo, isUpdating }) => {
  const dispatch = useDispatch();

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    // Updated task
    const updatedToDo = {
      id: toDo.id,
      task: form.task.value,
      description: form.description.value,
    };

    // Guard clause for checking form
    if (!updatedToDo.task || !updatedToDo.description) {
      console.log("Plese input some task and descriptions");
      isUpdating(false);

      return;
    }

    dispatch(toDoActions.updateToDo(updatedToDo));
    isUpdating(false);
  };

  return (
    <section className="max-w-lg mx-auto px-4 pt-12">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Add a new to do
      </h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="w-full md:w-2/3 mx-auto">
          <label className="mb-1">Task Name:</label>
          <input
            defaultValue={toDo.task}
            name="task"
            type="text"
            className="w-full border-2 border-black rounded-md p-2"
          />
        </div>
        <div className="w-full md:w-2/3 mx-auto">
          <label className="mb-1">Task Description:</label>
          <textarea
            defaultValue={toDo.description}
            type="text"
            name="description"
            className="w-full border-2 border-black rounded-md p-2"
          />
        </div>
        <div className="w-full md:w-2/3 mx-auto">
          <input
            type="submit"
            value="Edit task"
            className="bg-slate-400 px-6 py-2 rounded-md cursor-pointer"
          />
        </div>
      </form>
    </section>
  );
};

export default UpdateToDo;
