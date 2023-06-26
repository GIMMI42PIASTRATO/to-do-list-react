import React from "react";
import style from "../style/List.module.css";

export default function List({ list, setDisplay }) {
    return (
        <div className={style.container}>
            <div
                className={style.wrapper}
                tabIndex={1}
                onClick={() => setDisplay(list)}
            >
                <div className={style.icon} style={{ color: list.color }}>
                    {<list.icon />}
                </div>
                <div className={style.text}>{list.text}</div>
            </div>
        </div>
    );
}
