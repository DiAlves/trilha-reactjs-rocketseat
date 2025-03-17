import { ITask } from "../../ITask";
import styles from './Header.module.css';

interface HeaderProps {
  tasks: ITask[];
}

export function Header({ tasks }: HeaderProps ) {
  return (
    <div className={styles.header}>
      <strong>Tarefas criadas <span className={styles.count}> {tasks.length} </span></strong>
      <strong>Conluídas <span className={styles.count}> {tasks.filter(tasks => tasks.isChecked).length} </span></strong>
    </div>
  );
}