import { ITask } from "../../ITask";
import styles from './Header.module.css';

interface HeaderProps {
  tasks: ITask[];
}

export function Header({ tasks }: HeaderProps ) {

  function checkedTasksCounter() {
    return tasks.reduce((prevValue, currentTask) => {
      return currentTask.isChecked ? prevValue + 1 : prevValue;
    }, 0);
  }

  return (
    <div className={styles.header}>
      <strong>Tarefas criadas <span className={styles.count}> {tasks.length} </span></strong>
      <strong>Concluídas <span className={styles.count}> {checkedTasksCounter()} </span></strong>
    </div>
  );
}