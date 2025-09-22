import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"
import { useContext, useState } from "react"
import { TodoContext } from "../contexts/todoContext"
import EditTaskModal from "./EditTaskModal"

interface ITask {
    id: string
    flag: boolean
    title: string
    text: string
}

function Task({ id, flag, title, text }: ITask) {
    const { removeTask } = useContext(TodoContext)
    const handleTrashClick = () => {
        removeTask(id)
    }

    const handleEditTask = () => setShowEditTaskModal(true)

    const closeEditTaskModal = () => {
        setShowEditTaskModal(false)
    }

    const [showEditTaskModal, setShowEditTaskModal] = useState(false)
    return (
        <>
            {showEditTaskModal && (
                <EditTaskModal
                    id={id}
                    flag={flag}
                    title={title}
                    text={text}
                    closeModal={closeEditTaskModal}
                />
            )}
            <div
                id={id}
                className={`bg-white m-4 p-4 rounded-md ${
                    flag ? "line-through opacity-45" : ""
                }`}
            >
                <div className="flex items-center justify-between">
                    <h3 className={` text-xl font-bold`}>{title}</h3>
                    <div className="flex items-center gap-1">
                        <PencilSquareIcon
                            className="h-6 w-6 text-gray-800 transition active:scale-90"
                            onClick={handleEditTask}
                        />
                        <TrashIcon
                            className="h-6 w-6 text-gray-800 transition active:scale-90"
                            onClick={handleTrashClick}
                        />
                    </div>
                </div>
                <p>{text}</p>
            </div>
        </>
    )
}

export default Task
export type { ITask }
