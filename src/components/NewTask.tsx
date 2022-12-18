import styles from './NewTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Tasks } from './Tasks'

interface DataArray {
    id: string
    text: string
}

export function NewTask() {
    const [task, SetTask] = useState<DataArray[]>([])
    const [newTaskText, setNewTaskText] = useState('')
    const [countTask, setCountTask] = useState(0)

    const data = {
        id: String(new Date().getTime()),
        text: newTaskText
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        SetTask(state => [...state, data])
        setNewTaskText('')
        console.log(`teste ${task}`)
    }
    function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
    }

    function DeleteTask(taskName: string) {
        const DeletedTask = task.filter(tasks => {
            return tasks.id !== taskName
        })
        SetTask(DeletedTask)
        if(countTask > 0){
            setCountTask( countTask - 1)
        }
    }

    function CountTask(num:number){
        setCountTask(state => state + num)
    }

    return (

        <div className={styles.taskstyle}>

            <form onSubmit={handleCreateNewTask}>
                <input
                    type="text"
                    placeholder='Adicione uma nova tafera'
                    required
                    onChange={handleTaskChange}
                    value={newTaskText}
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
            <main>
                <section className={styles.count}>
                    <p>Tarefas criadas  <span>{task.length}</span></p>
                    <p>Concluídas <span> {countTask} de {task.length}</span></p>
                </section>

                {task.map(taskList => {
                    return (
                        <Tasks
                            key={taskList.id}
                            content={taskList}
                            deleteText={DeleteTask} 
                            count={CountTask}
                        />
                    )
                })}

            </main>

        </div>
    )
}