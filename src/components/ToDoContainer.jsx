import React from "react";
import style from "../style/ToDoContainer.module.css";
import ToDo from "./ToDo";

export default function ToDoContainer({ data, todos }) {
    const todoList = todos.map((todoTitle, index) => {
        return <ToDo key={index} data={data} title={todoTitle} />;
    });

    return (
        <>
            <div className={style.toDoContainer}>{todoList}</div>
        </>
    );
}
