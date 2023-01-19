import React, { useState } from "react";

function TodoItem(props) {
    const [isDone, setIsDone] = useState(false);

    function handleClick() {
        setIsDone((preValue) => {
            return !preValue;
        });
    }
    return (
        <div onClick={handleClick}>
            <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
                {props.text}
            </li>
            ;
        </div>
    );
}

export default TodoItem;
