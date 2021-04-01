//franzi is working here(-:)

import React, {useState, useEffect} from "react";
import NewTaskInput from "../NewTaskInput";
import Task from "../Task";
import "./TaskList.css";


function TaskList() {
    // default to local storage if something's there, otherwise []
    const [tasks, setTasks] = useState(() => {
      try {
        // Get from local storage by key
        const items = window.localStorage.getItem('tasks');
        // Parse stored json or if none return initialValue
        return items ? JSON.parse(items) : [];
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return [];
      }
  });

    // useEffect to observe changes in tasks list
    useEffect(() => {
      try {
        // Save to local storage
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.log(error);
      }
    }, [tasks])

    const addTask = task => {
      const newTasks=[task, ...tasks]
      setTasks(newTasks)
    };

    const updateTask = (taskId, newValue) => {
     setTasks(prev => prev.map(item => (item.id === taskId ? newValue :item )));
    };


    // remove task part 

    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id)   //...tasks -> filters the array of tasks

        setTasks(removeArr);
    };
    
    // Done part 2 

    const compTask = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id){
                task.isComplete = !task.isComplete
            }
            return task;
        });
        setTasks(updatedTasks);
    };


    return (
        //<> this is called fragment. It´s like an empty div
        
        <div className="TaskList">
            <h2>
                Todo List </h2>
            <NewTaskInput onSubmit={addTask} />
            <Task 
            tasks={tasks}
            compTask={compTask}
            removeTask={removeTask}
            updateTask={updateTask} />
        </div>
    ); 
}


export default TaskList;

 

// i dont know what im doing ! Dimitris is here. Me tooo (olli)