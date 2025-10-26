import { useContext } from "react"
import { TodoContext } from "../contexts/todoContext"

import { useState } from "react"

interface IEditTaskModal {
    id: string
    flag: boolean
    title: string
    text: string
    closeModal: () => void
}

function EditTaskModal({ id, flag, title, text, closeModal }: IEditTaskModal) {
    const { editTask } = useContext(TodoContext)

    const [taskTitle, setTaskTitle] = useState(title)
    const [taskText, setTaskText] = useState(text)

    const editTaskHandler = () => {
        const editedTask = {
            id: id,
            flag: flag,
            title: taskTitle,
            text: taskText,
        }
        editTask(editedTask)
        closeModal()
    }

    return (
        <div className="w-full h-full bg-white/30 backdrop-blur fixed top-0 left-0 flex items-center justify-center z-10">
            <div className="bg-white my-4 w-80 mx-auto rounded-md p-4 shadow-md">
                <h2 className="font-bold text-xl">ویرایش کار</h2>
                <div className="my-2">
                    <label htmlFor="task-title">عنوان</label>
                    <input
                        id="task-title"
                        name="task-title"
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none px-2 py-1 shadow-md"
                        value={taskTitle}
                        onChange={(event) => setTaskTitle(event.target.value)}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="task-text">توضیحات</label>
                    <textarea
                        name="task-text"
                        id="task-text"
                        rows={4}
                        className="w-full min-w-full max-w-full min-h-12 border border-gray-300 rounded-md outline-none px-2 py-1 shadow-md"
                        value={taskText}
                        onChange={(event) => setTaskText(event.target.value)}
                    ></textarea>
                </div>
                <button
                    onClick={editTaskHandler}
                    className="bg-green-500 text-white font-bold py-2 px-4 mt-2 text-sm rounded-md cursor-pointer transition active:bg-green-600 active:scale-95"
                >
                    تایید
                </button>
                <button className="m-2" onClick={closeModal}>
                    بستن
                </button>
            </div>
        </div>
    )
}

export default EditTaskModal
