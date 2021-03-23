import React, { useRef } from "react";

import "./NewTaskInput.css";

function NewTaskInput({ action }) {
  const inputEl = useRef(null);

  const onTyping = (e) => {
    console.log(e);
    const { keyCode, target } = e;
    if (keyCode === 13) {
      action(target.value);
      target.value = "";
    }
  };

  const onClick = () => {
    action(inputEl.current.value);
    inputEl.current.value = "";
  };

  return (
    <>
      <input
        onKeyDown={onTyping}
        placeholder="add todo"
        className="NewTaskInput"
        type="text"
        ref={inputEl}
      />
      <button onClick={onClick} className="push">
        add
      </button>
    </>
  );
}

export default NewTaskInput;
