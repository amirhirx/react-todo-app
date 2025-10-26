import { useContext, useState } from "react"
import { TodoContext } from "../contexts/todoContext"
import { nanoid } from "nanoid"
import type { ITask } from "./Task"

interface IAddTaskModal {
    closeModal: () => void
}

function AddTaskModal({ closeModal }: IAddTaskModal) {
    const { newTask } = useContext(TodoContext)

    const [newTaskObj, setNewTaskObj] = useState<ITask>({
        id: nanoid(),
        flag: false,
        title: "",
        text: "",
    })

    const addNewTask = () => {
        newTask(newTaskObj)
        closeModal()
    }

    return (
        <div className="w-full h-full bg-white/30 backdrop-blur fixed top-0 left-0 flex items-center justify-center z-10">
            <div className="bg-white my-4 w-80 mx-auto rounded-md p-4 shadow-md">
                <h2 className="font-bold text-xl">کار جدید</h2>
                <div className="my-2">
                    <label htmlFor="new-task-title">عنوان</label>
                    <input
                        id="new-task-title"
                        name="new-task-title"
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none px-2 py-1 shadow-md"
                        value={newTaskObj.title}
                        onChange={(event) => {
                            setNewTaskObj((prev) => {
                                return { ...prev, title: event?.target.value }
                            })
                        }}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="new-task-text">توضیحات</label>
                    <textarea
                        name="new-task-text"
                        id="new-task-text"
                        rows={4}
                        className="w-full min-w-full max-w-full min-h-12 border border-gray-300 rounded-md outline-none px-2 py-1 shadow-md"
                        value={newTaskObj.text}
                        onChange={(event) => {
                            setNewTaskObj((prev) => {
                                return { ...prev, text: event?.target.value }
                            })
                        }}
                    ></textarea>
                </div>
                <button
                    onClick={addNewTask}
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
