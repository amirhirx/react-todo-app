import { useContext, useState } from "react"
import { TodoContext } from "../contexts/todoContext"
import { nanoid } from "nanoid"
import type { ITask } from "../types/task"
import TaskModal from "./TaskModal"

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

    const addTaskWithEnter = (event: { code: string }) => {
        if (event.code === "Enter") {
            addNewTask()
        }
    }

    return (
        <TaskModal
            title={"کار جدید"}
            task={newTaskObj}
            setTask={setNewTaskObj}
            clickHandler={addNewTask}
            closeHandler={closeModal}
            keyDownHandler={addTaskWithEnter}
        />
    )
}

export default AddTaskModal
