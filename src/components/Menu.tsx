import type { MouseEventHandler } from "react"

interface IMenu {
    toggleShowAddTaskModal: MouseEventHandler
}

function Menu({ toggleShowAddTaskModal }: IMenu) {
    return (
        <nav className="bg-white py-3 px-8 flex items-center justify-between">
            <h1 className="text-2xl font-black">تودو</h1>
            <button
                onClick={toggleShowAddTaskModal}
                className="bg-blue-400 text-white font-bold py-2 px-4 rounded-md transition active:scale-95 active:bg-blue-500"
            >
                کار جدید
            </button>
        </nav>
    )
}

export default Menu
