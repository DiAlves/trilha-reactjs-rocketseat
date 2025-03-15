import styles from './CreateTask.module.css';
import { ITask } from '../ITask';

import { useState, ChangeEvent, FormEvent } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

interface CreateTaskProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export function CreateTask({ tasks, setTasks }: CreateTaskProps) {

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const isNewTaskTittleEmpty = newTaskTitle.length === 0;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault(); // Evita recarregar a página ao enviar o formulário

    const newTask: ITask = {
      id: uuidv4(),
      title: newTaskTitle,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask]);
    setNewTaskTitle('');
  }

  function handleNewTaskTitleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewTaskTitle(event.target.value);
  }

  return (
    <div className={styles.createTask}>
      <form onSubmit={handleCreateNewTask}>
        <textarea
          name='comment'
          placeholder='Adicione uma nova tarefa'
          value={newTaskTitle}
          onChange={handleNewTaskTitleChange}
          required
        />

        <button type="submit" disabled={isNewTaskTittleEmpty}>
          Criar <PlusCircle size={16} weight="bold"/>
        </button>
      </form>
    </div>
  );
}