//franzi is working here(-:)

import React, {useState} from "react";

import Task from "../Task";
import "./TaskList.css";


function TaskList({ tasks }) {
    return (
        <>
            <h2>List</h2>
            <ul className="TaskList">
                {tasks.map((task, index) => (
                <Task text={task.text} key={index} />
                ))}
            </ul>
        </>
    
    )
}

export default TaskList;
// i dont know what im doing ! Dimitris is here. Me tooo (olli)