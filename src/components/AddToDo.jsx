import React from "react";
import style from "../style/AddToDo.module.css";
import { TbPlus, TbPumpkinScary } from "react-icons/tb";

export default function AddToDo() {
    return (
        <div className={style.container}>
            <TbPlus />
            <input type="text" placeholder="New task" className={style.addToDo} />
        </div>
    );
}
