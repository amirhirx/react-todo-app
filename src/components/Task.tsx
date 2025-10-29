import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"
import { useContext, useState } from "react"
import { TodoContext } from "../contexts/todoContext"
import EditTaskModal from "./EditTaskModal"

import { CheckCircleIcon as CheckCircleOutline } from "@heroicons/react/24/outline"
import { CheckCircleIcon as CheckCircleSolid } from "@heroicons/react/24/solid"

interface ITask {
    id: string
    flag: boolean
    title: string
    text: string
}

function Task({ id, flag, title, text }: ITask) {
    const { removeTask, toggleTaskFlag } = useContext(TodoContext)
    const handleTrashClick = () => {
        removeTask(id)
    }

    const handleEditTask = () => setShowEditTaskModal(true)

    const closeEditTaskModal = () => {
        setShowEditTaskModal(false)
    }

    const checkIconHandler = () => {
        const changedTask = {
            id: id,
            flag: !flag,
            title: title,
            text: text,
        }

        console.log(changedTask)
        toggleTaskFlag(changedTask)
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
                className={`bg-[var(--primary-color)] m-4 p-4 rounded-md ${
                    flag ? "line-through opacity-45" : ""
                }`}
            >
                <div className="flex items-center justify-between">
                    <div className="flex item-center gap-1">
                        {flag ? (
                            <CheckCircleOutline
                                className="h-6 w-6 text-[var(--text-color)] transition active:scale-90"
                                onClick={checkIconHandler}
                            />
                        ) : (
                            <CheckCircleSolid
                                className="h-6 w-6 text-[var(--text-color)] transition active:scale-90"
                                onClick={checkIconHandler}
                            />
                        )}
                        <h3
                            className={` text-xl font-bold text-[var(--text-color)]`}
                        >
                            {title}
                        </h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <PencilSquareIcon
                            className="h-6 w-6 text-[var(--text-color)] transition active:scale-90"
                            onClick={handleEditTask}
                        />
                        <TrashIcon
                            className="h-6 w-6 text-[var(--text-color)] transition active:scale-90"
                            onClick={handleTrashClick}
                        />
                    </div>
                </div>
                <p className="text-[var(--text-color)]">{text}</p>
            </div>
        </>
    )
}

export default Task
export type { ITask }
