"use client";

import { addTask } from "@/utils/redux/todolist";
import { getCurrentDate } from "@/utils/calculate";
import { useDispatch } from "react-redux";

//Generate random numeric ID between 1-1000
function generateRandomNumericId() {
  return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
}

export default function DialogFormTodo({ onCancelFn }) {
  const dispatch = useDispatch(); //REDUX:This allows Actions to the state

  const onSubmitTodo = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    formValues.id = generateRandomNumericId();
    formValues.createdAt = getCurrentDate();
    console.log(formValues);
    dispatch(addTask(formValues)); //REDUX:Add an object to the array
    onCancelFn();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <form onSubmit={onSubmitTodo}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>

          <div>
            <label htmlFor="deadline" className="block font-bold">
              DeadLine:
            </label>
            <input
              id="deadline"
              name="deadline"
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onCancelFn}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
