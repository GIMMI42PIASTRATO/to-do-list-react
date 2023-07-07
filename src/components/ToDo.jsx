import React from "react";
import style from "../style/ToDo.module.css";
import { TbCircle, TbCircleCheck, TbCircleCheckFilled } from "react-icons/tb";

export default function ToDo() {
    return (
        <div className={style.container}>
            <div className={style.toDoMain}>
                <input className={style.ceckBox} type="checkbox" />
                <div>
                    <div>Nome attività</div>
                    <div>Categoria</div>
                </div>
            </div>

            <div>Stella</div>
        </div>
    );
}
