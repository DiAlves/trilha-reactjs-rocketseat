import './index.css';
import './App.css';

import { ITask } from './ITask';
import { Header } from './components/Header';
import { CreateTask } from './components/CreateTask';
import { useState } from 'react'

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  
  return (
    <div>
      <Header />
      <CreateTask
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  )
}
