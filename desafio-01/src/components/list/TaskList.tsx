import { Trash } from 'phosphor-react';
import { ITask } from "../../ITask";
import styles from './TaskList.module.css';

interface TaskProps {
  tasks: ITask[];
  handleToggleTask: (id: string, value: boolean) => void;
}

export function TaskList({ tasks, handleToggleTask  }: TaskProps ) {

  function teste() {
    console.log(tasks);
  }

  return (
    <div>
      {tasks
        .slice()
        .sort((a, b) => Number(a.isChecked) - Number(b.isChecked))
        .map((task) => (
          <div key={task.id} className={styles.task}>
            <div>
              <input
                type="checkbox" id={task.id}
                checked={task.isChecked}
                onChange={() => handleToggleTask(task.id, !task.isChecked)}
              />
              <label htmlFor={task.id}></label>
              <p className={task.isChecked ? styles.taskIsChecked : styles.taskIsNotChecked}>
                {task.title}
              </p>
            </div>
      
            <button title='Deletar comentário' onClick={teste}>
              <Trash size={20}/>
            </button>
          </div>
      ))}
    </div>
  );
}