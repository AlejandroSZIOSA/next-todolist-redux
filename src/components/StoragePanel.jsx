import Image from "next/image";

export default function StoragePanel({
  isBtnLocked,
  handleClearTodos,
  toggleLockBtn,
}) {
  return (
    <div className="flex flex-row items-center py-2 lg:mt-8">
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
        <div onClick={toggleLockBtn} className="ml-2 cursor-pointer">
          <Image
            src={isBtnLocked ? "/si_lock-fill_red.svg" : "/si_unlock-fill.svg"}
            width={46}
            height={46}
            alt="lock icon"
          />
        </div>
      </div>
    </div>
  );
}
