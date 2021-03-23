import React, {useState } from "react";
import NewTaskInput from "./NewTaskInput";
import TaskList from "./TaskList";



import './App.css';

function App() {
  const [tasks, setTasks] = useState ([
    {
      text: "task",
      status: "in progress"
    },
    {
      text: "task 2",
      status: "in progress"
    }
  ]);

  const addNewTask = (newTaskText) => {
    const newTasks = [
      ...tasks,
      {
        text: newTaskText,
        status: "in progress"
      }
    ];

    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Hello everyone</h1>
      <TaskList tasks={tasks} />
      <NewTaskInput action={addNewTask} />
    </div>
  );
}

export default App;