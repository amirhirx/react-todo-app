import type { ITask } from "./Task"
import Task from "./Task"

export default function TasksContainer({ tasks }: { tasks: ITask[] }) {
    return (
        <div className="w-11/12 md:w-2/3 mx-auto">
            {tasks.map(({ id, flag, title, text }) => {
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
    )
}
