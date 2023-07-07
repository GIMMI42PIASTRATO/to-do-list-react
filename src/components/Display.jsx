import React from "react";
import style from "../style/Display.module.css";
import DisplayHeader from "./DisplayHeader";
import ToDoContainer from "./ToDoContainer";

export default function Display({ display }) {
    return (
        <div className={style.container}>
            <DisplayHeader display={display} />

            <ToDoContainer />

            <div className={style.addTodo}>Aggiungi i todo</div>
        </div>
    );
}
