import { createContext, useEffect, useState } from "react"
import type { ITask } from "../types/task"

interface ITodoContext {
    todo: ITask[]
    newTask: (task: ITask) => void
    removeTask: (id: string) => void
    editTask: (task: ITask) => void
    toggleTaskFlag: (id: string) => void
}

const TodoContext = createContext<ITodoContext>({} as ITodoContext)

const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
    const initialTodoState = JSON.parse(localStorage.getItem("todo") as string)
        ? JSON.parse(localStorage.getItem("todo") as string)
        : []
    const [todo, setTodo] = useState<ITask[]>(initialTodoState as ITask[])

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo))
    }, [todo])

    const newTask = (task: ITask) => {
        if (task.title) {
            setTodo((prevTodo) => [...prevTodo, { ...task }])
        }
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
                    if (targetTask.title) {
                        return targetTask
                    } else {
                        return task
                    }
                } else {
                    return task
                }
            })
        )
    }

    const toggleTaskFlag = (id: string) => {
        setTodo(
            todo.map((task) =>
                task.id == id ? { ...task, flag: !task.flag } : task
            )
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
