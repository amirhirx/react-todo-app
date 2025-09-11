import type { MouseEventHandler } from "react"

interface IAddTaskModal {
    buttonOnClick: MouseEventHandler
    closeModal: MouseEventHandler
}

function AddTaskModal({ buttonOnClick, closeModal }: IAddTaskModal) {
    return (
        <div className="w-full h-full bg-white/30 backdrop-blur fixed top-0 left-0 flex items-center justify-center z-10">
            <div className="bg-white my-4 w-80 mx-auto rounded-md p-4 shadow-md">
                <h2 className="font-bold text-xl">کار جدید</h2>
                <div className="my-2">
                    <label htmlFor="">عنوان</label>
                    <input
                        id="new-task-title"
                        name="new-task-title"
                        type="text"
                        className="w-full border border-gray-500 rounded-md outline-none px-2"
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="">توضیحات</label>
                    <textarea
                        name="new-task-text"
                        id="new-task-text"
                        rows={4}
                        className="w-full min-w-full max-w-full min-h-12 border border-gray-500 rounded-md outline-none px-2"
                    ></textarea>
                </div>
                <button
                    onClick={buttonOnClick}
                    className="bg-green-500 text-white font-bold py-2 px-4 mt-2 text-sm rounded-md cursor-pointer transition active:bg-green-600 active:scale-95"
                >
                    افزودن
                </button>
                <button className="m-2" onClick={closeModal}>
                    بستن
                </button>
            </div>
        </div>
    )
}

export default AddTaskModal
