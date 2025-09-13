import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"

interface ITask {
    key: number
    flag: boolean
    title: string
    text: string
}

function Task({ key, flag, title, text }: ITask) {
    return (
        <div
            key={key}
            className={`bg-white m-4 p-4 rounded-md ${
                flag ? "line-through opacity-45" : ""
            }`}
        >
            <div className="flex items-center justify-between">
                <h3 className={` text-xl font-bold`}>{title}</h3>
                <div className="flex items-center gap-1">
                    <PencilSquareIcon className="h-6 w-6 text-gray-800 transition active:scale-90" />
                    <TrashIcon className="h-6 w-6 text-gray-800 transition active:scale-90" />
                </div>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Task
export type { ITask }
