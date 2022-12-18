import styles from './EmptyTask.module.css'
import clipboard from '../assets/clipboard.svg'

export function EmptyTasks() {
    return (
        <div className={styles.todo}>

            <img src={clipboard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>crie tarefas e organize seus itens a fazer</p>

        </div>
    )
}