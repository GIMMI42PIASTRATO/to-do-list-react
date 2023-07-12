import React from "react";
import style from "../style/Display.module.css";
import DisplayHeader from "./DisplayHeader";
import ToDoContainer from "./ToDoContainer";
import AddToDo from "./AddToDo";

export default function Display({ display }) {
    return (
        <div className={style.container}>
            <DisplayHeader display={display} />

            <ToDoContainer />

            <AddToDo />
        </div>
    );
}
