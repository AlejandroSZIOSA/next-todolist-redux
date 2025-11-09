import React from "react";

export default function DialogConfirm({ onAcceptFn, onCancelFn }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 p-4">
      <div className="p-4 bg-white rounded shadow-md w-full max-w-sm sm:max-w-md">
        <h2 className="text-lg font-bold mb-4 text-center">Confirm Remove</h2>
        <div className="flex flex-col sm:flex-row justify-end gap-2">
          <button
            onClick={onAcceptFn}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full sm:w-auto"
          >
            Accept
          </button>
          <button
            onClick={onCancelFn}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
