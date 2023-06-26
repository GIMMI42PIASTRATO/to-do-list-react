import React from "react";
import style from "../style/ToDoDisplay.module.css";
import DisplayHeader from "./DisplayHeader";

export default function ToDoDisplay({ display }) {
    return (
        <div className={style.container}>
            <DisplayHeader display={display} />

            <div></div>
        </div>
    );
}
