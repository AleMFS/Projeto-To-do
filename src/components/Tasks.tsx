import { EmptyTasks } from './EmptyTask'
import { Trash, Circle, Check } from 'phosphor-react'
import styles from './Tasks.module.css'
import { useState } from 'react'

interface contentProps {
    text: string
    id: string
}

interface TaskProps {
    content: contentProps
    deleteText: (task: string) => void
    count: (number: number) => void
}


export function Tasks({ content, deleteText, count }: TaskProps) {
    const [click, setClick] = useState(false)




    function handleClicked() {
        setClick(!click)

        if (click === true) {
            count(-1)
        } else {
            count(1)
        }

    }
    function handleDeletedTask() {
        deleteText(content.id)
    }


    return (

        <div className={styles.tasklist}>

            <button onClick={handleClicked}>
                {click ? <Check className={styles.check} weight='bold' size={16} /> :
                    <Circle className={styles.circle} weight='bold' size={18} />}
            </button>


            <p className={click ? styles.completed : styles.incompleted}>{content.text}</p>

            <button onClick={handleDeletedTask}>
                <Trash className={styles.trash} size={18} />
            </button>


        </div>
    )


}