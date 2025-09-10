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
            <h3 className={` text-xl font-bold`}>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Task
