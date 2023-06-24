import React from "react";
import style from "../style/ToDoDisplay.module.css";
import DisplayHeader from "./DisplayHeader";

export default function ToDoDisplay() {
    return (
        <div className={style.container}>
            <DisplayHeader />

            <div></div>
        </div>
    );
}
