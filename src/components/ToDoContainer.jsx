import React from "react";
import style from "../style/ToDoContainer.module.css";
import ToDo from "./ToDo";

export default function ToDoContainer({ data }) {
    return (
        <>
            <div className={style.toDoContainer}>
                <ToDo data={data} />
            </div>
        </>
    );
}
