import React, { useState } from "react";
import style from "../style/ToDo.module.css";
import {
    TbCircle,
    TbCircleCheck,
    TbCircleCheckFilled,
    TbStar,
    TbStarFilled,
} from "react-icons/tb";

export default function ToDo({ data }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [isImportant, setIsImportant] = useState(false);
    const [isImportantHovered, setIsImportantHovered] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.toDoMain}>
                {isDone ? (
                    <TbCircleCheckFilled
                        className={style.checkBox}
                        onClick={() => setIsDone(false)}
                        style={{ color: data.color }}
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

                <div className={style.info}>
                    <div>Nome attività</div>
                    <div>Categoria</div>
                </div>
            </div>

            {isImportant ? (
                <TbStarFilled
                    className={style.star}
                    onClick={() => setIsImportant(false)}
                    style={{ color: data.color }}
                />
            ) : isImportantHovered ? (
                <TbStar
                    className={style.star}
                    onMouseLeave={() => setIsImportantHovered(false)}
                    onClick={() => setIsImportant(true)}
                    style={{ color: data.color }}
                />
            ) : (
                <TbStar
                    className={style.star}
                    onMouseEnter={() => setIsImportantHovered(true)}
                />
            )}
        </div>
    );
}
