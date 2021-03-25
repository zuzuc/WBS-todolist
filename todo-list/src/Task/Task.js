import React, {useState} from "react";
import {FaTrashAlt} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import NewTaskInput from "../NewTaskInput";
import './Task.css';

function Task({ tasks, compTask, removeTask, updateTask }) {
  // const [edit, setEdit] = useState ({
  //   id: null,
  //   value: ''
  // });


//Setting

    const [edit, setEdit] = useState ({
      id: null,
      value: ''
    })

    const submitUpdate = value => {
      updateTask(edit.id, value);
      setEdit({
          id: null,
          value: ''
      });
  };
    
    if (edit.id) {
      return <NewTaskInput edit={edit} onSubmit={submitUpdate} />;
    }


   
  return tasks.map ((task, index) => (
    // <div className="Task">
      <div
         className={task.isComplete ? 'Task completed' : 'Task'}       //
         key={index}
         >
          <div className="text-box" key={task.id} onClick={() => compTask(task.id)} >
             {task.text}
           </div>
          
           <div className='icons'>
             <FaTrashAlt                                                          //icon connected to button
             onClick={() => removeTask(task.id)}
             className='remove-icon'
             />
             <AiFillEdit 
             onClick={() => setEdit({ id: task.id, value: task.text})}
             className='edit-icon'></AiFillEdit>
           </div>
        </div>
      // </div>

  ));

}
export default Task;