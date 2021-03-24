import React from "react";
import {FaTrashAlt} from 'react-icons/fa'


function Task({ tasks, compTask, removeTask }) {
  // const [edit, setEdit] = useState ({
  //   id: null,
  //   value: ''
  // });


//Setting

   
  return tasks.map ((task, index) => (
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

  ));

}
export default Task;