import { PlusIcon } from "@heroicons/react/24/solid"
import type { MouseEventHandler } from "react"
import ThemeToggleButton from "./ThemeToggleButton"

interface IMenu {
    toggleShowAddTaskModal: MouseEventHandler
}

function Menu({ toggleShowAddTaskModal }: IMenu) {
    return (
        <nav className="bg-white py-3 px-8 flex items-center justify-between">
            <h1 className="text-2xl font-black">تودو</h1>
            <div className="flex items-center gap-4">
                <ThemeToggleButton />
                <button
                    onClick={toggleShowAddTaskModal}
                    className="bg-blue-400 text-white font-bold py-2 px-4 rounded-md transition active:scale-95 active:bg-blue-500 flex items-center"
                >
                    کار جدید
                    <PlusIcon className="h-6 w-6 text-white mr-2" />
                </button>
            </div>
        </nav>
    )
}

export default Menu
