import { createContext, useState } from "react"
import type { ITask } from "../components/Task"

interface ITodoContext {
    todo: ITask[]
    newTask: (task: ITask) => void
    removeTask: (id: string) => void
    editTask: (task: ITask) => void
    toggleTaskFlag: (task: ITask) => void
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

    const editTask = (targetTask: ITask) => {
        setTodo(
            todo.map((task) => {
                if (task.id == targetTask.id) {
                    return targetTask
                } else {
                    return task
                }
            })
        )
    }

    const toggleTaskFlag = (targetTask: ITask) => {
        setTodo(
            todo.map((task) => {
                if (task.id == targetTask.id) {
                    const changed = {
                        id: targetTask.id,
                        flag: targetTask.flag,
                        title: targetTask.title,
                        text: targetTask.text,
                    }
                    return changed
                } else {
                    return task
                }
            })
        )
    }

    return (
        <TodoContext.Provider
            value={{ todo, newTask, removeTask, editTask, toggleTaskFlag }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoContextProvider }
