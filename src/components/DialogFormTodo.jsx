import { addTodo } from "@/utils/redux/todolist";
import { useDispatch } from "react-redux";
import { generateRandomNumericId } from "@/utils/calculate";
import { getCurrentDate } from "@/utils/calculate";

//Generate random numeric ID between 1-1000

export default function DialogFormTodo({ onCancelFn }) {
  const dispatch = useDispatch(); //REDUX:This allows Actions to the state

  const handleAddTodo = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    formValues.title = formValues.title.toUpperCase(); // Convert title to uppercase
    formValues.id = generateRandomNumericId();
    formValues.createdAt = getCurrentDate();
    console.log(formValues);
    dispatch(addTodo(formValues)); //REDUX:Add an object to the array
    onCancelFn();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 max-w-sm sm:max-w-md">
        <form onSubmit={handleAddTodo}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-bold text-sm">
              Todo Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
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
              maxLength={100}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="deadline" className="block font-bold text-sm">
              DeadLine 🎈
            </label>
            <input
              id="deadline"
              name="deadline"
              type="date"
              /* defaultValue={getCurrentDate()} */
              min={getCurrentDate()}
              className="mt-1 mb-5 flex w-fit border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-center space-x-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
            <button
              type="button"
              onClick={onCancelFn}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
