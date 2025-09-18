import { createContext, useState } from "react"
import type { ITask } from "../components/Task"

interface ITodoContext {
    todo: ITask[]
    newTask: (task: ITask) => void
}

const TodoContext = createContext<ITodoContext>({} as ITodoContext)

const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [todo, setTodo] = useState<ITask[]>([] as ITask[])

    const newTask = (task: ITask) => {
        setTodo((prevTodo) => [...prevTodo, { ...task }])
    }

    return (
        <TodoContext.Provider value={{ todo, newTask }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoContextProvider }
