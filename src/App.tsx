import { useContext, useState } from "react"
import Menu from "./components/Menu"
import AddTaskModal from "./components/AddTaskModal"
import { TodoContext } from "./contexts/todoContext"
import Task from "./components/Task"

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
            <div className="w-2/3 mx-auto">
                {todo.map(({ id, flag, title, text }) => {
                    return (
                        <Task
                            key={id}
                            id={id}
                            flag={flag}
                            title={title}
                            text={text}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default App
