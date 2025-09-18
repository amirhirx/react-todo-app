import { useState } from "react"
import Menu from "./components/Menu"
import AddTaskModal from "./components/AddTaskModal"

function App() {
    const [showNewTaskModal, setShowNewModal] = useState(false)

    const openNewTaskModal = () => setShowNewModal(true)
    const closeNewTaskModal = () => setShowNewModal(false)
    return (
        <>
            <Menu toggleShowAddTaskModal={openNewTaskModal} />
            {showNewTaskModal ? (
                <AddTaskModal closeModal={closeNewTaskModal} />
            ) : null}
        </>
    )
}

export default App
