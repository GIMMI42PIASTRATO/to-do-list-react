import React, { useState } from "react";
import style from "../style/ToDo.module.css";
import { TbCircle, TbCircleCheck, TbCircleCheckFilled } from "react-icons/tb";

export default function ToDo() {
    const [isHovered, setIsHovered] = useState(false);
    const [isDone, setIsDone] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.toDoMain}>
                {isDone ? (
                    <TbCircleCheckFilled
                        className={style.checkBox}
                        onClick={() => setIsDone(false)}
                    />
                ) : isHovered ? (
                    <TbCircleCheck
                        className={style.checkBox}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => setIsDone(true)}
                    />
                ) : (
                    <TbCircle
                        className={style.checkBox}
                        onMouseEnter={() => setIsHovered(true)}
                    />
                )}

                <div>
                    <div>Nome attività</div>
                    <div>Categoria</div>
                </div>
            </div>

            <div>Stella</div>
        </div>
    );
}
