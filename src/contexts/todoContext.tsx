import { createContext, useState } from "react"
import type { ITask } from "../components/Task"

interface ITodoContext {
    todo: ITask[]
    newTask: (task: ITask) => void
    removeTask: (id: string) => void
}

const TodoContext = createContext<ITodoContext>({} as ITodoContext)

const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [todo, setTodo] = useState<ITask[]>([] as ITask[])

    const newTask = (task: ITask) => {
        setTodo((prevTodo) => [...prevTodo, { ...task }])
    }

    const removeTask = (id: string) => {
        setTodo((prevTodo) => {
            const removed: ITask[] = []
            prevTodo.map((task) => {
                if (task.id !== id) {
                    removed.push(task)
                }
            })
            return removed
        })
    }

    return (
        <TodoContext.Provider value={{ todo, newTask, removeTask }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoContextProvider }
