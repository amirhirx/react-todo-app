import { useContext } from "react"
import { TodoContext } from "../contexts/todoContext"

import { useState } from "react"
import type { ITask } from "../types/task"
import TaskModal from "./TaskModal"

interface IEditTaskModal {
    id: string
    flag: boolean
    title: string
    text: string
    closeModal: () => void
}

function EditTaskModal({ id, flag, title, text, closeModal }: IEditTaskModal) {
    const { editTask } = useContext(TodoContext)

    const [task, setTask] = useState<ITask>({
        id: id,
        flag: flag,
        text: text,
        title: title,
    })

    const editTaskHandler = () => {
        editTask(task)
        closeModal()
    }

    const editTaskWithEnter = (event: { code: string }) => {
        if (event.code === "Enter") {
            editTaskHandler()
        }
    }

    return (
        <TaskModal
            title="ویرایش کار"
            task={task}
            setTask={setTask}
            clickHandlerText={"ویرایش"}
            clickHandler={editTaskHandler}
            closeHandler={closeModal}
            keyDownHandler={editTaskWithEnter}
        />
    )
}

export default EditTaskModal
