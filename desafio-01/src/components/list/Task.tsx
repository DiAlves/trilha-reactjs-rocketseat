import { Trash } from 'phosphor-react';
import { ITask } from "../../ITask";
import styles from './Task.module.css';

interface TaskProps {
  tasks: ITask[];
}

export function Task({ tasks }: TaskProps ) {
  return (
    <div className={styles.task}>
      
      <div>
        <input type="checkbox" id="taskCheckbox" />
        <label htmlFor="taskCheckbox"></label>

        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer</p>
      </div>

      <button title='Deletar comentário'>
			  <Trash size={20}/>
			</button>
    </div>
  );
}