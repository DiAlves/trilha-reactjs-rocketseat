import './index.css';

import { ITask } from './ITask';
import { Header } from './components/Header';
import { Header as HeaderTasks } from './components/list/Header';
import { Empty } from './components/list/Empty';
import { TaskList } from './components/list/TaskList';
import { CreateTask } from './components/CreateTask';
import { useState } from 'react'

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleToggleTask(id: string, value: boolean) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  function onDeleteTask(id: string) {
    if (!confirm('Tem certeza que deseja excluir esta tarefa?')) {
      return
    }

    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks)
  }
  
  return (
    <div>
      <Header />
      <CreateTask
        setTasks={setTasks}
      />

      <HeaderTasks 
        tasks={tasks}
      />

      {tasks.length > 0 ?
        <TaskList
          tasks={tasks}
          handleToggleTask={handleToggleTask}
          onDeleteTask={onDeleteTask}
        /> : 
        <Empty />
      }
    </div>
  )
}
