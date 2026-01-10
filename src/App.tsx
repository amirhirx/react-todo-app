import { useContext, useState } from "react"
import Menu from "./components/Menu"
import AddTaskModal from "./components/AddTaskModal"
import { TodoContext } from "./contexts/todoContext"
import TasksContainer from "./components/TasksContainer"

function App() {
    const { todo } = useContext(TodoContext)

    const [showNewTaskModal, setShowNewModal] = useState(false)

    const openNewTaskModal = () => setShowNewModal(true)
    const closeNewTaskModal = () => setShowNewModal(false)

    return (
        <>
            <Menu toggleShowAddTaskModal={openNewTaskModal} />
            {showNewTaskModal ? (
                <AddTaskModal closeModal={closeNewTaskModal} />
            ) : null}
            <TasksContainer tasks={todo} />
        </>
    )
}

export default App
