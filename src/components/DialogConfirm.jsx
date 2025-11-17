export default function DialogConfirm({ onAcceptFn, onCancelFn }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 z-50 p-4">
      <div className="justify-items-center p-4 bg-white rounded  shadow-md w-80 max-w-sm lg:max-w-md ">
        <h2 className="text-lg font-bold mb-4 text-center">
          Confirm Remove Todo
        </h2>
        <div className="flex w-full justify-around">
          <button
            onClick={onAcceptFn}
            className="w-20 px-2 py-2 bg-red-600 text-white rounded"
          >
            Accept
          </button>
          <button
            onClick={onCancelFn}
            className="w-20 px-2 py-2 bg-gray-300 text-gray-700 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
