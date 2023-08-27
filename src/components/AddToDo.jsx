import React from "react";
import style from "../style/AddToDo.module.css";
import { TbPlus } from "react-icons/tb";

export default function AddToDo({
    data,
    todos,
    setTodos,
    todoText,
    setTodoText,
}) {
    return (
        <div className={style.container}>
            <div className={style.inputContainer}>
                <TbPlus
                    className={style.tbPlus}
                    style={{ color: data.color }}
                />
                <input
                    type="text"
                    placeholder="New task"
                    className={style.addToDo}
                    style={{ color: data.color }}
                    value={todoText}
                    onChange={(event) => {
                        setTodoText(event.target.value);
                    }}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" && todoText.trim() !== "") {
                            setTodos([...todos, todoText]);
                            setTodoText("");
                        }
                    }}
                />
            </div>
        </div>
    );
}
