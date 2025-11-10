import React from "react";
import Image from "next/image";

export default function StoragePanel({
  isBtnLocked,
  handleClearTodos,
  toggleLockBtn,
}) {
  return (
    <div className="flex flex-row items-center py-2 ml:mt-8">
      <div className="m-auto">
        <button
          className={`${
            isBtnLocked ? "opacity-55" : "opacity-100 hover:scale-105"
          } p-2 bg-black text-red-500 rounded-md`}
          disabled={isBtnLocked}
          onClick={handleClearTodos}
        >
          <span>Clear All</span>
        </button>
      </div>
      <div className="flex items-center mr-auto ml-auto">
        <span>Status</span>
        <div>
          <Image
            src={isBtnLocked ? "/lock.svg" : "/unlock.svg"}
            width={45}
            height={45}
            alt="lock icon"
            onClick={toggleLockBtn}
            className="ml-2 cursor-pointer"
          ></Image>
        </div>
      </div>
    </div>
  );
}
