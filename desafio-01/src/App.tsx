import './index.css';

import { ITask } from './ITask';
import { Header } from './components/Header';
import { Header as HeaderTasks } from './components/list/Header';
import { Empty } from './components/list/Empty';
import { CreateTask } from './components/CreateTask';
import { useState } from 'react'

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  
  return (
    <div>
      <Header />
      <CreateTask
        setTasks={setTasks}
      />

      <HeaderTasks 
        tasks={tasks}
      />

      <Empty />
    </div>
  )
}
