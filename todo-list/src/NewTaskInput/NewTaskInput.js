import React, {useState, useEffect, useRef} from "react";

import "./NewTaskInput.css";

function NewTaskInput(props) {
  const [input, setInput] = useState ('');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  });
  const setChange = e => {
    setInput(e.target.value)
  }
  const setSubmit = e => {
    e.preventDefault();


    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

    setInput('');
  }

  return (
    <div className="NewTaskInput">
    <form className= 'task-form' onSubmit={setSubmit} >
    <>
      <input
        placeholder="What do you want to do?"
        className="NewTaskInput"
        value={input}
        type="text"
        name={'text'}
        onChange={setChange}
        ref={inputRef}
      />
      <button className="push">
        Add a Todo
      </button>
    </>
    </form> 
    </div>
  );
}

export default NewTaskInput;
