import React from "react";
import {FaTrashAlt} from 'react-icons/fa'

import './Task.css';

function Task({ tasks, compTask, removeTask }) {
  // const [edit, setEdit] = useState ({
  //   id: null,
  //   value: ''
  // });


//Setting

   
  return tasks.map ((task, index) => (
    <div className="Task">
      <div
         className={task.isComplete ? 'Task completed' : 'Task'}       //
         key={index}
         >
           <div key={task.id} onClick={() => compTask(task.id)} >
             {task.text}
           </div>
          
           <div className='icons'>
             <FaTrashAlt                                                          //icon connected to button
             onClick={() => removeTask(task.id)}
             className='remove-icon'
             />
           </div>
      </div>
      </div>

  ));

}
export default Task;