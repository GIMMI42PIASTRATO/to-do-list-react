import React from "react";
import style from "../style/AddToDo.module.css";
import { TbPlus, TbPumpkinScary } from "react-icons/tb";

export default function AddToDo({ data }) {
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
                />
            </div>
        </div>
    );
}
