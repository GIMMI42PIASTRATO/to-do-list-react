import React from "react";
import style from "../style/List.module.css";

export default function List({ list }) {
    return (
        <div className={style.container} style={{ color: list.color }}>
            <div className={style.wrapper} tabIndex={1}>
                <div className={style.icon}>{list.icon}</div>
                <div className={style.text}>{list.text}</div>
            </div>
        </div>
    );
}
