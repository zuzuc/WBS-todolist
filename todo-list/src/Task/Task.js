import React, {useState} from "react";

function Task({ text }) {
  return (
    <li>
      <h1>Hello everyone</h1>
      <h2>Does it work finally?</h2>
      {text} <button>done</button>
    </li>
  );
}

export default Task;